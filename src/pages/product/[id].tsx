import Image from "next/future/image";
import { GetStaticPaths, GetStaticProps } from "next";
import Stripe from "stripe";

import { Product as ProductType } from "../../types";
import { stripe } from "../../lib/stripe";

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";
import { useRouter } from "next/router";

type ProductProps = {
  product: ProductType;
};

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt="" />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <button>Buy now</button>
      </ProductDetails>
    </ProductContainer>
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
  const formattedPrice = price.unit_amount ? price.unit_amount / 100 : 0;

  return {
    props: {
      product: {
        id: product?.id,
        name: product?.name,
        imageUrl: product?.images[0],
        price: new Intl.NumberFormat("en", {
          style: "currency",
          currency: "USD",
        }).format(formattedPrice),
        description: product?.description,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hours
  };
};
