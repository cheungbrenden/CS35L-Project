import React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Grid} from '@mui/material';

import { db } from '../firebase/config';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { collection, getDocs, query, orderBy, doc, setDoc, where } from 'firebase/firestore';

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


function PizzaSauce() {



    const pizzaSauces = UseStyles();
    const [sauce, setSauce] = useState([]);


    function handleSubmit(specifiedSauce) {
        db.collection("Orders").doc('asdfasdf').set({
            sauce: specifiedSauce
        });
    }

    const getSauces = async () => {
        try{
            const greensArr = [];
            const q = query(collection(db, "Sauce"), orderBy("Name"));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                console.log(doc.data());
                greensArr.push(doc.data());
            });
            setSauce([...greensArr]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSauces();
    }, []);


    return (
        <div className={pizzaSauces.layout}>
            <div className = {pizzaSauces.title}>
                Pizza Sauces
            </div>
            <ThemeProvider theme={studyTheme}>
                <Grid container spacing={4}>
                    {sauce.map ((sauce) => {
                        return(
                            <Grid item xs={6}>
                                <Button onClick={handleSubmit.bind(this, sauce.Name)} variant = "contained" component={Link} to="../PizzaCheese" >{sauce.Name}</Button>
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

};

export default PizzaSauce;