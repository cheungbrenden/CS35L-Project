import React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import PublicIcon from '@mui/icons-material/Public';

import { db } from '../firebase/config';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { collection, getDocs, query, orderBy, doc, setDoc, where } from 'firebase/firestore';
import { orderRefID } from './StartOrder'

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


function PizzaCheese() {
    const style = UseStyles();
    const [cheese, setCheese] = useState([]);

    function handleSubmit(specifiedCheese) {
        db.collection("Orders").doc('asdfasdf').set({
            cheese: specifiedCheese
        }, {merge: true});
    }

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
        <div className={style.layout}>
            <div className = {style.title}>
            Pizza Cheeses
            </div>
            <ThemeProvider theme={studyTheme}>
                <Stack spacing={1}>
                    {cheese.map ((cheese) => {
                        if (cheese.Footprint === 'low'){
                            return(
                                <Button
                                    variant = "contained"
                                    endIcon={<PublicIcon color = 'low'/>}
                                    component={Link} to="../PizzaToppings"
                                    onClick={() => setDoc(doc(db, 'Orders', orderRefID), {Cheese: cheese.Name}, {merge: true})}
                                >
                                    {cheese.Name}
                                </Button>
                            )
                        }
                        else if (cheese.Footprint === 'high'){
                            return(
                                <Button
                                    variant = "contained"
                                    component={Link} to="../PizzaToppings"
                                    endIcon={<PublicIcon color = 'high'/>}
                                    onClick={() => setDoc(doc(db, 'Orders', orderRefID), {Cheese: cheese.Name}, {merge: true})}
                                >
                                    {cheese.Name}
                                </Button>
                            )
                        }
                        else {
                            return(
                                <Button
                                    variant = "contained"
                                    component={Link} to="../PizzaToppings"
                                    onClick={() => setDoc(doc(db, 'Orders', orderRefID), {Cheese: cheese.Name}, {merge: true})}
                                >
                                    {cheese.Name}
                                </Button>
                            )
                        }
                    })}
                    <Stack spacing={5}>
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
                </Stack>
            </ThemeProvider>
        </div>
    );
};

export default PizzaCheese;