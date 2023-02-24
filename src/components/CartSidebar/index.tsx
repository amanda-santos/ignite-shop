import { ReactElement, useEffect, useState } from "react";
import { X } from "phosphor-react";
import axios from "axios";

import { useCart } from "../../hooks/useCart";
import { CartItem } from "./components/CartItem";
import { formatPrice } from "../../utils/formatPrice";
import { Button } from "../Button";

import {
  CartItemsContainer,
  CloseButton,
  Container,
  OrderInformationContainer,
} from "./styles";

type CartSidebarProps = {
  onClose: () => void;
};

export const CartSidebar = ({ onClose }: CartSidebarProps): ReactElement => {
  const { cartItems, cartItemsAmount } = useCart();
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  const totalPrice = formatPrice(
    cartItems.reduce(
      (total, cartItem) => total + cartItem.price.value * cartItem.amount,
      0
    )
  );

  const handleFinishOrderClick = async () => {
    try {
      setIsCreatingCheckoutSession(true);

      const orderedProducts = cartItems.map((cartItem) => {
        return {
          price: cartItem.price.id,
          quantity: cartItem.amount,
        };
      });

      const response = await axios.post("/api/checkout", {
        orderedProducts,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch {
      setIsCreatingCheckoutSession(false);

      // TODO: Datadog or Sentry
      alert(
        "An error occurred while trying to complete this order. Please try again later."
      );
    }
  };

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

      <Button
        type="submit"
        disabled={isCreatingCheckoutSession}
        onClick={handleFinishOrderClick}
      >
        Finish order
      </Button>
    </Container>
  );
};
