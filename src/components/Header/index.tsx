import { ReactElement } from "react";
import Image from "next/future/image";
import Link from "next/link";
import { Handbag } from "phosphor-react";

import { CartButton, Container } from "./styles";

import logoImg from "../../assets/logo.svg";

export const Header = (): ReactElement => {
  return (
    <Container>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>

      <CartButton type="button">
        <Handbag size={24} weight="light" />

        <span>1</span>
      </CartButton>
    </Container>
  );
};
