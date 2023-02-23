import { styled } from "../../../../../styles";

export const AmountBadge = styled("span", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  backgroundColor: "$green500",
  padding: "0.4rem 0.6rem",
  aspectRatio: 1 / 1,
  borderRadius: "100%",

  fontSize: "$lg",
  fontWeight: "700",
});
