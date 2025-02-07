"use client";

import { useEffect } from "react";
import { useOrder } from "@/context/OrderContext";
import { useRouter } from "next/navigation";
import PagesHeader from "@/components/PagesHeader";
import { Icon } from "@iconify/react/dist/iconify.js";

const PaymentSuccess = () => {
  const { createSanityOrder } = useOrder();
  const router = useRouter();

  useEffect(() => {
    createSanityOrder(); 
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/Shop");
    }, 10000); 

    return () => clearTimeout(timer); 
  }, [router]);

  return (
    <>
    <PagesHeader name="Success"/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        
        <div className="flex justify-center items-center gap-1">
        <Icon icon="icon-park-outline:success" fontSize={30}/>
        <h1 className="text-3xl font-bold text-green-600 ">Payment Successful!</h1>
        </div>
        <p className="text-gray-600 mt-2 text-lg">
          Thank you for your purchase. Your order has been placed successfully. 🎉
        </p>
        <p className="text-gray-500 mt-4">You will be redirected to the shop shortly...</p>

        <div className="mt-6">
          <button
            onClick={() => router.push("/Shop")}
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default PaymentSuccess;
