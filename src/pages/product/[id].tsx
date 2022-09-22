import { useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/future/image";
import Head from "next/head";
import Stripe from "stripe";
import axios from "axios";

import { Product as ProductType } from "../../types";
import { stripe } from "../../lib/stripe";

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";
import { useRouter } from "next/router";
import { formatPrice } from "../../utils/formatPrice";

type ProductProps = {
  product: ProductType;
};

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter();
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  const handleBuyNowClick = async () => {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post("/api/checkout", {
        priceId: product.price.id,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch {
      setIsCreatingCheckoutSession(false);

      // TODO: Datadog or Sentry
      alert(
        "An error occurred while trying to buy this product. Please try again later."
      );
    }
  };

  if (isFallback) {
    return <ProductContainer>Loading...</ProductContainer>;
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price.value}</span>

          <p>{product.description}</p>

          <button
            disabled={isCreatingCheckoutSession}
            onClick={handleBuyNowClick}
          >
            Buy now
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params?.id;

  const product = productId
    ? await stripe.products.retrieve(productId, {
        expand: ["default_price"],
      })
    : null;

  const price = product?.default_price as Stripe.Price;

  if (!product) {
    return {
      notFound: true,
    };
  }

  const formattedProduct: ProductType = {
    id: product.id,
    name: product.name,
    description: product.description,
    imageUrl: product.images[0],
    price: {
      id: price.id,
      value: formatPrice(price.unit_amount ?? 0),
    },
  };

  return {
    props: {
      product: formattedProduct,
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
