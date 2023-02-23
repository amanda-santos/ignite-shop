export type Product = {
  id: string;
  name: string;
  imageUrl: string;
  description: string | null;
  price: {
    id: string;
    value: string;
  };
};

export type CartItem = Product & {
  amount: number;
}