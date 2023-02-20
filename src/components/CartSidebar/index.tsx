import { ReactElement } from "react";
import Image from "next/future/image";
import Link from "next/link";
import { Handbag, X } from "phosphor-react";

import { CloseButton, Container } from "./styles";

import logoImg from "../../assets/logo.svg";

type CartSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const CartSidebar = ({
  isOpen,
  onClose,
}: CartSidebarProps): ReactElement | null => {
  if (!isOpen) {
    return null;
  }

  return (
    <Container>
      <CloseButton type="button" aria-label="Close" onClick={onClose}>
        <X size={24} />
      </CloseButton>

      <h4>Cart</h4>
    </Container>
  );
};
