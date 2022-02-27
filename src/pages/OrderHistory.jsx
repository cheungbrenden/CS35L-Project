import React from 'react';
import { makeStyles } from '@mui/styles';
import ButtonComponent from '../Components/Button';

// import Image from '../../Components/Image/Image'
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
      width: '100rem',
     height: '8.5rem',
    },
  
  }));
  // need to add backend config to get specific button data
  function OrderHistory() {
    const orderhist = UseStyles();
    console.log ("order history")

    return (
      <div className={orderhist.layout}>
        <div className = {orderhist.title}>
        Order History
        <div>
            <ButtonComponent></ButtonComponent>
            <ButtonComponent></ButtonComponent>
        </div>
        </div>
      </div>
    );

}; 
export default OrderHistory; 