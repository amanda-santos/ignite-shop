import { styled } from "../..";

export const ProductContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "4rem",
  maxWidth: "100%",
  padding: "0 4rem 4rem 4rem",

  "@xl": {
    flexDirection: "row",
    alignItems: "stretch",
    justifyItems: "initial",
    margin: "0 auto",
    maxWidth: 1180,
  },
});
