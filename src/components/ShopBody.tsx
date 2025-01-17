"use client";

import { useProducts } from "@/context/ProductContext";
import { Product } from "@/types/Product";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function ShopBody() {
  const products = useProducts();

  return (
    <div>
      <div
        className="md:py-[22px] md:px-[100px] py-[22px] px-[30px] bg-[#F9F1E7] flex items-center justify-between flex-col md:flex-row gap-4 md:gap-0
      "
      >
        <div className="flex items-center gap-[13px] md:gap-[30px]">
          <div className="text-[20px] text-black font-normal flex items-center gap-[14px]">
            <Icon icon="system-uicons:filtering" className="text-[18px]" />
            <p>Filter</p>
          </div>
          <div className="w-[28px] h-[28px]">
            <Icon icon="ci:grid-big-round" className="text-[24px]" />
          </div>
          <div className="w-[24px] h-[24px]">
            <Icon icon="bi:view-list" className="text-[22px]" />
          </div>
          <div className="border-l border-l-[#9F9F9F] py-[7px] md:px-[34px] px-[12px]">
            <p className="text-[13px] md:text-[20px]">
              Showing 1–16 of 32 results
            </p>
          </div>
        </div>
        <div className="flex gap-7 ">
          <div className="flex gap-[17px] items-center">
            <p className="md:text-[20px] text-[13px] font-normal text-black">
              Show
            </p>
            <div className="py-[13px] px-[18px] md:text-[20px] text-[13px] font-normal text-[#9F9F9F] bg-white">
              <p>16</p>
            </div>
          </div>
          <div className="flex gap-[17px] items-center">
            <p className="md:text-[20px] text-[13px] font-normal text-black">
              Short by
            </p>
            <div className="py-[13px] px-[18px] md:text-[20px] text-[13px] font-normal text-[#9F9F9F] bg-white">
              <p>Default</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[63px] px-[50px] flex flex-col gap-[40px] items-center">
        {/* Cards */}
        <div className="flex gap-[15px] overflow-x-auto no-scrollbar flex-wrap justify-center w-full">
          {/* Cards for Products */}
          {products.map((product: Product) => (
            <div
              className="bg-white group relative overflow-hidden w-[285px] md:w-[285px] lg:w-[285px] "
              key={product._id}
            >
              {/* Image Container */}
              <div className="w-full h-[301px] ">
                <div
                  className="flex h-full w-full bg-no-repeat bg-center relative group-hover:scale-105 transition-transform duration-300 bg-cover"
                  style={{
                    backgroundImage: `url(${product.imageUrl})`,
                  }}
                >
                  {/* NEW Badge */}
                  {product.isNew === true && (
                    <div className="h-[48px] w-[48px] bg-GreenAccents rounded-full flex items-center justify-center absolute top-6 right-6">
                      <p className="text-[16px] font-medium text-white capitalize">
                        NEW
                      </p>
                    </div>
                  )}
                  {/* Discount Badge */}
                  {product.dicountPercentage > 0 && (
                    <div className="h-[48px] w-[48px] bg-RedAccents rounded-full flex items-center justify-center absolute top-6 right-6">
                      <p className="text-[16px] font-medium text-white">
                        {product.dicountPercentage}%
                      </p>
                    </div>
                  )}
                </div>
                {/* Add to Cart Button */}
                <div className="h-full absolute bottom-0 w-full flex flex-col gap-[24px] items-center justify-center bg-opacity-0 opacity-0 group-hover:bg-opacity-70 group-hover:opacity-100 bg-Gray1 transition-opacity duration-300">
                  <button className="text-[16px] font-semibold text-primary bg-white px-[52px] py-[12px]">
                    Add to Cart
                  </button>
                  <div className="flex gap-4 text-white text-sm mt-2">
                    <button className="flex items-center gap-1 text-[16px] font-semibold">
                      <Icon icon="gridicons:share" className="" /> Share
                    </button>
                    <button className="flex items-center gap-1 text-[16px] font-semibold">
                      <Icon icon="fluent:arrow-swap-28-regular" className="" />{" "}
                      Compare
                    </button>
                    <button className="flex items-center gap-1 text-[16px] font-semibold">
                      <Icon icon="mingcute:heart-line" className="" /> Like
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className=" pt-[16px] pb-[30px] pr-[20px] pl-[16px] bg-[#F4F5F7]">
                <h2 className="text-[24px] font-semibold text-Gray1">
                  {product.title}
                </h2>
                <h4 className="text-[16px] font-medium text-Gray2">
                  {product.title}
                </h4>
                <div className="w-fit flex gap-[16px] items-center">
                  <p className="text-[20px] font-semibold text-Gray1">
                  Rs {(product.discountedPrice).toFixed(3)}
                  </p>
                  {product.price && (
                    <p className="text-[16px] font-normal text-Gray4 line-through">
                      Rs {(product.price).toFixed(3)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex md:gap-[38px] gap-[18px]">
          <button className="md:px-[24px] md:py-[15px] px-[20px] py-[10px] bg-[#B88E2F] md:text-[20px]  text-[15px] font-normal rounded-[10px] text-white w-fit h-fit">
            1
          </button>
          <button className="md:px-[24px] md:py-[15px] px-[20px] py-[10px] bg-[#F9F1E7] md:text-[20px]  text-[15px] font-normal rounded-[10px] text-black w-fit h-fit">
            2
          </button>
          <button className="md:px-[24px] md:py-[15px] px-[20px] py-[10px] bg-[#F9F1E7] md:text-[20px]  text-[15px] font-normal rounded-[10px] text-black w-fit h-fit ">
            3
          </button>
          <button className="md:px-[28px] md:py-[15px] px-[24px] py-[10px] bg-[#F9F1E7] md:text-[20px]  text-[15px] font-normal rounded-[10px] text-black w-fit h-fit">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
