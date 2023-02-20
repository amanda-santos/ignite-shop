import { styled } from "../../../styles";

export const Container = styled("aside", {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "$gray800",

  padding: "3.2rem 4.8rem",

  width: "100%",
  height: "100vh",

  position: "absolute",
  top: 0,
  right: 0,
  zIndex: 1,

  h4: {
    fontSize: "$2xl",
  },

  "@lg": {
    width: "30%",
    height: "100%",
  },
});