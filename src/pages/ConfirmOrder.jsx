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
      marginTop: '20.4rem',
      fontWeight: 'bold',
    },
  
  }));

function ConfirmOrder() {
    const order = UseStyles();
    console.log ("sides")

    return (
      <div className={order.layout}>
        <div className = {order.title}>
        Your order will be ready soon!
        </div>
      </div>
    );

}; 

export default ConfirmOrder; 