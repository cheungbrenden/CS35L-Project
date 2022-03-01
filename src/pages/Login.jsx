import React from 'react';
import { makeStyles } from '@mui/styles';
import {auth} from "../firebase/config";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
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
    },

    subtitle: {
      font: theme.font.subtitle,
      color: theme.color.black,
      textAlign: 'left',
      margin: '0 0 0 0.9rem',
      fontWeight: 'medium',
      width: '50rem',
     height: '4rem',
    }
  
  }));

function Login() {
    const login = UseStyles();
    console.log ("login")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const signIn = () => {
      signInWithEmailAndPassword(email, password);
      navigate("/home");
    };
    return (
      <div className={login.layout}>
        <div className = {login.title}>
        One Step Away
        </div>
        <div className = {login.subtitle}>
        Just kidding... you don't have to line up anymore! 
        </div>
       <p>Email</p>
       <input
       value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}></input>
       <p>Password</p>
       <input 
       value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}></input>
       <button onClick={signIn}>Sign In
       </button>
      </div>
    );

}; 

export default Login; 