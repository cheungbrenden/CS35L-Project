import React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import PublicIcon from '@mui/icons-material/Public';

import { db,auth } from '../firebase/config';
import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { useAuthState } from "react-firebase-hooks/auth";

const UseStyles = makeStyles((theme) => ({
    layout: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100vw',
      height: '50rem',
        backgroundImage: "url(/coffee.png)",
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        verticalAlign: 'top',
      },
     
      title: {
        font: 'normal 500 3.5rem/3.5rem "Solway"',
        color: '#F4A950',
        textAlign: 'center',
        marginLeft: '37rem',
        marginTop: '20rem',
        fontWeight: 'bold',
        width: '100rem',
        height: '6rem',
      },
    
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

function PostOrder() {
    const postorder = UseStyles();
    console.log ("postorder")
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
      if (loading) return;
      if (!user) return navigate("/home");
    }, [user, loading]);
    return (
        <div className={postorder.layout}>
        <div className = {postorder.title}>
        Your order will be ready soon!
        </div>
        <ThemeProvider theme={studyTheme}>
        <Stack spacing={5}>
            <Button 
            component={Link} to="../Welcome"
            variant = "contained">
                Go Back Home
            </Button>
        </Stack>
      </ThemeProvider>
      </div>
    );
  
    
  }; 
  
  export default PostOrder; 