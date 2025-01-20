"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useProducts } from "./ProductContext";
import { Product } from "@/types/Product";

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredProducts: Product[];
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const products = useProducts(); 
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredProducts(products); 
    } else {
      const results = products.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) 
        ||
        product.tags.some((tag: string) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        )
        //   product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(results);
    }
  }, [searchQuery, products]);

  const handleSearch = (query: string) => {
    console.log("Search Query in Context:", query);
    setSearchQuery(query); 
  };

  return (
    <SearchContext.Provider
      value={{ searchQuery, setSearchQuery:handleSearch, filteredProducts }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
