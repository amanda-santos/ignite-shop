import { styled } from "../../../styles";

export const CloseButton = styled("button", {
  all: "unset",

  color: "$gray300",

  marginLeft: "auto",

  "&:not(:disabled):hover": {
    opacity: 0.8,
    cursor: 'pointer'
  },
});
