import { styled } from "../../styles";

export const Button = styled("button", {
  marginTop: "2rem",
  backgroundColor: "$green500",
  border: 0,
  color: "$white",
  borderRadius: 8,
  padding: "2rem 3.2rem",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "$xl",
  transition: "all 0.2s",
  maxWidth: "100%",

  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },

  "&:not(:disabled):hover": {
    backgroundColor: "$green300",
  },
});
