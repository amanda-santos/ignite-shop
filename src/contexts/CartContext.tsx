import { createContext, ReactElement, ReactNode, useState } from "react";

import { CartItem, Product } from "../types";

export type CartContextProps = {
  cartItems: CartItem[];
  cartItemsAmount: number;
  addToCart: (newItem: Product) => void;
  removeFromCart: (itemId: CartItem["id"]) => void;
};

type CartContextProviderProps = {
  children: ReactNode;
};

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps
);

export const CartContextProvider = ({
  children,
}: CartContextProviderProps): ReactElement => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartItemsAmount = cartItems.reduce(
    (total, item) => total + item.amount,
    0
  );

  const addToCart = (newItem: Product) => {
    const cartItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === newItem.id
    );

    if (cartItemIndex === -1) {
      setCartItems([
        ...cartItems,
        {
          ...newItem,
          amount: 1,
        },
      ]);
    } else {
      const newCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === newItem.id) {
          return {
            ...newItem,
            amount: cartItem.amount + 1,
          };
        }

        return cartItem;
      });

      setCartItems(newCartItems);
    }
  };

  const removeFromCart = (itemId: CartItem["id"]) => {
    const newCartItems = cartItems.filter((cartItem) => cartItem.id !== itemId);

    setCartItems(newCartItems);

    console.log(newCartItems);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, cartItemsAmount, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
