"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { formatPrice } from '@/utils/formatPrice';
import { Product } from "@/types/Product";



interface CartContextType {
  cart: Product[];
  currentProduct: Product | null; 
  setCurrentProduct: (product: Product) => void; 
  addToCart: (product: Product) => void;
  decreaseFromCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  calculateSubtotal: () => number;
  updateStock: (productId: string, newStock: number) => void;
  totalItems: number;
  totalPrice: number;
  shippingCost: number;
  taxRate: number;
  subtotal: number;
  tax: number;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [stockMap, setStockMap] = useState<Record<string, number>>({});

  // reload page  the cart will empty 
  // useEffect(() => {
  //   localStorage.removeItem("cart");
  // }, []);

  // Load cart and stock from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    const savedStock = localStorage.getItem("stockMap");
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedStock) setStockMap(JSON.parse(savedStock));
  }, []);

  // Save cart and stock to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("stockMap", JSON.stringify(stockMap));
  }, [cart, stockMap]);

  const addToCart = (product: Product) => {
    if (stockMap[product.id] <= 0) {
      alert("Product is out of stock.");
      return;
    }

    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
        ? { ...item, quantity: item.quantity! + product.quantity! }
            : item
        );
      }
      return [...prevCart, { ...product }];
    });

    setStockMap((prevStock) => ({
      ...prevStock,
      [product.id]: (prevStock[product.id] || product.stock!) - product.quantity!,
    }));
  };

  const decreaseFromCart = (productId: string) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === productId);
      if (existingProduct && (existingProduct.quantity || 0) > 1) {
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: (item.quantity || 0) - 1 }
            : item
        );
      }
      return prevCart.filter((item) => item.id !== productId);
    });

    setStockMap((prevStock) => ({
      ...prevStock,
      [productId]: (prevStock[productId] || 0) + 1,
    }));
  };

  const removeFromCart = (productId: string) => {
    const existingProduct = cart.find((item) => item.id === productId);
    if (existingProduct) {
      setStockMap((prevStock) => ({
        ...prevStock,
        [productId]:
          (prevStock[productId] || 0) + (existingProduct.quantity || 0),
      }));
    }
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const calculateSubtotal = () => {
    return cart.reduce(
      (total, item) => total + item.currentprice * (item.quantity || 0),
      0
    );
  };

  const updateStock = (productId: string, newStock: number) => {
    setStockMap((prevStock) => ({
      ...prevStock,
      [productId]: newStock,
    }));
  };

  const shippingCost = 0; // Free shipping for now
  const taxRate = 0.1; // 10% tax rate

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);


  const calculateTotals = () => {
    const subtotal = cart.reduce((total, item) => {
      const itemPrice = formatPrice.toNumber(item.currentprice);
      return total + (itemPrice * item.quantity);
    }, 0);

    const tax = subtotal * taxRate;
    const total = subtotal + tax + shippingCost;

    return {
      subtotal,
      tax,
      total
    };
  };

  // Use the calculated totals in your context
  const { subtotal, tax, total } = calculateTotals();

  return (
    <CartContext.Provider
      value={{
        cart,
        currentProduct,
        setCurrentProduct,
        addToCart,
        decreaseFromCart,
        removeFromCart,
        calculateSubtotal,
        updateStock,
        totalItems,
        totalPrice: total,
        shippingCost,
        taxRate,
        subtotal,
        tax,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
