import Image from "next/future/image";

import { useCart } from "../../../../hooks/useCart";
import { CartItem as CartItemType } from "../../../../types";

import {
  AmountBadge,
  ImageContainer,
  Container,
  ItemInfo,
  ItemTitle,
} from "./styles";

type CartItemProps = {
  item: CartItemType;
};

export const CartItem = ({ item }: CartItemProps) => {
  const { removeFromCart } = useCart();

  return (
    <Container>
      <ImageContainer>
        <Image src={item.imageUrl} alt={item.name} width={96} height={96} />
      </ImageContainer>

      <ItemInfo>
        <ItemTitle>
          <h6>{item.name}</h6>

          <AmountBadge>
            {item.amount} {item.amount > 1 ? "units" : "unit"}
          </AmountBadge>
        </ItemTitle>

        <h6>{item.price.formattedValue}</h6>
        <button type="button" onClick={() => removeFromCart(item.id)}>
          Remove
        </button>
      </ItemInfo>
    </Container>
  );
};
