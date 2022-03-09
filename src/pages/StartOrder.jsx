import React, {useEffect, useState} from 'react';
import {makeStyles, styled} from '@mui/styles';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Grid, ButtonBase, Button} from "@mui/material";
import { auth} from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from 'react-router-dom';

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

// const ItemButton = styled(Button)({
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//
// });


function StartOrder() {
    const startOrder = UseStyles();
    const [order, setOrder] = useState("");
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/home");
      }, [user,loading]);
    return (
        <div className={startOrder.layout}>
            <div className={startOrder.title}>
                Start Your Order
            </div>


            <div>
                <ThemeProvider theme={studyTheme}>
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <Button variant = "contained" component={Link} to="../pizzaSauce">Craft Your Own Pizza</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant = "contained" component={Link} to="../Sausage" >Craft Your Own Sausage</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant = "contained" component={Link} to="../SaladGreens">Craft Your Own Salad</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant = "contained" component={Link} to="../European">Craft Your Own Sandwich</Button>
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