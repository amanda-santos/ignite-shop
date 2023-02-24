import { styled } from "../../../styles";

export const Container = styled("aside", {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "$gray800",

  padding: "3.2rem 4.8rem",

  width: "100%",

  position: "absolute",
  top: 0,
  right: 0,
  zIndex: 1,

  h4: {
    fontSize: "$2xl",
    marginBottom: "3.2rem"
  },

  "@lg": {
    width: "30%",
    height: "100%",
  },
});
