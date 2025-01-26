"use client";
import { Product } from "@/types/Product";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "react-toastify";

interface ComparisonContextType {
  comparisonList: Product[];
  addToComparison: (comparisonProduct: Product) => void;
  removeFromComparison: (productId: string) => void;
  clearComparison: () => void;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(
  undefined
);

export const ComparisonProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [comparisonList, setComparisonList] = useState<Product[]>([]);

  const addToComparison = (product: Product) => {
    setComparisonList((prev) => {
      if (prev.length >= 3) {
        toast.error("You can only compare up to 3 products.", {
          position: "top-right",
          autoClose: 1000,
        });
        return prev;
      }

      if (prev.find((item) => item._id === product._id)) {
        toast.info(`${product.title} is already in the comparison list.`, {
          position: "top-right",
          autoClose: 1000,
        });
        return prev;
      }

      toast.success(`${product.title} has been added to your comparison!`, {
        position: "top-right",
        autoClose: 1000,
      });
      return [...prev, product];
    });
  };

  const removeFromComparison = (productId: string) => {
    setComparisonList((prev) =>
      prev.filter((product) => product._id !== productId)
    );
    toast.info("Product removed from comparison!", {
      position: "top-right",
      autoClose: 1000,
    });
  };



  const clearComparison = () => {
    setComparisonList([]);
  };

  return (
    <ComparisonContext.Provider
      value={{
        comparisonList,
        addToComparison,
        removeFromComparison,
        clearComparison,
      }}
    >
      {children}
    </ComparisonContext.Provider>
  );
};

export const useComparison = () => {
  const context = useContext(ComparisonContext);
  if (!context) {
    throw new Error("useComparison must be used within a ComparisonProvider");
  }
  return context;
};
