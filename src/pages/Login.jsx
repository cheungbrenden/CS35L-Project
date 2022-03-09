import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import PublicIcon from '@mui/icons-material/Public';

const UseStyles = makeStyles((theme) => ({
  layout: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100vw',
    height: '100vw',
    backgroundImage: "url(/Bread.png)",
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
  textFields:{
    position:'relative',
    width: '50rem',
    top:'100px',
  },
  button:{
    position: 'relative',
    left: '250px',
    top:'100px',
  },
    title: {
      position:'relative',
      top: '100px',
      font: theme.font.title,
      fontSize: '150px',
      color: theme.color.orange,
      textAlign: 'center',
      margin: '0 0 0 0.9rem',
      marginTop: '50px',
      width: '100rem',
     height: '8.5rem',
    },

    subtitle: {
      position:'relative',
      top:'100px',
      font: theme.font.subtitle,
      color: theme.color.black,
      textAlign: 'center',
      margin: '0 0 0 0.9rem',
      fontWeight: 'medium',
      width: '50rem',
     height: '4rem',
    },
  
  }));

  const studyTheme = createTheme({
    palette: {
      primary: {
        main: '#594A47',
        contrastText: '#fff',
      },
      secondary: {
        main: '#0f9600',
      },
      warning: {
        main: '#bf0404',
      },
      background: {
        default: '#F1ECEC',
      }
    },
    typography: {
      button: {
        fontFamily: 'Solway',
        fontSize: '30px',
        textTransform:'none',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        }, 
      }, 
    },
  });

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
      if (user) navigate("/StartOrder");
    },[user, loading]);
    return (
      <div className={login.layout}>
        <div className = {login.title}>
        One Step Away
        </div>
        <div className = {login.subtitle}>
        Just kidding... you don't have to line up anymore! 
        </div>
        <ThemeProvider theme={studyTheme}>
       <p className={login.subtitle}>Email</p>
       <Input
        type="text"
        className={login.textFields}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail Address"
       ></Input>
       <p className={login.subtitle}>Password</p>
       <Stack spacing={5}>
       <Input 
       className={login.textFields}
        type="password"
        value={password}
         onChange={(e) => setPassword(e.target.value)}
         placeholder="Password">
       </Input>
       <Button style={{maxWidth: '300px', maxHeight: '75px', minWidth: '300px', minHeight: '75px'}} onClick={() =>logInWithEmailAndPassword(email, password)}
       variant = "contained" className={login.button}>
         Sign In
       </Button>
       </Stack>
       </ThemeProvider>
      </div>
    );

}; 

export default Login; 