import React from 'react';
import {makeStyles, styled} from '@mui/styles';
import {Grid, ButtonBase, Button} from "@mui/material";

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
        margin: '10rem 0 1rem 0',
        fontWeight: 'bold',
        width: '100rem',
        height: '6rem',
    },


}));

const ItemButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',

});


function StartOrder() {
    const startOrder = UseStyles();

    return (
        <div className={startOrder.layout}>
            <div className={startOrder.title}>
                Start Your Order
            </div>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <ItemButton>Craft Your Own Pizza</ItemButton>
                    </Grid>
                    <Grid item xs={6}>
                        {/*<ButtonBase className={startOrder.itemButton} variant="contained">Craft Your Own*/}
                        {/*    Sausage</ButtonBase>*/}
                        <ItemButton>Craft Your Own Sausage</ItemButton>
                    </Grid>
                    <Grid item xs={6}>
                        <ItemButton>Craft Your Own Salad</ItemButton>
                    </Grid>
                    <Grid item xs={6}>
                        <ItemButton>Craft Your Own Sandwich</ItemButton>
                    </Grid>
                    <Grid item xs={6}>
                        <ItemButton>European Dishes</ItemButton>
                    </Grid>
                </Grid>
            </div>
        </div>
    );

}

export default StartOrder;