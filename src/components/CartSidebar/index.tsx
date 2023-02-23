import { ReactElement } from "react";
import { X } from "phosphor-react";

import { CartItemsContainer, CloseButton, Container } from "./styles";

import { useCart } from "../../hooks/useCart";
import { CartItem } from "./components/CartItem";

type CartSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const CartSidebar = ({
  isOpen,
  onClose,
}: CartSidebarProps): ReactElement | null => {
  const { cartItems } = useCart();

  if (!isOpen) {
    return null;
  }

  return (
    <Container>
      <CloseButton type="button" aria-label="Close" onClick={onClose}>
        <X size={24} />
      </CloseButton>

      <h4>Cart</h4>

      <CartItemsContainer>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </CartItemsContainer>
    </Container>
  );
};
