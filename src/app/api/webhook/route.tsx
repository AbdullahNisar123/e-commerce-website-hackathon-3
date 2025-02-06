// import { NextRequest, NextResponse } from "next/server";
// import Stripe from "stripe";
// import { client } from "@/sanity/lib/client"; // Import your database client

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2025-01-27.acacia", });

// export async function POST(request: NextRequest) {
//   const sig = request.headers.get("Stripe-Signature");

//   if (!sig) {
//     return NextResponse.json({ error: "Stripe signature missing" }, { status: 400 });
//   }

//   try {
//     const rawBody = await request.text(); // Read raw body
//     const event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET!);

//     if (event.type === "payment_intent.succeeded") {
//       const paymentIntent = event.data.object as Stripe.PaymentIntent;
//       const orderId = paymentIntent.metadata?.orderId; // Get Order ID from metadata

//       if (orderId) {
//         await client.patch(orderId).set({ status: "Paid" }).commit();
//         console.log(`✅ Order ${orderId} marked as Paid.`);
//       }
//     }

//     return NextResponse.json({ received: true });
//   } catch (error) {
//     console.error("❌ Webhook Signature Verification Failed:", error);
//     return NextResponse.json({ error: "Webhook verification failed" }, { status: 400 });
//   }
// }
