import React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

import { db } from '../firebase/config';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { collection, getDocs, query, orderBy} from 'firebase/firestore';

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


function SaladProteins() {
  const saladProteins = UseStyles();
  const [protein, setProtein] = useState([]);
  console.log ("saladProteins")

  const getProtein = async () => {
    try{
      const proteinArr = [];
      const q = query(collection(db, "Proteins"), orderBy("Name"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        proteinArr.push(doc.data());
      });
      setProtein([...proteinArr]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProtein();
  }, []);


  return (
    <div className={saladProteins.layout}>
      <div className = {saladProteins.title}>
      Proteins
      </div>
      <Stack spacing={1}>
        {protein.map ((protein) => {
        return(
          <ThemeProvider theme={studyTheme}>
            <Button variant="contained" color= "generic" fontFamily="true" component={Link} to="../SaladDressings">
              {protein.Name}
            </Button>
          </ThemeProvider>
        )
      })}
    </Stack>
    </div>
  );

}; 

export default SaladProteins; 