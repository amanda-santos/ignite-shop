import type { NextPage } from "next";
import Image from "next/future/image";
import { useKeenSlider } from "keen-slider/react";

import { Container, Product } from "../styles/pages/home";

import tshirt1 from "../assets/t-shirts/1.png";
import tshirt2 from "../assets/t-shirts/2.png";
import tshirt3 from "../assets/t-shirts/3.png";

import "keen-slider/keen-slider.min.css";

const Home: NextPage = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <Container ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={tshirt1} width={520} height={480} alt="" />

        <footer>
          <strong>TShirt X</strong>
          <span>$ 179.90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={tshirt2} width={520} height={480} alt="" />

        <footer>
          <strong>TShirt X</strong>
          <span>$ 179.90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={tshirt3} width={520} height={480} alt="" />

        <footer>
          <strong>TShirt X</strong>
          <span>$ 179.90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={tshirt2} width={520} height={480} alt="" />

        <footer>
          <strong>TShirt X</strong>
          <span>$ 179.90</span>
        </footer>
      </Product>
    </Container>
  );
};

export default Home;
