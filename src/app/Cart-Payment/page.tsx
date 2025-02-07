"use client"

import CartPayment from "@/components/CartPayment";
import PagesHeader from "@/components/PagesHeader";
const Cartpayment = () => {
  
  return (
    <>
    <PagesHeader name="Cart-Payment"/>
    <div className="flex justify-center py-11">
    <div className=" w-8/12 flex  justify-center flex-col">
      <CartPayment />
    </div>
    </div>
    </>
  );
};
export default Cartpayment;
