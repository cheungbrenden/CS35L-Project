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


function PizzaSauce() {
    console.log(orderRefID)
    const style = UseStyles();
    const [sauce, setSauce] = useState([]);

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
        <div className={style.layout}>
            <div className = {style.title}>
                Pizza Sauce
            </div>
            <ThemeProvider theme={studyTheme}>
                <Stack spacing={1}>
                    {sauce.map ((sauce) => {
                        if (sauce.Footprint === 'low'){
                            return(
                                <Button
                                    variant = "contained"
                                    endIcon={<PublicIcon color = 'low'/>}
                                    component={Link} to="../PizzaCheese"
                                    onClick={() => setDoc(doc(db, 'Orders', orderRefID), {Sauce: sauce.Name}, {merge: true})}
                                >
                                    {sauce.Name}
                                </Button>
                            )
                        }
                        else if (sauce.Footprint === 'high'){
                            return(
                                <Button
                                    variant = "contained"
                                    component={Link} to="../PizzaCheese"
                                    endIcon={<PublicIcon color = 'high'/>}
                                    onClick={() => setDoc(doc(db, 'Orders', orderRefID), {Sauce: sauce.Name}, {merge: true})}
                                >
                                    {sauce.Name}
                                </Button>
                            )
                        }
                        else {
                            return(
                                <Button
                                    variant = "contained"
                                    component={Link} to="../PizzaCheese"
                                    onClick={() => setDoc(doc(db, 'Orders', orderRefID), {Sauce: sauce.Name}, {merge: true})}
                                >
                                    {sauce.Name}
                                </Button>
                            )
                        }
                    })}
                    <Stack spacing={5}>
                        <Button
                            variant = "contained"
                            component={Link} to="../PizzaCheese"
                        >
                            Skip
                        </Button>
                        <Button
                            variant = "contained"
                            component={Link} to="../StartOrder"
                        >
                            Back
                        </Button>
                    </Stack>
                </Stack>
            </ThemeProvider>
        </div>
    );
};

//     return (
//         <div className={pizzaSauces.layout}>
//             <div className = {pizzaSauces.title}>
//                 Pizza Sauces
//             </div>
//             <ThemeProvider theme={studyTheme}>
//                 <Grid container spacing={4}>
//                     {sauce.map ((sauce) => {
//                         return(
//                             <Grid item xs={6}>
//                                 <Button onClick={handleSubmit.bind(this, sauce.Name)} variant = "contained" component={Link} to="../PizzaCheese" >{sauce.Name}</Button>
//                             </Grid>
//
//                         )
//
//                     })}
//                     {/*<Grid item xs={6}>*/}
//                     {/*    <Button*/}
//                     {/*        variant = "contained"*/}
//                     {/*        component={Link} to="../SaladToppings"*/}
//                     {/*    >*/}
//                     {/*        Skip*/}
//                     {/*    </Button>*/}
//                     {/*</Grid>*/}
//
//                     {/*<Grid item xs={6}>*/}
//                     {/*    <Button*/}
//                     {/*        variant = "contained"*/}
//                     {/*        component={Link} to="../SaladToppings"*/}
//                     {/*    >*/}
//                     {/*        Back*/}
//                     {/*    </Button>*/}
//                     {/*</Grid>*/}
//                 </Grid>
//             </ThemeProvider>
//         </div>
//     );
//
// };

export default PizzaSauce;