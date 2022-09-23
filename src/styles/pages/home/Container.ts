import { styled } from "../..";

export const Container = styled("main", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  minHeight: 656,
  gap: "2rem",
  padding: "0 4rem",
  margin: "2rem 0",

  a: {
    color: "$gray300",
  },

  "@lg": {
    flexDirection: "row",
    maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
    marginLeft: "auto",
    gap: 0,
  },
});
