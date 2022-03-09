import React, {useEffect, useState} from 'react';
import {makeStyles, styled} from '@mui/styles';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Grid, ButtonBase, Button} from "@mui/material";
import {auth, db} from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from 'react-router-dom';
import {addDoc, collection, doc, setDoc} from "firebase/firestore";
import {onAuthStateChanged} from "firebase/auth";

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
            textTransform: 'none',
            fontSize: '2em'
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




export let orderRefID = "";


function StartOrder() {
    const [userid, setUserid] = useState("");
    const startOrder = UseStyles();
    const [order, setOrder] = useState("");
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    let uid = ""
// TODO: add UID with order

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            uid = user.uid;
            setUserid(uid);
        } else {
            // User is signed out
            // ...
        }
    });

    async function orderID(entree) {

        const orderRef = await addDoc(collection(db, 'Orders'), {Entree: entree, UID: uid});
        orderRefID = orderRef.id;
    }


    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/home");
      }, [user, loading, navigate]);








    return (
        <div className={startOrder.layout}>
            <div className={startOrder.title}>
                Start Your Order
            </div>


            <div>
                <ThemeProvider theme={studyTheme}>
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <Button variant = "contained" component={Link} to="../pizzaSauce"
                                    onClick={e => orderID("Pizza")}>
                                Craft Your Own Pizza</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant = "contained" component={Link} to="../Sausage" >Craft Your Own Sausage</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant = "contained" component={Link} to="../SaladGreens"
                                    onClick={e => orderID("Salad")}>
                                Craft Your Own Salad</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant = "contained" component={Link} to="../SandwichBread"
                                    onClick={e => orderID("Sandwich")}>
                                Craft Your Own Sandwich</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant = "contained" component={Link} to="../European">European Dishes</Button>
                        </Grid>
                    </Grid>
                    <Button variant = "contained" component={Link} to="../Welcome">Back</Button>
                </ThemeProvider>
            </div>
        </div>
    );

}

export default StartOrder;