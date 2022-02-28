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
      color: theme.color.orange,
      textAlign: 'center',
      margin: '0 0 0 0.9rem',
      fontWeight: 'bold',
      width: '100rem',
     height: '8.5rem',

    subtitle: {
      font: theme.font.title,
      color: theme.color.black,
      textAlign: 'left',
      margin: '0 0 0 0.9rem',
      fontWeight: 'medium',
      width: '50rem',
     height: '4rem',
    }
    },
  
  }));

function Login() {
    const login = UseStyles();
    console.log ("login")

    return (
      <div className={login.layout}>
        <div className = {login.title}>
        One Step Away
        </div>
        <div className = {login.subtitle}>
        Just kidding... you don't have to line up anymore! 
        </div>
        <div className = {login.subtitle}>
        Email
        </div>
        <div className = {login.subtitle}>
        Password
        </div>
       <p>Email</p>
       <input></input>
       <p>Password</p>
       <input></input>
       <button>Sign In</button>
      </div>
    );

}; 

export default Login; 