import React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Grid} from '@mui/material';

import { db } from '../firebase/config';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { collection, getDocs, query, orderBy, where } from 'firebase/firestore';

const UseStyles = makeStyles((theme) => ({
    layout: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100vw',
        margin: '0 0 10em 0',

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
    },
    typography: {
        button: {
            fontFamily: 'Solway',
            textTransform:'none',
            fontSize: '2em',
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

// ToDo: create togglable buttons such that you can add up to 3 addons
function PizzaAddons() {
    const pizzaAddons = UseStyles();
    const [addons, setAddons] = useState([]);
    console.log ("saladGreens")

    const getAddons = async () => {
        try{
            const greensArr = [];
            const q = query(collection(db, "AddOns"), where("pizza", "==", true) );
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                console.log(doc.data());
                greensArr.push(doc.data());
            });
            setAddons([...greensArr]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAddons();
    }, []);


    return (
        <div className={pizzaAddons.layout}>
            <div className = {pizzaAddons.title}>
                Pizza Add-Ons
            </div>
            <ThemeProvider theme={studyTheme}>
                <Grid container spacing={4}>
                    {addons.map ((toppings) => {
                        return(
                            <Grid item xs={6}>
                                <Button variant = "contained" component={Link} to="../PizzaAddOns" >{toppings.Name}</Button>
                            </Grid>

                        )
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
            </ThemeProvider>
        </div>
    );

}

export default PizzaAddons;