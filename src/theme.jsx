import { createTheme } from "@mui/material/styles";

// Note: We use 1rem=10px when converting from Figma wireframes
const theme = createTheme({
  font: {
    title: 'normal 700 4.5rem/4.5rem "Work Sans"',
  },

  color: {
    black: "#000000",
  }
});

/**
 * bold: 700
 * medium: 600
 * regular: 400
 * light: 300
 */

export default theme;
