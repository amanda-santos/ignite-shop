import { styled } from "../../../styles";

export const CartButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "5.6rem",
  height: "5.6rem",
  padding: "0.8rem",

  backgroundColor: "$green500",
  color: "$gray100",
  border: "none",
  borderRadius: "0.6rem",

  transition: "all 0.2s",

  "&:not(:disabled):hover": {
    opacity: 0.8,
    cursor: 'pointer'
  },
});
