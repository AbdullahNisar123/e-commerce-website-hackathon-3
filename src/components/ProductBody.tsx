"use client";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Product } from "@/types/Product";
import { useProducts } from "@/context/ProductContext";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";


interface ProductBodyProps {
  params: {
    slug: string;
  };
}

export default function ProductBody({ params }: ProductBodyProps){
  const { wishlist, removeFromWishlist, isInWishlist, addToWishlist } = useWishlist();
    const { addToCart} = useCart();
  const router = useRouter();
  const products = useProducts();
  const limitedProducts = products.slice(0, 8);
  const product = products.find((p) => p.slug === params?.slug);
  if (!product) {
    router.push("/Shop");
    return null;
  }

  return (
    <div>
      {/* header start */}
      <div className="md:px-[100px] md:py-[32px] bg-[#F9F1E7] flex gap-6 py-5 px-[10px]">
        <div className="text-[16px] font-normal  text-black flex gap-[14px] items-center">
          <Link href="/" className="text-[#9F9F9F] ">Home</Link>
          <Icon
            icon="material-symbols:keyboard-arrow-right"
            className="w-5 h-5 font-bold"
          />
        </div>
        <div className="text-[16px] font-normal  text-black flex gap-[14px] items-center">
          <Link href="/Shop"  className="text-[#9F9F9F] ">Shop</Link>
          <Icon
            icon="material-symbols:keyboard-arrow-right"
            className="w-5 h-5 font-bold"
          />
        </div>
        <div className="pl-[34px] py-[6px] border-l-[2px] border-l-[#9F9F9F]">
          <Link  href="#" >{product.title}</Link>
        </div>
      </div>
      {/* header end */}
      
      {/* body start */}
      <div className="">
        
        <div className="flex flex-col md:flex-row md:py-[35px] md:px-[100px] border-b border-b-[#D9D9D9] py-[22px] px-5 gap-5">
          <div className="flex md:flex-row flex-col gap-[22px] md:gap-5">
            <div className="flex md:flex-col gap-[32px] order-2 md:order-none">
              <div className="bg-[#F9F1E7] rounded-[10px] w-[76px] h-[80px] flex items-center bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${product.imageUrl})`,
              }}>
                
                
              </div>
              <div className="bg-[#F9F1E7] rounded-[10px] w-[76px] h-[80px] flex items-center bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${product.imageUrl})`,
              }}>
               
              </div>
              <div className="bg-[#F9F1E7] rounded-[10px] w-[76px] h-[80px] flex items-center bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${product.imageUrl})`,
              }}>
                
              </div>
              <div className="bg-[#F9F1E7] rounded-[10px] w-[76px] h-[80px] flex items-center bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${product.imageUrl})`,
              }}>
                
              </div>
            </div>
            <div className="md:px-[35px] md:w-[423px] w-full md:h-full">
                <Image
                  width={423}
                  height={391}
                  src={product.imageUrl}
                  alt={product.title}
                ></Image>
            </div>
          </div>
          <div className="flex flex-col gap-[22px]">
            <div className="flex flex-col gap-[15px]">
              <div>
                <h3 className="text-[42px]">{product.title}</h3>
                <p className="text-[24px] text-[#9F9F9F] font-medium">
                  Rs {product.price.toFixed(3)}
                </p>
              </div>
              <div className="flex gap-[18px] items-center">
                <div className="text-[#FFC700] flex">
                  <Icon icon="dashicons:star-filled" />
                  <Icon icon="dashicons:star-filled" />
                  <Icon icon="dashicons:star-filled" />
                  <Icon icon="dashicons:star-filled" />
                  <Icon icon="carbon:star-half" />
                </div>
                <p className="pl-[22px] py-[5px] text-[#9F9F9F] border-l border-l-[#9F9F9F] text-[13px]">
                  5 Customer Review
                </p>
              </div>
              <p className="text-[13px] line-clamp-2">
                {product.description}
              </p>
            </div>
            <div className="flex flex-col gap-[32px]">
              <div className="flex flex-col gap-[18px]">
                <div className="flex flex-col gap-3">
                  <p className="text-[14px] text-[#9F9F9F]">Size</p>
                  <div className="flex gap-4">
                    <button className="rounded-[5px] bg-[#B88E2F] text-[13px] text-white px-[12px] py-[5px]">
                      L
                    </button>
                    <button className="rounded-[5px] bg-[#F9F1E7] text-[13px] px-[12px] py-[5px]">
                      XL
                    </button>
                    <button className="rounded-[5px] bg-[#F9F1E7] text-[13px]  px-[12px] py-[5px]">
                      XS
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-[14px] text-[#9F9F9F]">Color</p>
                  <div className="flex gap-4">
                    <button className="rounded-full w-[30px] h-[30px] bg-[#816DFA] "></button>
                    <button className="rounded-full w-[30px] h-[30px] bg-black "></button>
                    <button className="rounded-full w-[30px] h-[30px] bg-[#B88E2F] "></button>
                  </div>
                </div>
              </div>
              {/* <div className="flex gap-2 md:gap-[15px] flex-wrap pb-5 md:pb-[50px] border-b border-b-[#D9D9D9] justify-center">
                <div className="border border-[#9F9F9F] text-black md:px-[12px] px-3 h-fit py-3 md:py-[15px] flex w-fit items-center rounded-[10px] gap-3 md:gap-[30px]">
                  <p onClick={decrementQuantity} className="cursor-pointer">
                    -
                  </p>
                  <p>{quantity}</p>
                  <p onClick={incrementQuantity} className="cursor-pointer">
                    +
                  </p>
                </div>
                {availableStock > 0 ? (
                  <button
                    onClick={handleAddToCart}
                    className="border border-black text-black md:px-[25px] md:py-[15px] px-3 py-3 h-fit flex  rounded-[15px] text-[18px] font-normal"
                  >
                    Add To Cart
                  </button>
                ) : (
                  <p className="mt-4 px-4 py-2 text-red-500 font-semibold ">
                    Out of Stock
                  </p>
                )}
                <div className="border border-black text-black md:px-[25px] md:py-[15px] px-3 py-3 h-fit flex w-fit rounded-[15px] gap-1 text-[18px] font-normal">
                  <p>+</p>
                  <p>Compare</p>
                </div>
              </div> */}
            </div>
            <div className="flex flex-col gap-3 ">
              <div className="flex text-[16px] text-[#9F9F9F] gap-3 items-center">
                <div className="flex gap-[52px] items-center">
                  <p>SKU</p>
                  <p>:</p>
                </div>
                <p>SS001</p>
              </div>
              <div className="flex text-[16px] text-[#9F9F9F] gap-3 items-center">
                <div className="flex gap-[20px] items-center">
                  <p>Category</p>
                  <p>:</p>
                </div>
                <p>Sofas</p>
              </div>
              <div className="flex text-[16px] text-[#9F9F9F] gap-3 items-center">
                <div className="flex gap-[52px] items-center">
                  <p>Tags</p>
                  <p>:</p>
                </div>
                <p>{product.tags.join(', ')}</p>
              </div>
              <div className="flex text-[16px] text-[#9F9F9F] gap-3 items-center">
                <div className="flex gap-[44px] items-center">
                  <p>Share</p>
                  <p>:</p>
                </div>
                <div className="flex text-black gap-[25px] items-center">
                  <Icon icon="akar-icons:facebook-fill" />
                  <Icon icon="akar-icons:linkedin-box-fill" />
                  <Icon icon="ant-design:twitter-circle-filled" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:px-[100px] md:py-[32px] border-b border-b-[#D9D9D9] flex flex-col gap-[36px] py-[22px] px-5">
          <div className="flex flex-col items-center gap-5 md:gap-[37px]">
            <div className="flex gap-4 md:gap-[53px] text-[#9F9F9F] md:text-[24px] text-[21px] font-bold md:font-normal">
              <p className="text-black">Description</p>
              <p>Additional Information</p>
              <p>Reviews 5</p>
            </div>
            <div className="flex flex-col gap-[30px]  text-[#9F9F9F] text-[16px]">
            <p>
              {product.description}
            </p>
            </div>
          </div>
          <div className="flex gap-5 md:gap-[30px] flex-col md:flex-row">
            <div className="w-full md:w-[605px] md:h-[348px] rounded-[10px] bg-[#F9F1E7] flex items-center">
              <Image
                src="/images/Cloud sofa three seater + ottoman_2 1.png"
                alt="Asgaard Sofa"
                width={600}
                height={100}
              ></Image>
            </div>
            <div className="w-full md:w-[605px] md:h-[348px] rounded-[10px] bg-[#F9F1E7] flex items-center">
              <Image
                src="/images/Cloud sofa three seater + ottoman_1 1.png"
                alt="Asgaard Sofa"
                width={600}
                height={100}
              ></Image>
            </div>
          </div>
        </div>
        <div className="w-full px-[10px] pt-[32px] pb-[60px] md:pb-[100px] flex flex-col justify-center border-b border-b-[#D9D9D9]">
        <div className="flex flex-col gap-[32px] w-fit mx-auto">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-[40px] font-bold text-Gray1"> Related Products</h1>
        </div>

        {/* Cards */}
        <div className="flex gap-[15px] overflow-x-auto no-scrollbar flex-wrap justify-center w-full">
          {/* Cards for Products */}
          {limitedProducts.map((product: Product) => (
            <div
              className="bg-white group relative overflow-hidden w-[285px] md:w-[285px] lg:w-[285px]"
              key={product._id}
            >
              {/* Image Container */}
              <div className="w-full h-[301px]">
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
                  <button className="text-[16px] font-semibold text-primary bg-white px-[52px] py-[12px]"
                  onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                  <div className="flex gap-4 text-white text-sm mt-2">
                    <button className="flex items-center gap-1 text-[16px] font-semibold">
                      <Icon icon="gridicons:share" className="" /> Share
                    </button>
                    <button className="flex items-center gap-1 text-[16px] font-semibold">
                      <Icon icon="fluent:arrow-swap-28-regular" className="" />
                      Compare
                    </button>
                    <button className="flex items-center gap-1 text-[16px] font-semibold"
                    onClick={() => {
                      if (isInWishlist(product._id)){
                        removeFromWishlist(product._id);
                      } else {
                        addToWishlist(product)
                      }
                    }}
                      >
                     <Icon
                          icon={
                            isInWishlist(product._id)
                              ? "solar:heart-bold"
                              : "solar:heart-linear"
                          }
                          className={
                            isInWishlist(product._id)
                              ? "text-red-500 text-[20px]"
                              : "text-white text-[20px]"
                          }
                        /> Like
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="w-fit pt-[16px] pb-[30px] pr-[20px] pl-[16px]">
                <Link key={product.slug} href={`/Shop/${product.slug}`}>
                  <h2 className="text-[24px] font-semibold text-Gray1 z-20 relative">
                    {product.title}
                  </h2>
                </Link>
                <h4 className="text-[16px] font-medium text-Gray2">
                  {product.title}
                </h4>
                <div className="w-fit flex gap-[16px] items-center">
                  <p className="text-[20px] font-semibold text-Gray1">
                    Rs {product.discountedPrice.toFixed(3)}
                  </p>
                  {product.price && (
                    <p className="text-[16px] font-normal text-Gray4 line-through">
                      Rs {product.price.toFixed(3)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="w-full text-center mt-5">
        <Link
            href="/Shop"
            className="text-[16px] font-semibold bg-white py-[12px] px-[72px] text-primary border border-primary"
          >
            Show More
          </Link>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}

// export default ProductBody;