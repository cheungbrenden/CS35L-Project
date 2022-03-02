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
      width: '100rem',
     height: '8.5rem',
    },
  
  }));

function Home() {
    const home = UseStyles();
    console.log ("home")

    return (
      <div className={home.layout}>
        <div className = {home.title}>
        The Study at Hedrick
        </div>
      </div>
    );

}; 

export default Home; 