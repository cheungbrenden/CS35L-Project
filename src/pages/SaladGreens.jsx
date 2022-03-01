import React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

import { db } from '../firebase/config';
import { useEffect, useState } from "react";
import { collection, getDocs, query } from 'firebase/firestore';

const UseStyles = makeStyles((theme) => ({
    layout: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100vw',
    },
   
    title: {
      font: theme.font.title,
      color: theme.color.black,
      textAlign: 'center',
      margin: '10rem 0 3rem 0',
      fontWeight: 'bold',
      width: '100rem',
      height: '6rem',
    },
  
  }));

const saladGreensTheme = createTheme({
  palette: {
    generic: {
      main: '#594A47',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: 'Solway',
  },
});


function SaladGreens() {
  const saladGreens = UseStyles();
  const [greens, setGreens] = useState([]);
  console.log ("saladGreens")

  const getGreens = async () => {
    try{
      const greensArr = [];
      const q = query(collection(db, "Greens"));
      const querySnapshot = await getDocs(q);
      console.log(querySnapshot);
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
      <Stack direction="row" spacing={2}>
        {greens.map ((greens) => {
        return(
          <ThemeProvider theme={saladGreensTheme}>
          <Button variant="contained" color= "generic" fontFamily="true">
          {greens.Name}
          </Button>
          </ThemeProvider>
        )
      })}
    </Stack>
    </div>
  );

}; 

export default SaladGreens; 