import { ReactElement } from "react";
import Image from "next/future/image";
import Link from "next/link";
import { Handbag } from "phosphor-react";

import { Container } from "./styles";

import logoImg from "../../assets/logo.svg";

export const Header = (): ReactElement => {
  return (
    <Container>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>

      <Handbag size={32} weight="light" />
    </Container>
  );
};
