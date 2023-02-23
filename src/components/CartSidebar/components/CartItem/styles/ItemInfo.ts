import { styled } from "../../../../../styles";

export const ItemInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",

  h6: {
    fontWeight: "700",
    fontSize: "$xl",
  },

  button: {
    all: "unset",
    color: "$green500",
    fontWeight: "700",

    "&:not(:disabled):hover": {
      opacity: 0.8,
      cursor: 'pointer'
    },
  },
});
