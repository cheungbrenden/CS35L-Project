import React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import Stack from '@mui/material/Stack';
import PublicIcon from '@mui/icons-material/Public';

import { db } from '../firebase/config';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
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
      main: '#32a852',
      contrastText: '#32a852'
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


function SaladGreens() {
  const saladGreens = UseStyles();
  const [greens, setGreens] = useState([]);
  console.log ("saladGreens")

  const getGreens = async () => {
    try{
      const greensArr = [];
      const q = query(collection(db, "Greens"), orderBy("Name"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        greensArr.push(doc.data());
      });
      setGreens([...greensArr]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getGreens();
  }, []);


  return (
    
    <div className={saladGreens.layout}>
      <div className = {saladGreens.title}>
      Greens
      </div>
      <ThemeProvider theme={studyTheme}>
      <CssBaseline />
        <Stack spacing={1}>
          {greens.map ((greens) => {
          return(

            <Button 
              variant = "contained" 
              component={Link} to="../SaladToppings"
              size = "large"
              endIcon={<PublicIcon color = 'secondary'/>}
            >
              {greens.Name}
            </Button>
          )
        })}
        <Button 
          variant = "contained" 
          component={Link} to="../SaladToppings"
        >
          Skip
        </Button>
        <Button 
          variant = "contained" 
        >
          Back
        </Button>
      </Stack>
    </ThemeProvider>
    </div>

  );

}; 

export default SaladGreens; 