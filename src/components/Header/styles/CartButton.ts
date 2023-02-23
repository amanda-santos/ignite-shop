import { styled } from "../../../styles";

export const CartButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "4.8rem",
  height: "4.8rem",
  padding: "0.8rem",

  backgroundColor: "$gray800",
  color: "$gray100",
  border: "none",
  borderRadius: "0.6rem",

  position: 'relative',

  transition: "all 0.2s",

  span: {
    backgroundColor: "$green500",
    width: '32px',
    aspectRatio: 1 / 1,
    borderRadius: "100%",
    border: "2px solid $gray900",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "$lg",
    fontWeight: "bold",

    position: 'absolute',
    bottom: 32,
    left: 32,
  },

  "&:disabled": {
    opacity: 0.6,
    cursor: 'not-allowed'
  },

  "&:not(:disabled):hover": {
    opacity: 0.8,
    cursor: 'pointer'
  },
});
