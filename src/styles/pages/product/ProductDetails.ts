import { styled } from "../..";

export const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "100%",

  h1: {
    fontSize: "$2xl",
    color: "$gray300",
  },

  span: {
    marginTop: "1rem",
    display: "block",
    fontSize: "$2xl",
    color: "$green300",
  },

  p: {
    marginTop: "2.5rem",
    fontSize: "$md",
    lineHeight: 1.6,
    color: "$gray300",
  },

  button: {
    marginTop: "2rem",
    backgroundColor: "$green500",
    border: 0,
    color: "$white",
    borderRadius: 8,
    padding: "1.25rem",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "$md",
    transition: "all 0.2s",
    maxWidth: "100%",

    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },

    "&:not(:disabled):hover": {
      backgroundColor: "$green300",
    },
  },

  "@xl": {
    button: {
      marginTop: "auto",
    },
  },
});
