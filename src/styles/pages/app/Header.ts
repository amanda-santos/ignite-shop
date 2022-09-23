import { styled } from "../..";

export const Header = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: "2rem 4rem",
  width: "100%",
  maxWidth: 1180,
  margin: "2rem auto 0 auto",

  img: {
    cursor: "pointer",
  },

  "@xl": {
    justifyContent: "flex-start",
    padding: "2rem 0",
  },
});
