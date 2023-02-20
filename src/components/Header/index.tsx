import { ReactElement, useState } from "react";
import Image from "next/future/image";
import Link from "next/link";
import { Handbag } from "phosphor-react";

import { CartButton, Container } from "./styles";

import logoImg from "../../assets/logo.svg";
import { CartSidebar } from "../CartSidebar";

export const Header = (): ReactElement => {
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);

  const toggleCartSidebar = () => {
    setIsCartSidebarOpen((isCartSidebarOpen) => !isCartSidebarOpen);
  };

  return (
    <>
      <Container>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>

        <CartButton type="button" onClick={toggleCartSidebar}>
          <Handbag size={24} weight="light" />

          <span>1</span>
        </CartButton>
      </Container>

      {isCartSidebarOpen && (
        <CartSidebar isOpen={isCartSidebarOpen} onClose={toggleCartSidebar} />
      )}
    </>
  );
};
