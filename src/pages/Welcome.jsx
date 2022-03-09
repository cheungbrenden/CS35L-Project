import React from 'react';
import { makeStyles } from '@mui/styles';
import { Link, useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const UseStyles = makeStyles((theme) => ({
    layout: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100vw',
      height: '50rem',
      backgroundImage: "url(/welcome.png)",
      backgroundPosition: 'top',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      verticalAlign: 'top',
    },
   
    title: {
      font: theme.font.title,
      color: theme.color.orange,
      textAlign: 'center',
      margin: '0 0 0 0rem',
      marginTop: '8rem',
      fontWeight: 'bold',
      width: '100rem',
     height: '8.5rem',
    },

    subtitle: {
      font: theme.font.subtitle,
      color: theme.color.black,
      textAlign: 'center',
      margin: '0 0 0 0.9rem',
      fontWeight: 'medium',
      width: '50rem',
     height: '4rem',
    }
  }));

  const studyTheme = createTheme({
    palette: {
      primary: {
        main: '#594A47',
        contrastText: '#fff',
      },
      secondary: {
        main: '#0f9600',
      },
      warning: {
        main: '#bf0404',
      },
      background: {
        default: '#F1ECEC',
      }
    },
    typography: {
      button: {
        fontFamily: 'Solway',
        textTransform:'none',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            height: 100,
            width: 300,
            fontSize: 20,
          },
        }, 
      }, 
    },
  });

function Welcome() {
    const home = UseStyles();
    console.log ("home")
    const navigate = useNavigate(); 
    return (
      <div className={home.layout}>
        <div className = {home.title}>
        Welcome to The Study
        </div>
        <ThemeProvider theme={studyTheme}>
        <Stack spacing={5}>
            <Button onClick={() => navigate("/History")}
            variant = "contained">
            Past Orders
        </Button>
        <Button onClick={() => navigate("/StartOrder")}
            variant = "contained">
            New Order
        </Button>
        </Stack>
       </ThemeProvider>
      </div>
    );
}; 

export default Welcome; 