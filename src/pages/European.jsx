import React from 'react';
import { makeStyles } from '@mui/styles';
import { db } from '../firebase/config';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import MouseOverPopover from '../Components/PopoverButton';
import { useNavigate } from "react-router-dom";
import {Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, createTheme, ThemeProvider, Button, Grid } from '@mui/material';

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
      width: '100rem',
     height: '8.5rem',
    },
    subtitle : {
      font: theme.font.subtitle,
      color: theme.color.white,
      backgroundColor: theme.color.darkBrown,
      textAlign: 'left',
      margin: '0 0 0 0.9rem',
      fontWeight: 'medium',
      width: '25',
      height: '4rem',
      borderRadius: '15px',
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
  // need to add backend config to get specific button data
  function European() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = `newPath`; //change to correct path
    navigate(path);
  }
    const european = UseStyles();
    const [europeans, setEuropeans] = useState ([]);
         const europeansCollectionRef = collection(db, 'European');
         useEffect(() => {
                  const getEuropeans = async () => {
                     const data = await getDocs (europeansCollectionRef);   //return all documents inside of it 
                      console.log (data);
                     setEuropeans (data.docs.map ((doc) => ({ ...doc.data()}))); 
                  };
                  getEuropeans();
              }, [])

    const [drinks, setDrinks] = useState ([]);
         const drinksCollectionRef = collection(db, 'Drinks');
         useEffect(() => {
                  const getDrinks = async () => {
                     const data = await getDocs (drinksCollectionRef);   //return all documents inside of it 
                      console.log (data);
                     setDrinks (data.docs.map ((doc) => ({ ...doc.data()}))); 
                  };
                  getDrinks();
              }, [])

        const [sides, setSides] = useState ([]);
         const sidesCollectionRef = collection(db, 'Sides');
         useEffect(() => {
                  const getSides = async () => {
                     const data = await getDocs (sidesCollectionRef);   //return all documents inside of it 
                      console.log (data);
                     setSides (data.docs.map ((doc) => ({ ...doc.data()}))); 
                  };
                  getSides();
              }, [])

              return (
                <div className={european.layout}>
                  <div className = {european.title}>
                  European-Style Meal
                  </div>
          
                      <Grid container spacing={2} columns={15}><Grid item xs={5}>
                    <h2 className={european.subtitle}> Entrees: </h2>
                    <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              {europeans.map ((european) => {
                     return (
                      <MouseOverPopover label={'Calories: ' + european.Nutrition}><FormControlLabel value={european.Name} control={<Radio style ={{
                        color: "#F4A950",
                      }}/>} label={european.Name} /></MouseOverPopover>
                     );
                   })}
            </RadioGroup>
          </FormControl>
                    </Grid>
          
                    <Grid item xs={5}><h2 className={european.subtitle}> Drink: </h2>
                            <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                    >
                      {drinks.map ((drink) => {
                            return (
                              <MouseOverPopover label={'Calories: ' + drink.Nutrition}><FormControlLabel value={drink.Name} control={<Radio style ={{
                                color: "#F4A950",
                              }}/>} label={drink.Name} /></MouseOverPopover>
                            );
                          })}
                    </RadioGroup>
                  </FormControl>
                  </Grid>
                    <Grid item xs={5}><h2 className={european.subtitle}> Side: </h2>
                              <FormControl>
                      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                      >
                        {sides.map ((side) => {
                              return (
                                <MouseOverPopover label={'Calories: ' + side.Nutrition}><FormControlLabel value={side.Name} control={<Radio style ={{
                                  color: "#F4A950",
                                }}/>} label={side.Name} /></MouseOverPopover>
                              );
                            })}
                      </RadioGroup>
                    </FormControl>
          </Grid></Grid>
                  
                    <ThemeProvider theme={studyTheme}>
                      <Button onClick={routeChange}variant="contained" color= "generic" fontFamily="true">
                        Place Order
                      </Button>
                    </ThemeProvider>
                </div>
              );

}; 
export default European; 