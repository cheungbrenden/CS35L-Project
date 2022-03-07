import React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

import { db } from '../firebase/config';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { collection, getDocs, query, where} from 'firebase/firestore';

const UseStyles = makeStyles((theme) => ({
    layout: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100vw',
    },
   
    title: {
      font: theme.font.title,
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

function SpecialtyDrinks() {
  const specialtydrinks = UseStyles();
  console.log ("specialtydrinks")
  const [smoothie, setSmoothie] = useState([]);

  const getSmoothies = async () => {
    try{
      const toppArr = [];
      const q = query(collection(db, "Drinks"), where("spdrink", "==", true));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        toppArr.push(doc.data());
      });
      setSmoothie([...toppArr]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSmoothies();
  }, []);


  return (
    <div className={specialtydrinks.layout}>
      <div className = {specialtydrinks.title}>
      Specialty Drinks
      </div>
      <Stack spacing={1}>
      <ThemeProvider theme={studyTheme}>
        {smoothie.map ((smoothie) => {
        return(
            <Button 
              variant="contained" 
              component={Link} to="../Home"
            >
                {smoothie.Name}
            </Button>
        )
        })}
        <Button 
          variant = "contained" 
          component={Link} to="../Home"
        >
          Skip
        </Button>
        <Button 
          variant = "contained" 
          component={Link} to="../Home"
        >
          Back
        </Button>
      </ThemeProvider>
    </Stack>
    </div>
  );

}; 

export default SpecialtyDrinks; 