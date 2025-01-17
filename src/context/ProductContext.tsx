"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { client } from "../sanity/lib/client"; // Adjust the path to your sanity client setup

// Create a context with an empty array as default
const ProductContext = createContext<any[]>([]);

// Create a provider component
export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res =
          await client.fetch(`*[_type == "product"] | order(_createdAt asc) [0...8]{
          title,
            description,
            "imageUrl": productImage.asset->url,
            price,
            tags,
            dicountPercentage,
            "discountedPrice": price - (price * dicountPercentage / 100),
            isNew,
            "slug": slug.current
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

// Custom hook for accessing products
export const useProducts = () => {
  return useContext(ProductContext);
};
