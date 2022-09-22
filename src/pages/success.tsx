import { GetServerSideProps } from "next";
import Image from "next/future/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

type SuccessProps = {
  costumerName: string;
  product: {
    name: string;
    imageUrl: string;
  };
};

export default function Success({ costumerName, product }: SuccessProps) {
  return (
    <SuccessContainer>
      <h1>Purchase completed</h1>

      <ImageContainer>
        <Image src={product.imageUrl} width={320} height={310} alt="" />
      </ImageContainer>

      <p>
        Yayyy <strong>{costumerName}</strong>, your{" "}
        <strong>{product.name}</strong> is already on its way to your address.
      </p>

      <Link href="/">Back to catalog</Link>
    </SuccessContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const costumerName = session?.customer_details?.name;
  const product = session?.line_items?.data[0]?.price
    ?.product as Stripe.Product;

  return {
    props: {
      costumerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      },
    },
  };
};
