"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { client } from "../sanity/lib/client";
import { Product } from "@/types/Product";

const ProductContext = createContext<Product[]>([]);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res =
          await client.fetch(`*[_type == "product"] {
            _id,
          title,
            description,
            "imageUrl": productImage.asset->url,
            price,
            tags,
            dicountPercentage,
            "discountedPrice": price - (price * dicountPercentage / 100),
            isNew,
            "slug": slug.current,
            category
        }`);
        setProducts(res);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductContext);
};
