"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { useCart } from "@/context/CartContext";
import { FormValues } from "@/types/FormValues";
import { client } from "@/sanity/lib/client";

interface OrderContextType {
  formValues: FormValues;
  formErrors: Record<keyof FormValues, boolean>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handlePlaceOrder: () => Promise<void>;
  createSanityOrder: () => Promise<void>; 
  loading: boolean;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { cartItems, totalPrice, clearCart } = useCart();

  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
    country: "",
    companyName: "",
    additionalInfo: "",
    payment: "",
  });

  const [formErrors, setFormErrors] = useState<
    Record<keyof FormValues, boolean>
  >({
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    zipCode: false,
    phone: false,
    email: false,
    country: false,
    payment: false,
    companyName: false,
    additionalInfo: false,
  });


  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName.trim(),
      lastName: !formValues.lastName.trim(),
      address: !formValues.address.trim(),
      city: !formValues.city.trim(),
      zipCode: !formValues.zipCode.trim(),
      phone: !formValues.phone.trim(),
      email: !formValues.email.trim(),
      country: !formValues.country.trim(),
      payment: !formValues.payment.trim(),
      companyName: false,
      additionalInfo: false,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const createSanityOrder = async () => {
    try {
      await client.create({
        _type: "order",
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        address: formValues.address,
        city: formValues.city,
        zipCode: formValues.zipCode,
        phone: formValues.phone,
        email: formValues.email,
        country: formValues.country,
        payment: formValues.payment,
        companyName: formValues.companyName || null,
        additionalInfo: formValues.additionalInfo || null,
        status: "pending",
        cartItems: cartItems.map((item) => ({
          _key: item._id,
          product: { _type: "reference", _ref: item._id },
          quantity: item.quantity,
        })),
        totalPrice: totalPrice,
        orderDate: new Date().toISOString(),
      });
  
      Swal.fire("Success", "Your order has been placed.", "success").then(() => {
        clearCart();
        setFormValues({
          firstName: "",
          lastName: "",
          address: "",
          city: "",
          zipCode: "",
          phone: "",
          email: "",
          country: "",
          companyName: "",
          additionalInfo: "",
          payment: "",
        });
        // router.push("/Shop");
      });
    } catch (error) {
      console.error("❌ Error creating order:", error);
      Swal.fire("Error", "Error creating order. Please try again later.", "error");
    }
  };  
      
const [loading, setLoading] = useState(false);
  const handlePlaceOrder = async () => {
    setLoading(true)
    if (cartItems.length < 1) {
      Swal.fire(
        "Error",
        "Your cart is empty. Add at least one item before placing an order.",
        "error"
      );
      setLoading(false)
      return;
    }
  
    if (!validateForm()) {
      Swal.fire(
        "Error",
        "Please fill in all fields before proceeding.",
        "error"
      );
      setLoading(false)
      return;
    }
    if (formValues.payment === "Direct Bank Transfer") {
      router.push("/Cart-Payment");
      setLoading(true)
      return;
    }
    if (formValues.payment === "Cash On Delivery") {
      router.push("Payment-Success");
      setLoading(true)
    }

    await createSanityOrder();
    setLoading(false)
  };

  
  
  
  return (
    <OrderContext.Provider
      value={{
        formValues,
        formErrors,
        handleInputChange,
        handlePlaceOrder,
        createSanityOrder,
        loading,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
};
