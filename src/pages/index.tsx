import { GetStaticProps } from "next";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import Stripe from "stripe";
import { useKeenSlider } from "keen-slider/react";

import { Product as ProductType } from "../types";
import { stripe } from "../lib/stripe";
import { formatPrice } from "../utils/formatPrice";
import { useWindowSize } from "../hooks/useWindowSize";
import { BREAKPOINTS } from "../constants";

import { Container, Product } from "../styles/pages/home";
import "keen-slider/keen-slider.min.css";

type HomeProps = {
  products: ProductType[];
};

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });
  const { width } = useWindowSize();

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <Container
        ref={width > BREAKPOINTS.lg ? sliderRef : null}
        className={width > BREAKPOINTS.lg ? "keen-slider" : ""}
      >
        {products.map((product) => {
          return (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              prefetch={false}
            >
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt="" />

                <footer>
                  <strong>{product.name}</strong>
                  <span>{product.price.value}</span>
                </footer>
              </Product>
            </Link>
          );
        })}
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
    active: true,
  });

  const products: ProductType[] = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      description: product.description,
      imageUrl: product.images[0],
      price: {
        id: price.id,
        value: formatPrice(price.unit_amount ?? 0),
      },
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};
