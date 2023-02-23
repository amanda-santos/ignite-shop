import { ReactElement, useEffect } from "react";
import { X } from "phosphor-react";

import { useCart } from "../../hooks/useCart";
import { CartItem } from "./components/CartItem";

import { CartItemsContainer, CloseButton, Container } from "./styles";

type CartSidebarProps = {
  onClose: () => void;
};

export const CartSidebar = ({ onClose }: CartSidebarProps): ReactElement => {
  const { cartItems, cartItemsAmount } = useCart();

  useEffect(() => {
    if (cartItemsAmount <= 0) {
      onClose();
    }
  }, [cartItemsAmount, onClose]);

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
      Total {cartItemsAmount}
    </Container>
  );
};
