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

function Sides() {
    const sides = UseStyles();
    console.log ("sides")

    return (
      <div className={sides.layout}>
        <div className = {sides.title}>
        Hello
        </div>
      </div>
    );

}; 

export default Sides; 