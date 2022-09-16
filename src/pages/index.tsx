import type { NextPage } from "next";
import Image from "next/future/image";

import { Container, Product } from "../styles/pages/home";

import tshirt1 from "../assets/t-shirts/1.png";
import tshirt2 from "../assets/t-shirts/2.png";
import tshirt3 from "../assets/t-shirts/3.png";

const Home: NextPage = () => {
  return (
    <Container>
      <Product>
        <Image src={tshirt1} width={520} height={480} alt="" />

        <footer>
          <strong>TShirt X</strong>
          <span>$ 179.90</span>
        </footer>
      </Product>

      <Product>
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
