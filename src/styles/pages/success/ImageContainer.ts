import { styled } from "../..";

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 330,
  height: 345,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",
  marginTop: "2rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});
