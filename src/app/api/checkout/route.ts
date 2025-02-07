import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: Request) {
      const { cartItems, totalPrice } = await req.json();
  
      if (!cartItems || cartItems.length === 0 || !totalPrice) {
        return NextResponse.json({ error: "Invalid request data" }, { status: 400 });
      }
  
      // Convert cart items into Stripe line items
      const lineItems = cartItems.map((item: any) => ({
        price_data: {
          currency: "usd",
          product_data: { name: item.name },
          unit_amount: Math.round(item.price * 100), // Convert to cents
        },
        quantity: item.quantity,
      }));
  
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-success`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout`,
      });
  
      return NextResponse.json({ url: session.url });
  }
