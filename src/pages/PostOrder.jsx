import React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import PublicIcon from '@mui/icons-material/Public';

import { db } from '../firebase/config';
import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

const UseStyles = makeStyles((theme) => ({
    layout: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100vw',
      },
     
      title: {
        font: 'normal 500 4.5rem/4.5rem "Solway"',
        color: '#F4A950',
        textAlign: 'center',
        margin: '5rem 0 2rem 0',
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
    return (
        <div className={postorder.layout}>
        <div className = {postorder.title}>
        Your order will be ready soon.
        </div>
        <ThemeProvider theme={studyTheme}>
        <Stack spacing={5}>
            <Button 
            component={Link} to="../dashboard"
            variant = "contained">
                Go Back Home
            </Button>
            <Button 
            variant = "contained">
                Add to Favorites
            </Button>
        </Stack>
      </ThemeProvider>
      </div>
  
    );
  
    
  }; 
  
  export default PostOrder; 