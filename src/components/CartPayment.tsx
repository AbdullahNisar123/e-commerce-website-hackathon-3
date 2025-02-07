"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import convertToSubcurrency from "../../lib/convertToSubcurrency";
import PaymentForm from "./PaymentForm";
import { useCart } from "@/context/CartContext";
import { useOrder } from "@/context/OrderContext";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Home() {
  const {totalPrice} = useCart();
  const {formValues} = useOrder();
  
  
  return (
    

      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(totalPrice),
          currency: "usd",
        }}
      >
        <PaymentForm totalPrice={totalPrice } formValues={formValues}/>
      </Elements>
  );
}