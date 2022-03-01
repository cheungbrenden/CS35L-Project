import React from 'react';
import { makeStyles } from '@mui/styles';

const UseStyles = makeStyles((theme) => ({
    layout: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100vw',
    },
   
    title: {
      font: theme.font.title,
      color: theme.color.black,
      textAlign: 'center',
      margin: '0 0 0 0.9rem',
      fontWeight: 'bold',
    },
  
  }));

function SaladToppings() {
    const saladToppings = UseStyles();
    console.log ("saladToppings")

    return (
      <div className={saladToppings.layout}>
        <div className = {saladToppings.title}>
        testestest
        </div>
      </div>
    );

}; 

export default SaladToppings; 