import { styled } from "../..";

export const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "100%",

  h1: {
    fontSize: "$4xl",
    color: "$gray300",
  },

  span: {
    marginTop: "1rem",
    display: "block",
    fontSize: "$4xl",
    color: "$green300",
  },

  p: {
    marginTop: "2.5rem",
    fontSize: "$xl",
    lineHeight: 1.6,
    color: "$gray300",
  },

  "@xl": {
    button: {
      marginTop: "auto",
    },
  },
});
