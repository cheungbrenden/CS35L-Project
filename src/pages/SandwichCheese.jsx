import React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import PublicIcon from '@mui/icons-material/Public';

import { db, auth } from '../firebase/config';
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import {collection, doc, getDocs, query, setDoc, where} from 'firebase/firestore';
import { orderRefID } from './StartOrder';

const UseStyles = makeStyles((theme) => ({
  layout: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100vw',
    height: '100vw',
    backgroundColor: '#FDF9F9',
  },
  
  title: {
    font: 'normal 500 4.5rem/4.5rem "Solway"',
    color: '#F4A950',
    textAlign: 'center',
    margin: '3rem 0 2rem 0',
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
    low: {
      main: '#0f9600',
    },
    high: {
      main: '#bf0404',
    },
    background: {
      default: '#F1ECEC',
    }
  },
  typography: {
    fontFamily: 'Solway',
    fontSize: 14,
    button: {
      textTransform:'none',
    },
  },
  subtitle1:{
    fontFamily: 'Solway',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          minWidth: '250px', 
          maxHeight: '35px',
          minHeight: '35px',
        },
      }, 
    }, 
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#fff',
          '&.Mui-checked': {
            color: '#fff',
          },
          transform: "scale(0.85)",
        }
      }
    }
  },
});

function SandwichCheese() {
  const style = UseStyles();
  const [ingredients, setIngredients] = useState([]);
  console.log ("sandwichCheese")
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const getIngredients = async () => {
    try{
      const ingredientsArr = [];
      const q = query(collection(db, "Cheese"), where("sandwich", "==", true));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        ingredientsArr.push(doc.data());
      });
      setIngredients([...ingredientsArr]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/home");
  }, [user, loading]);

  useEffect(() => {
    getIngredients();
  }, []);
  
  return (
    <div className={style.layout}>
      <div className = {style.title}>
      Sandwich Cheese
      </div>
      <ThemeProvider theme={studyTheme}>
        <Stack spacing={1}>
          {ingredients.map ((ingredients) => {
            if (ingredients.Footprint === 'low'){
              return(
                <Button 
                  variant = "contained" 
                  endIcon={<PublicIcon color = 'low'/>}
                  component={Link} to="../SandwichToppings"
                  onClick={() => setDoc(doc(db, 'Orders', orderRefID), {Cheese: ingredients.Name}, {merge: true})}
                >
                  {ingredients.Name}
                </Button>
              )
            }
            else if (ingredients.Footprint == 'high'){
              return(
                <Button 
                  variant = "contained" 
                  component={Link} to="../SandwichToppings"
                  endIcon={<PublicIcon color = 'high'/>}
                  onClick={() => setDoc(doc(db, 'Orders', orderRefID), {Cheese: ingredients.Name}, {merge: true})}
                >
                  {ingredients.Name}
                </Button>
              )
            }
            else {
              return(
                <Button 
                  variant = "contained" 
                  component={Link} to="../SandwichToppings"
                  onClick={() => setDoc(doc(db, 'Orders', orderRefID), {Cheese: ingredients.Name}, {merge: true})}
                >
                  {ingredients.Name}
                </Button>
              )
            }
        })}
        <Stack spacing={5}>
          <Button 
            variant = "contained" 
            component={Link} to="../SandwichToppings"
          >
            Skip
          </Button>
          <Button 
            variant = "contained"
            component={Link} to="../SandwichBread" 
          >
            Back
          </Button>
        </Stack>
      </Stack>
    </ThemeProvider>
  </div>
  );
}; 

export default SandwichCheese; 