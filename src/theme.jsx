import { createTheme } from "@mui/material/styles";
import "@fontsource/solway";

// Note: We use 1rem=10px when converting from Figma wireframes
const theme = createTheme({
  font: {
    title: 'normal 500 4.5rem/4.5rem "Solway"', subtitle: 'normal 250 4.5rem/4.5rem "Solway"'
  },

  color: {
    black: "#000000", orange: "#F4A950", darkbrown: "#594A47", beige: "#F1ECEC",
  },

});

/**
 * bold: 700
 * medium: 600
 * regular: 400
 * light: 300
 */

export default theme;
