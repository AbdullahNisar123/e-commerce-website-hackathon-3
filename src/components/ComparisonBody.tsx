import { useCart } from "@/context/CartContext";
import { useComparison } from "@/context/ComparisonContext";
import { useProducts } from "@/context/ProductContext";
import { Product } from "@/types/Product";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useState } from "react";

export default function ComparisonBody() {
  const { addToCart } = useCart();
  const { comparisonList, addToComparison, removeFromComparison } =
    useComparison();

  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );
  const products = useProducts();

  const handleAddProduct = () => {
    if (selectedProductId) {
      const selectedProduct = products.find(
        (product) => product._id === selectedProductId
      );

      if (selectedProduct) {
        addToComparison(selectedProduct);
        setSelectedProductId(null);
      }
    }
  };

  return (
    <>
      <div className="px-[53px]">
        <div className="flex gap-3">
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
          {comparisonList.map((product: Product) => (
            <div className="w-[25%] flex flex-col gap-1  items-center group" key={product._id}>
              <div className={` w-[280px] h-[177px] flex justify-center items-center bg-[#F9F1E7] rounded-[10px] bg-contain bg-no-repeat bg-center group-hover:scale-105 transition-transform duration-300`}
              style={{
                backgroundImage: `url(${product.imageUrl})`,
              }}>
                <button className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center relative bottom-[74px] left-[126px] opacity-0 group-hover:opacity-100"
                onClick={() => removeFromComparison(product._id)}>
                  <Icon icon="iconoir:cancel" />
                </button>
              </div>
              <div className="">
                <h3 className="font-medium text-[24px]">{product.title}a</h3>
                <p className="text-[18px]">{product.price}</p>
                <div className="flex items-center gap-2">
                  <p className="text-[18px]">4.7</p>
                  <div className="text-[#FFC700] flex">
                    <Icon icon="dashicons:star-filled" />
                    <Icon icon="dashicons:star-filled" />
                    <Icon icon="dashicons:star-filled" />
                    <Icon icon="dashicons:star-filled" />
                    <Icon icon="carbon:star-half" />
                  </div>
                  <p className="pl-[22px] py-[5px] text-[#9F9F9F] border-l border-l-[#9F9F9F] text-[13px]">
                    250 Review
                  </p>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="w-[25%] flex flex-col gap-1  items-center">
            <div className="w-[280px] h-[177px] flex justify-center items-center bg-[#F9F1E7] rounded-[10px]">
              <Image
                src="/images/Asgaard-sofa-3.png"
                width={200}
                height={10}
                alt="sofa"
              ></Image>
            </div>
            <div className="">
              <h3 className="font-medium text-[24px]">Asgaard Sofa</h3>
              <p className="text-[18px]">Rs. 250,000.00</p>
              <div className="flex items-center gap-2">
                <p className="text-[18px]">4.7</p>
                <div className="text-[#FFC700] flex">
                  <Icon icon="dashicons:star-filled" />
                  <Icon icon="dashicons:star-filled" />
                  <Icon icon="dashicons:star-filled" />
                  <Icon icon="dashicons:star-filled" />
                  <Icon icon="carbon:star-half" />
                </div>
                <p className="pl-[22px] py-[5px] text-[#9F9F9F] border-l border-l-[#9F9F9F] text-[13px]">
                  250 Review
                </p>
              </div>
            </div>
          </div> */}
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
                  {products.map((product: Product) => (
                    <>
                      <option value={product._id}>{product.title}</option>
                    </>
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
        <div className="overflow-x-auto py-5">
          <table className="table-auto w-full text-center border-collapse border-t border-t-[#E8E8E8]">
            <tbody>
              <tr>
                <td className="w-1/4 px-4 py-2 font-medium  text-left border-r border-r-[#E8E8E8]">
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
                {comparisonList.length < 2 && (
                  <td className="w-1/4 px-4 py-2"></td>
                )}
                {comparisonList.length < 3 && (
                  <td className="w-1/4 px-4 py-2"></td>
                )}
              </tr>
              <tr>
                <td className="w-1/4 px-4 py-2 font-medium  text-left  border-r border-r-[#E8E8E8]">
                  Sale Price
                </td>
                {comparisonList.map((product, index) => (
                  <td
                    key={index}
                    className="w-1/4 px-4 py-2 border-r border-r-[#E8E8E8]"
                  >
                    Rs. {product.price}
                  </td>
                ))}
                {comparisonList.length < 3 && (
                  <td className="w-1/4 px-4 py-2"></td>
                )}
              </tr>
              <tr>
                <td className="w-1/4 px-4 py-2 font-medium  text-left  border-r border-r-[#E8E8E8]">
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
                {comparisonList.length < 3 && (
                  <td className="w-1/4 px-4 py-2"></td>
                )}
              </tr>
              <tr>
                <td className="w-1/4 px-4 py-2 font-medium  text-left  border-r border-r-[#E8E8E8]">
                  Brand
                </td>
                {comparisonList.map((product, index) => (
                  <td
                    key={index}
                    className="w-1/4 px-4 py-2 border-r border-r-[#E8E8E8]"
                  >
                    {product.title || "N/A"}
                  </td>
                ))}
                {comparisonList.length < 3 && (
                  <td className="w-1/4 px-4 py-2"></td>
                )}
              </tr>
              <tr>
                <td className="w-1/4 px-4 py-2 font-medium  text-left  border-r border-r-[#E8E8E8]">
                  Material
                </td>
                {comparisonList.map((product, index) => (
                  <td
                    key={index}
                    className="w-1/4 px-4 py-2 border-r border-r-[#E8E8E8]"
                  >
                    {product.title || "N/A"}
                  </td>
                ))}
                {comparisonList.length < 3 && (
                  <td className="w-1/4 px-4 py-2"></td>
                )}
              </tr>
              <tr>
                <td className="w-1/4 px-4 py-2 font-medium  text-left  border-r border-r-[#E8E8E8]">
                  Dimensions
                </td>
                {comparisonList.map((product, index) => (
                  <td
                    key={index}
                    className="w-1/4 px-4 py-2 border-r border-r-[#E8E8E8]"
                  >
                    {product.title || "N/A"}
                  </td>
                ))}
                {comparisonList.length < 3 && (
                  <td className="w-1/4 px-4 py-2"></td>
                )}
              </tr>
              <tr>
                <td className="w-1/4 px-4 py-2 font-medium  text-left  border-r border-r-[#E8E8E8]">
                  Weight
                </td>
                {comparisonList.map((product, index) => (
                  <td
                    key={index}
                    className="w-1/4 px-4 py-2 border-r border-r-[#E8E8E8]"
                  >
                    {product.title || "N/A"}
                  </td>
                ))}
                {comparisonList.length < 3 && (
                  <td className="w-1/4 px-4 py-2"></td>
                )}
              </tr>
              <tr>
                <td className="w-1/4 px-4 py-2 font-medium  text-left  border-r border-r-[#E8E8E8]">
                  Rating
                </td>
                {comparisonList.map((product, index) => (
                  <td
                    key={index}
                    className="w-1/4 px-4 py-2 border-r border-r-[#E8E8E8]"
                  >
                    {product.title || "N/A"}
                  </td>
                ))}
                {comparisonList.length < 3 && (
                  <td className="w-1/4 px-4 py-2"></td>
                )}
              </tr>
              <tr>
                <td className="w-1/4 px-4 py-2 font-medium  text-left  border-r border-r-[#E8E8E8]">
                  Stock
                </td>
                {comparisonList.map((product, index) => (
                  <td
                    key={index}
                    className="w-1/4 px-4 py-2 border-r border-r-[#E8E8E8]"
                  >
                    {product.title || "Out of stock"}
                  </td>
                ))}
                {comparisonList.length < 3 && (
                  <td className="w-1/4 px-4 py-2"></td>
                )}
              </tr>
              <tr>
                <td className="w-1/4 px-4 py-2 font-medium  text-left  border-r border-r-[#E8E8E8]">
                  Warranty
                </td>
                {comparisonList.map((product, index) => (
                  <td
                    key={index}
                    className="w-1/4 px-4 py-2 border-r border-r-[#E8E8E8]"
                  >
                    {product.title || "N/A"}
                  </td>
                ))}
                {comparisonList.length < 3 && (
                  <td className="w-1/4 px-4 py-2"></td>
                )}
              </tr>
              <tr>
                <td className="w-1/4 px-4 py-2 border-r border-r-[#E8E8E8]"></td>

                {/* Dynamically Render "Add to Cart" Buttons for Each Product */}
                {comparisonList.map((product, index) => (
                  <td
                    key={index}
                    className="w-1/4 px-4 py-2 border-r border-r-[#E8E8E8]"
                  >
                    <button
                      onClick={() => addToCart(product)}
                      className="text-[16px] font-semibold text-white bg-primary px-[52px] py-[12px] rounded-md"
                    >
                      Add to Cart
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
