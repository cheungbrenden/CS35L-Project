import React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Grid} from '@mui/material';
import Stack from '@mui/material/Stack';
import PublicIcon from '@mui/icons-material/Public';

import { db } from '../firebase/config';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import {collection, getDocs, query, orderBy, where} from 'firebase/firestore';

const UseStyles = makeStyles((theme) => ({
    layout: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100vw',
        margin: '0 0 10em 0',
        backgroundColor: '#FDF9F9',
    },

    title: {
        font: theme.font.title,
        color: theme.color.orange,
        textAlign: 'center',
        margin: '4rem 0 3rem 0',
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
      fontSize: 16,
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
    },
  });


function PizzaCheese() {
    const pizzaCheese = UseStyles();
    const [cheese, setCheese] = useState([]);

    function handleSubmit(specifiedCheese) {
        db.collection("Orders").doc('asdfasdf').set({
            cheese: specifiedCheese
        }, {merge: true});
    }

    // ToDo: separate pizza and sandwich cheeses in database
    const getCheeses = async () => {
        try{
            const greensArr = [];
            const q = query(collection(db, "Cheese"), where("pizza", "==", true));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                console.log(doc.data());
                greensArr.push(doc.data());
            });
            setCheese([...greensArr]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCheeses();
    }, []);


    return (
        <div className={pizzaCheese.layout}>
            <div className = {pizzaCheese.title}>
                Pizza Cheeses
            </div>
            <ThemeProvider theme={studyTheme}>
            <Grid container spacing={2} columns={{xs: 12}}>
                    {cheese.map ((cheese) => {   
                        if (cheese.Footprint == 'low') {
                            return (
                                <Grid item xs={6}>
                                    <Button 
                                        onClick={handleSubmit.bind(this, cheese.Name)} 
                                        variant = "contained" 
                                        component={Link} to="../PizzaToppings" 
                                        endIcon={<PublicIcon color = 'low'/>}
                                    >
                                    {cheese.Name}
                                    </Button>
                                </Grid>
                            )
                        }
                        else if (cheese.Footprint == 'high'){
                            return (
                                <Grid item xs={6}>
                                    <Button 
                                        onClick={handleSubmit.bind(this, cheese.Name)} 
                                        variant = "contained" 
                                        component={Link} to="../PizzaToppings" 
                                        endIcon={<PublicIcon color = 'high'/>}
                                    >
                                    {cheese.Name}
                                    </Button>
                                </Grid>
                            )
                        }
                        else {
                            return (
                                <Grid item xs={6}>
                                    <Button 
                                        onClick={handleSubmit.bind(this, cheese.Name)} 
                                        variant = "contained" 
                                        component={Link} to="../PizzaToppings" 
                                    >
                                    {cheese.Name}
                                    </Button>
                                </Grid>
                            )
                        }
                    })}
                    {/*<Grid item xs={6}>*/}
                    {/*    <Button*/}
                    {/*        variant = "contained"*/}
                    {/*        component={Link} to="../SaladToppings"*/}
                    {/*    >*/}
                    {/*        Skip*/}
                    {/*    </Button>*/}
                    {/*</Grid>*/}

                    {/*<Grid item xs={6}>*/}
                    {/*    <Button*/}
                    {/*        variant = "contained"*/}
                    {/*        component={Link} to="../SaladToppings"*/}
                    {/*    >*/}
                    {/*        Back*/}
                    {/*    </Button>*/}
                    {/*</Grid>*/}
                
            
            </Grid>
            <Grid item p = {9}>
            <Stack spacing = {2}>
            <Button 
                variant = "contained" 
                component={Link} to="../PizzaToppings"
            >
            Skip
            </Button>
            <Button 
                variant = "contained" 
                component={Link} to="../PizzaSauce"
            >
                Back
            </Button>
            </Stack>
            </Grid>
            </ThemeProvider>
        </div>

    );

};

export default PizzaCheese;