import React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

import { db } from '../firebase/config';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import {collection, doc, getDocs, query, setDoc, where} from 'firebase/firestore';

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

function SaladToppings() {
  const saladToppings = UseStyles();
  const [toppings, setToppings] = useState([]);
  console.log ("saladToppings")

  const getToppings = async () => {
    try{
      const toppArr = [];
      const q = query(collection(db, "Toppings"), where("salad", "==", true));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        toppArr.push(doc.data());
      });
      setToppings([...toppArr]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getToppings();
  }, []);


  return (
    <div className={saladToppings.layout}>
      <div className = {saladToppings.title}>
      Toppings
      </div>
      <Stack spacing={1}>
      <ThemeProvider theme={studyTheme}>
        {toppings.map ((toppings) => {
        return(
            <Button 
              variant="contained" 
              component={Link} to="../SaladProteins"
              onClick={() => setDoc(doc(db, 'Orders', 'aaaa'), {Toppings: toppings.Name}, {merge: true})}
            >
                {toppings.Name}
            </Button>
        )
        })}
        <Button 
          variant = "contained" 
          component={Link} to="../SaladProteins"
        >
          Skip
        </Button>
        <Button 
          variant = "contained" 
          component={Link} to="../SaladGreens"
        >
          Back
        </Button>
      </ThemeProvider>
    </Stack>
    </div>
  );

}; 

export default SaladToppings; 