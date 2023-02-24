import { NextApiRequest, NextApiResponse } from "next";

import { stripe } from "../../lib/stripe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { orderedProducts } = req.body;

  if (req.method !== "POST") {
    return res.status(405).end();
  }

  if (!orderedProducts) {
    return res.status(400).json({ error: "No product was found." });
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: "payment",
    line_items: orderedProducts,
  });

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
}
