import { styled } from "../../../styles";

export const Container = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "4rem 0",
  padding: "0 4rem",
  width: "100%",

  img: {
    cursor: "pointer",
  },

  "@xl": {
    justifyContent: "space-between",
    padding: "2rem 0 0 4rem",
    margin: "4rem auto 2rem auto",
    maxWidth: 1180,
  },
});
