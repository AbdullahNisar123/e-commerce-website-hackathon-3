"use client";
import { useCart } from "@/context/CartContext";
import { urlFor } from "@/sanity/lib/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";

export default function WishListBody() {
  const { wishlist, removeFromWishlist, isInWishlist, addToWishlist } = useWishlist();
  const { addToCart,cart} = useCart();
  // console.log("detail in wishlist",wishlist);
  const getAvailableStock = (productId: string, initialStock: number) => {
    const cartItem = cart.find((item) => item.id === productId);
    return initialStock - (cartItem?.quantity || 0);
  };

  return (
    <>
     

      <div className="w-full border-b-2 py-16 flex flex-col justify-center bg-[#F4F5F7] px-4">
        <div className="flex flex-col gap-[32px] w-fit mx-auto">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-[40px] font-bold text-Gray1">Our Products</h1>
          </div>

          {/* Cards */}
          <div className="flex gap-[15px] overflow-x-auto no-scrollbar flex-wrap justify-center w-full">
            {/* Cards for Products */}
            {wishlist.length > 0 ? (

            wishlist.map((product,index) => {
              const availableStock = getAvailableStock(
                product.id,
                product.stock
              );
              return (
                <div
                  className="bg-white group relative overflow-hidden w-[285px] md:w-[285px] lg:w-[285px]"
                   key={`${product.id}-${index}`}
                >
                  {/* Image Container */}
                  <div className="w-full h-[301px]">
                    <div
                      className="flex h-full w-full bg-no-repeat bg-center relative group-hover:scale-105 transition-transform duration-300"
                      style={{
                        backgroundImage: `url(${
                          product.image
                            ? urlFor(product.image).url()
                            : "/images/image1.png" // Use a fallback image
                        })`,
                      }}
                    >
                      {/* NEW Badge */}
                      {product.new && (
                        <div className="h-[48px] w-[48px] bg-GreenAccents rounded-full flex items-center justify-center absolute top-6 right-6">
                          <p className="text-[16px] font-medium text-white capitalize">
                            {product.new}
                          </p>
                        </div>
                      )}
                      {/* Discount Badge */}
                      {product.discount && (
                        <div className="h-[48px] w-[48px] bg-RedAccents rounded-full flex items-center justify-center absolute top-6 right-6">
                          <p className="text-[16px] font-medium text-white">
                            {product.discount}%
                          </p>
                        </div>
                      )}
                    </div>
                    {/* Add to Cart Button */}
                    <div className="h-full absolute bottom-0 w-full flex flex-col gap-[24px] items-center justify-center bg-opacity-0 opacity-0 group-hover:bg-opacity-70 group-hover:opacity-100 bg-Gray1 transition-opacity duration-300">
                      {availableStock > 0 ? (
                        <button
                          className="text-[16px] font-semibold text-primary bg-white px-[52px] py-[12px]"
                          onClick={() => {
                            addToCart({
                              id: product.id,
                              title: product.title,
                              currentprice: product.currentprice,
                              image: product.image,
                              quantity: 1,
                              stock: product.stock,
                            });
                          }}
                        >
                          Add to Cart
                        </button>
                      ) : (
                        <p className="mt-4 px-4 py-2 text-red-500 font-semibold">
                          Out of Stock
                        </p>
                      )}
                      <div className="flex gap-4 text-white text-sm mt-2">
                        <button className="flex items-center gap-1 text-[16px] font-semibold">
                          <Icon icon="gridicons:share" className="" /> Share
                        </button>
                        <button className="flex items-center gap-1 text-[16px] font-semibold">
                          <Icon
                            icon="fluent:arrow-swap-28-regular"
                            className=""
                          />{" "}
                          Compare
                        </button>
                        <button
                          className={`flex items-center gap-1 text-[16px] font-semibold text-white`}
                          onClick={() => {
                            if (isInWishlist(product.id)) {
                              removeFromWishlist(product.id);
                            } else {
                              addToWishlist({
                                id: product.id,
                                title: product.title,
                                currentprice: product.currentprice,
                                image: product.image,
                                quantity: 1,
                                stock: product.stock,
                              });
                            }
                          }}
                        >
                          <Icon
                            icon={
                              isInWishlist(product.id)
                                ? "solar:heart-bold"
                                : "solar:heart-linear"
                            }
                            className={
                              isInWishlist(product.id)
                                ? "text-red-500 text-[20px]"
                                : "text-white text-[20px]"
                            }
                          />
                          Like
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="w-fit pt-[16px] pb-[30px] pr-[20px] pl-[16px]">
                    <Link href={`/Shop/${product.slug}`} passHref>
                      <h2 className="text-[24px] font-semibold text-Gray1 z-20 relative">
                        {product.title}
                      </h2>
                    </Link>
                    <h4 className="text-[16px] font-medium text-Gray2">
                      {product.subtitle}
                    </h4>
                    <div className="w-fit flex gap-[16px] items-center">
                      <p className="text-[20px] font-semibold text-Gray1">
                        Rs {(product.currentprice).toFixed(3)}
                      </p>
                      {product.price && (
                        <p className="text-[16px] font-normal text-Gray4 line-through">
                          Rs {(product.price).toFixed(3)}
                        </p>
                      )}
                    </div>
                    <p className="text-[16px] font-normal text-Gray4">
                      Stock: {availableStock}
                    </p>
                  </div>
                </div>
              );
            })


            ):(
              <p>Your wishlist is empty.</p>
            )}
          </div>

          
        </div>
      </div>
    </>
  );
}
