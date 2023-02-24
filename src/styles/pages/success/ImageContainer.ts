import { styled } from "../..";

export const ImageContainer = styled("div", {
  width: 128,
  height: 128,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: '100%',
  padding: "0.25rem",
  marginLeft: "-4.8rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});
