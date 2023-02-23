import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/future/image";
import Head from "next/head";
import { useRouter } from "next/router";
import Stripe from "stripe";

import { Product as ProductType } from "../../types";
import { stripe } from "../../lib/stripe";
import { formatPrice } from "../../utils/formatPrice";
import { useCart } from "../../hooks/useCart";
import { Button } from "../../components/Button";

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

type ProductProps = {
  product: ProductType;
};

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
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
          <span>{product.price.formattedValue}</span>

          <p>{product.description}</p>

          <Button onClick={handleAddToCart}>Add to cart</Button>
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
      formattedValue: formatPrice(price.unit_amount ?? 0),
      value: price.unit_amount ?? 0,
    },
  };

  return {
    props: {
      product: formattedProduct,
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
