import { styled } from "../..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  padding: "0 4rem",
  height: 656,
  width: "100%",

  h1: {
    fontSize: "$4xl",
    color: "$gray100",
    marginBottom: "0",
  },

  p: {
    fontSize: "$2xl",
    color: "$gray300",
    maxWidth: 560,
    textAlign: "center",
    marginTop: "2rem",
    lineHeight: 1.4,
  },

  a: {
    display: "block",
    marginTop: "3rem",
    fontSize: "$2xl",
    color: "$green500",
    textDecoration: "none",
    fontWeight: "bold",

    "&:hover": {
      color: "$green300",
    },
  },
});
