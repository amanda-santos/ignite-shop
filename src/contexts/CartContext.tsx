import { createContext, ReactElement, ReactNode, useState } from "react";

import { Product } from "../types";

export type CartContextProps = {
  cart: Product[];
  addToCart: (product: Product) => void;
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
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);

    console.log(cart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
