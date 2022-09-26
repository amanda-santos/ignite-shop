import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  ":focus": {
    outline: 0,
    boxShadow: "0 0 0 2px $green300",
  },

  html: {
    fontSize: "72.5%",
  },

  body: {
    backgroundColor: "$gray900",
    color: "$gray100",
    "-webkit-font-smoothing": "antialiased",
  },

  "body, input, textarea, button": {
    fontSize: "1.6rem",
    fontFamily: "Roboto",
    fontWeight: 400,
  },

  "@xl": {
    html: {
      fontSize: "62.5%",
    },
  },
});
