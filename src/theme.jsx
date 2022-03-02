import { createTheme } from "@mui/material/styles";
import "@fontsource/solway";

// Note: We use 1rem=10px when converting from Figma wireframes
const theme = createTheme({
  font: {
    title: 'normal 500 4.5rem/4.5rem "Solway"',
  },

  color: {
    black: "#000000",
    background: "#FDF9F9",
  }
});

/**
 * bold: 700
 * medium: 600
 * regular: 400
 * light: 300
 */

export default theme;
