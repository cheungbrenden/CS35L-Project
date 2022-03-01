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
    const login = UseStyles();
    console.log ("login")

    return (
      <div className={login.layout}>
        <div className = {login.title}>
        The Study at Hedrick
        </div>
      </div>
    );

}; 

export default Home; 