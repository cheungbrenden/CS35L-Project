import { createTheme } from "@mui/material/styles";
import "@fontsource/solway";

// Note: We use 1rem=10px when converting from Figma wireframes
const theme = createTheme({
  font: {
    title: 'normal 500 4.5rem/4.5rem "Solway"',

    subtitle: 'normal 500 2rem/4.5rem "Solway"',

    output: 'normal 100 1rem/1rem "Solway"',

  },

  color: {
    orange: "#F4A950",
    beige: "#F1ECEC",
    darkBrown: "#594A47",
    black: "#000000",
    background: "#FDF9F9",

    brown: "#594A47",
    white: "#FFFFFF",
  }
})

/**
 * bold: 700
 * medium: 600
 * regular: 400
 * light: 300
 */

export default theme;
