"use client";
import { useCart } from "@/context/CartContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";



export default function CartBody() {
  const { cartItems, removeFromCart, totalPrice } = useCart();
 
  return (
    <>

      <div className="md:px-[100px] md:pt-[72px] md:pb-[63px] py-8">
        <div className="flex gap-[30px] flex-col md:flex-row">
          {cartItems.length === 0 ? (
            <p className="w-full">Your cart is empty</p>
          ) : (
            <div className="md:w-[69%] w-full gap-[55px] flex flex-col  px-3 md:px-0">
              <div className="text-black text-[16px] font-medium hidden md:flex bg-[#F9F1E7] pl-[142px] pr-[116px] py-[16px]">
                <div className="w-[530px] flex gap-[125px] ">
                  <div className="flex w-[217px] gap-[114px] justify-between">
                    <p>Product</p>
                    <p>Price</p>
                  </div>
                  <div className="flex w-[175px] gap-[36px] justify-between">
                    <p>Quantity</p>
                    <p>Subtotal</p>
                  </div>
                </div>
              </div>
              {cartItems.map((item) => (
                <div className="flex md:gap-[32px] items-center gap-3 " key={item._id}>
                  <div className="bg-[#B88E2F] bg-opacity-30 h-[70px] md:h-[105px] w-[70px] md:w-[105px] rounded-[10px] bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url(${item.imageUrl})`,
                  }}
                  >
                    {/* <Image
                      src={
                        item.image
                          ? urlFor(item.image).url()
                          : "/images/placeholder.png"
                      }
                      alt={item.title}
                      height={70}
                      width={105}
                      unoptimized
                    ></Image> */}
                  </div>
                  <div className="flex justify-between md:w-[623px] w-fit md:text-[16px] text-[13px] font-normal text-[#9F9F9F]  items-center flex-col md:flex-row gap-2 md:gap-0">
                    <div className="flex justify-between md:w-[240px] w-[260px] md:px-3">
                      <p>{item.title}</p>
                      <p>Rs. {item.price}</p>
                    </div>
                    <div className="flex md:gap-4 justify-between w-[260px] ">
                      <div className="flex  md:w-[200px] justify-between items-center ">
                        <div className="border border-[#9F9F9F] text-black md:px-[13px] md:py-[2px] px-[8px] py-[4px] rounded-[5px] w-fit h-fit">
                          <p>{item.quantity}</p>
                        </div>
                        <p className="text-black hidden md:inline">
                          Rs. {(item.price * item.quantity).toFixed(3)}
                        </p>
                      </div>
                      <div className="w-fit h-fit cursor-pointer">
                        <Icon
                          icon="ant-design:delete-filled"
                          className="text-primary md:w-[28px] w-[22px] h-[28px]"
                          onClick={() => removeFromCart(item._id)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="w-[393px] md:h-[390px] h-fit bg-[#F9F1E7]  flex justify-center md:pt-[15px] py-5">
            <div className=" flex flex-col md:gap-[62px] gap-[32px] w-[243px] h-fit">
              <div className="text-center">
                <p className="text-black font-semibold text-[32px]">
                  Cart Totals
                </p>
              </div>
              <div className="flex flex-col md:gap-[42px] gap-[32px] items-center">
                <div className=" flex flex-col gap-[32px] self-start">
                  <div className="flex gap-[30px]">
                    <li className="text-black font-medium text-[16px] w-fit list-none">
                      Subtotal
                    </li>
                    <li className="text-[#9F9F9F] font-normal text-[16px] w-fit list-none">
                      Rs. {totalPrice.toFixed(3)}
                    </li>
                  </div>
                  <div className="flex gap-[30px]">
                    <li className="text-black font-medium text-[16px] w-fit list-none">
                      Total
                    </li>
                    <li className="text-[#B88E2F] font-medium text-[18px] md:text-[20px] w-fit list-none">
                      Rs. {totalPrice.toFixed(3)}
                    </li>
                  </div>
                </div>
                <Link
                  href="/CheckOut"
                  className="text-black font-normal md:text-[20px] text-[15px] border border-black rounded-[15px] py-[12px] px-[30px] md:py-[16px] md:px-[60px] w-fit h-fit"
                >
                  Check Out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
