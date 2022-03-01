import React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

import { db } from '../firebase/config';
import { useEffect, useState } from "react";
import { collection, getDocs, query} from 'firebase/firestore';

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
    generic: {
      main: '#594A47',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: 'Solway',
  },
});


function SaladDressings() {
  const saladDressings = UseStyles();
  const [dressing, setDressing] = useState([]);
  console.log ("saladDressings")

  const getDressing = async () => {
    try{
      const dressingArr = [];
      const q = query(collection(db, "Dressings"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        dressingArr.push(doc.data());
      });
      setDressing([...dressingArr]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDressing();
  }, []);


  return (
    <div className={saladDressings.layout}>
      <div className = {saladDressings.title}>
      Dressings
      </div>
      <Stack spacing={1}>
        {dressing.map ((dressing) => {
        return(
          <ThemeProvider theme={studyTheme}>
            <Button variant="contained" color= "generic" fontFamily="true">
              {dressing.Name}
            </Button>
          </ThemeProvider>
        )
      })}
    </Stack>
    </div>
  );

}; 

export default SaladDressings; 