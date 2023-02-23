import { ReactElement, useState } from "react";
import Image from "next/future/image";
import Link from "next/link";
import { Handbag } from "phosphor-react";

import { CartSidebar } from "../CartSidebar";
import { useCart } from "../../hooks/useCart";

import { CartButton, Container } from "./styles";

import logoImg from "../../assets/logo.svg";

export const Header = (): ReactElement => {
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);
  const { cartItems } = useCart();

  const cartItemsAmount = cartItems.reduce(
    (total, item) => total + item.amount,
    0
  );

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

          {cartItems.length > 0 && <span>{cartItemsAmount}</span>}
        </CartButton>
      </Container>

      {isCartSidebarOpen && (
        <CartSidebar isOpen={isCartSidebarOpen} onClose={toggleCartSidebar} />
      )}
    </>
  );
};
