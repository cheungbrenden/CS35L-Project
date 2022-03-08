import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
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
    },

    subtitle: {
      font: theme.font.subtitle,
      color: theme.color.black,
      textAlign: 'center',
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
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
      if (loading) {
        // maybe trigger a loading screen
        return;
      }
      if (user) navigate("/dashboard");
    },[user, loading]);
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
        type="text"
        className="login__textBox"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail Address"
       ></input>
       <p>Password</p>
       <input 
        type="password"
        className="login__textBox"
        value={password}
         onChange={(e) => setPassword(e.target.value)}
         placeholder="Password">
       </input>
       <button onClick={() =>logInWithEmailAndPassword(email, password)}>Sign In
       </button>
      </div>
    );

}; 

export default Login; 