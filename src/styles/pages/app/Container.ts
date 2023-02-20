import { styled } from "../..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  
  width: "100%",

  "@xl": {
    minHeight: "100vh",
  },
});
