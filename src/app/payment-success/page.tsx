"use client";

import { useEffect } from "react";
import { useOrder } from "@/context/OrderContext";

const PaymentSuccess = () => {
  const { createSanityOrder } = useOrder();

  useEffect(() => {
    createSanityOrder(); // Store order after payment success
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-green-600">Payment Successful! 🎉</h1>
    </div>
  );
};

export default PaymentSuccess;
