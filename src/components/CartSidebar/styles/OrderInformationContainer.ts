import { styled } from "../../../styles";

export const OrderInformationContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  margin: '6.4rem 0 3.2rem 0',

  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "1.6rem",

    span: {
      fontSize: "$xl",
    },

    strong: {
      fontSize: "$2xl",
    }
  },

  '.align-items-flex-end': {
    alignItems: "flex-end",
  } 
});
