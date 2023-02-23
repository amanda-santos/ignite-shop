import { ReactElement, useEffect } from "react";
import { X } from "phosphor-react";

import { useCart } from "../../hooks/useCart";
import { CartItem } from "./components/CartItem";
import { formatPrice } from "../../utils/formatPrice";

import {
  CartItemsContainer,
  CloseButton,
  Container,
  OrderInformationContainer,
} from "./styles";
import { Button } from "../Button";

type CartSidebarProps = {
  onClose: () => void;
};

export const CartSidebar = ({ onClose }: CartSidebarProps): ReactElement => {
  const { cartItems, cartItemsAmount } = useCart();

  const totalPrice = formatPrice(
    cartItems.reduce(
      (total, cartItem) => total + cartItem.price.value * cartItem.amount,
      0
    )
  );

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

      <OrderInformationContainer>
        <div>
          <span>Number of items</span>
          <strong>Total</strong>
        </div>

        <div className="align-items-flex-end">
          <span>{cartItemsAmount}</span>
          <strong>{totalPrice}</strong>
        </div>
      </OrderInformationContainer>

      <Button type="submit">Finish order</Button>
    </Container>
  );
};
