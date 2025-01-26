"use client";
import React, { useState } from "react";
import { useComparison } from "@/context/ComparisonContext";
import Image from "next/image";
import Link from "next/link";
import { useProducts } from "@/context/ProductContext";

const ComparisonPage = () => {
  const { comparisonList, addToComparison, removeFromComparison } =
    useComparison();
  const products = useProducts(); // Fetch all products
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );

  const handleAddProduct = () => {
    if (selectedProductId) {
      const selectedProduct = products.find(
        (product) => product._id === selectedProductId
      );

      if (selectedProduct) {
        addToComparison(selectedProduct); // Add the selected product to the comparison list
        setSelectedProductId(null); // Reset selected product
      }
    }
  };

  return (
    <div className="px-[53px] py-5">
      {/* Header */}
      <div className="flex gap-3 mb-5">
      <div className="w-[25%] flex flex-col gap-[20px]  items-center">
            <h3 className="font-medium text-[28px]">
              Go to Product page for more Products
            </h3>
            <Link
              href="/Shop"
              className="font-medium text-[20px] text-[#727272] border-b border-b-[#727272] pb-1"
            >
              View More
            </Link>
          </div>
        {/* Existing Products in Comparison List */}
        {comparisonList.map((product, index) => (
          <div key={index} className="w-[25%] flex flex-col gap-2 items-center">
            <div className="w-[280px] h-[177px] flex justify-center items-center bg-[#F9F1E7] rounded-[10px]">
              <Image
                src={product.imageUrl}
                width={200}
                height={177}
                alt={product.title}
              />
            </div>
            <h3 className="font-medium text-[24px]">{product.title}</h3>
            <p className="text-[18px]">Rs. {product.price}</p>
            <button
              onClick={() => removeFromComparison(product._id)}
              className="text-red-500 mt-2 text-[14px] underline"
            >
              Remove
            </button>
          </div>
        ))}

        {/* Add a Product Slot */}
        {comparisonList.length < 3 && (
          <div className="w-[25%] items-center flex flex-col h-[177px] justify-center">
            <div className="w-[240px]">
              <h3 className="text-[24px] font-semibold">Add A Product</h3>
              <select
                value={selectedProductId || ""}
                onChange={(e) => setSelectedProductId(e.target.value)}
                className="w-full px-4 py-2 text-white text-[14px] font-semibold bg-[#B88E2F] rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
              >
                <option value="" disabled>
                  Choose a Product
                </option>
                {products.map((product) => (
                  <option key={product._id} value={product._id}>
                    {product.title}
                  </option>
                ))}
              </select>
              <button
                onClick={handleAddProduct}
                className="mt-2 w-full px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Add to Comparison
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-center border-collapse border-t border-t-[#E8E8E8]">
          <tbody>
            {/* Table Row for Price */}
            <tr>
              <td className="w-1/4 px-4 py-2 font-medium text-left border-r border-r-[#E8E8E8]">
                Price
              </td>
              {comparisonList.map((product, index) => (
                <td
                  key={index}
                  className="w-1/4 px-4 py-2 border-r border-r-[#E8E8E8]"
                >
                  Rs. {product.price}
                </td>
              ))}
              {comparisonList.length < 3 && <td className="w-1/4 px-4 py-2"></td>}
            </tr>

            {/* Table Row for Category */}
            <tr>
              <td className="w-1/4 px-4 py-2 font-medium text-left border-r border-r-[#E8E8E8]">
                Category
              </td>
              {comparisonList.map((product, index) => (
                <td
                  key={index}
                  className="w-1/4 px-4 py-2 border-r border-r-[#E8E8E8]"
                >
                  {product.title || "N/A"}
                </td>
              ))}
              {comparisonList.length < 3 && <td className="w-1/4 px-4 py-2"></td>}
            </tr>

            {/* Table Row for Dimensions */}
            <tr>
              <td className="w-1/4 px-4 py-2 font-medium text-left border-r border-r-[#E8E8E8]">
                Dimensions
              </td>
              {comparisonList.map((product, index) => (
                <td
                  key={index}
                  className="w-1/4 px-4 py-2 border-r border-r-[#E8E8E8]"
                >
                  {product.dimensions || "N/A"}
                </td>
              ))}
              {comparisonList.length < 3 && <td className="w-1/4 px-4 py-2"></td>}
            </tr>

            {/* Table Row for Rating */}
            <tr>
              <td className="w-1/4 px-4 py-2 font-medium text-left border-r border-r-[#E8E8E8]">
                Rating
              </td>
              {comparisonList.map((product, index) => (
                <td
                  key={index}
                  className="w-1/4 px-4 py-2 border-r border-r-[#E8E8E8]"
                >
                  {product.rating ? product.rating + " / 5" : "N/A"}
                </td>
              ))}
              {comparisonList.length < 3 && <td className="w-1/4 px-4 py-2"></td>}
            </tr>

            {/* Table Row for Stock */}
            <tr>
              <td className="w-1/4 px-4 py-2 font-medium text-left border-r border-r-[#E8E8E8]">
                Stock
              </td>
              {comparisonList.map((product, index) => (
                <td
                  key={index}
                  className="w-1/4 px-4 py-2 border-r border-r-[#E8E8E8]"
                >
                  {product.stock ? "In Stock" : "Out of Stock"}
                </td>
              ))}
              {comparisonList.length < 3 && <td className="w-1/4 px-4 py-2"></td>}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonPage;
