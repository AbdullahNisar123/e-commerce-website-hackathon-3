"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { client } from "../sanity/lib/client";
import { Product } from "@/types/Product";

const ProductContext = createContext<Product[]>([]);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setisLoading] = useState(true);

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
      finally{
        setisLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading){
    return(
      <div className="flex items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductContext);
};
