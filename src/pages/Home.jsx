import React from 'react';
import { makeStyles } from '@mui/styles';
import { Link, useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import PublicIcon from '@mui/icons-material/Public';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const UseStyles = makeStyles((theme) => ({
    layout: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100vw',
    },
   
    title: {
      font: theme.font.title,
      color: theme.color.orange,
      textAlign: 'center',
      margin: '0 0 0 0.9rem',
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
          },
        }, 
      }, 
    },
  });
function Home() {
    const home = UseStyles();
    console.log ("home")
    const navigate = useNavigate(); 
    return (
      <div className={home.layout}>
        <div className = {home.title}>
        The Study
        </div>
        <div className = {home.subtitle}>
        at Hedrick
        </div>
        <ThemeProvider theme={studyTheme}>
        <Button onClick={() => navigate("/login")}
        variant = "contained">
          get in line
       </Button>
       </ThemeProvider>
      </div>
    );

}; 

export default Home; 