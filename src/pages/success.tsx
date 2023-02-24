import { GetServerSideProps } from "next";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import Stripe from "stripe";

import { stripe } from "../lib/stripe";
import {
  ImageContainer,
  ImagesContainer,
  SuccessContainer,
} from "../styles/pages/success";

type SuccessProps = {
  costumerName: string;
  numberOfProducts: number;
  productImages: string[];
};

export default function Success({
  costumerName,
  numberOfProducts = 0,
  productImages = [],
}: SuccessProps) {
  return (
    <>
      <Head>
        <title>Purchase completed | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <ImagesContainer>
          {productImages.map((image) => (
            <ImageContainer key={image}>
              <Image src={image} alt="" width={128} height={128} />
            </ImageContainer>
          ))}
        </ImagesContainer>

        <h1>Purchase completed! 🎉</h1>

        <p>
          <strong>{costumerName}</strong>, your order of
          <strong>
            {" "}
            {numberOfProducts} {numberOfProducts > 1 ? "products" : "product"}
          </strong>{" "}
          is already on its way to your address.
        </p>

        <Link href="/">Back to catalog</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const costumerName = session?.customer_details?.name;
  const products = session?.line_items?.data as Stripe.LineItem[];
  const numberOfProducts = products.reduce(
    (total, item) => total + (item.quantity ?? 0),
    0
  );
  const productImages = products
    .map((item) => {
      const product = item.price?.product as Stripe.Product;
      return product.images[0];
    })
    .slice(0, 4);

  return {
    props: {
      costumerName,
      numberOfProducts,
      productImages,
    },
  };
};
