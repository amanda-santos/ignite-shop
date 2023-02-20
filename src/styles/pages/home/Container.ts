import { styled } from "../..";

export const Container = styled("main", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  minHeight: 656,
  gap: "2rem",
  padding: "0 4rem",
  margin: "0 0 2rem 0",

  "@lg": {
    flexDirection: "row",
    maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
    margin: "2rem 0 0 auto",
    gap: 0,
  },
});
