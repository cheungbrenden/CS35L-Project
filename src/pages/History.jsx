import React from 'react';
import { makeStyles } from '@mui/styles';
//import {doc} from "../firebase/config";
import { db, auth } from '../firebase/config';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link,useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {onAuthStateChanged} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";


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
    fontFamily: 'Solway',
    button: {
      textTransform:'none',
    },
  },
  subtitle1:{
    fontFamily: 'Solway',
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

const UseStyles = makeStyles((theme) => ({
    layout: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100vw',
      height: '50rem',
      backgroundImage: "url(/pizza.png)",
      backgroundPosition: 'top',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      verticalAlign: 'top',
    },

    output: {
      font: theme.font.output,
      color: theme.color.black,
      textAlign: 'center',
    },

    title: {
      font: theme.font.title,
      color: theme.color.orange,
      margin: '0 0 0 0 rem',
      marginTop: '2.4rem',
    },

    entree: {
      font: theme.font.output,
      color: theme.color.white, 
      background: theme.color.brown,
      width: '20rem',
      textAlign: 'center',
      padding: '0.5rem',
      margin: '1 rem',
    },

    details: {
      font: theme.font.output,
      color: theme.color.black, 
      background: theme.color.white,
      margin: '1 rem',
      width: '20rem',
      padding: '0.5rem',
      borderColor: theme.color.white,
      border: '0.1rem',
      textAlign: 'center',
    }
  }));

function History() {
    // const [userid, setUserid]  = useState("")
    const history = UseStyles();
    const [users, setUsers] = useState ([]); 
    const userCollectionRef = collection(db, 'Orders'); 
    const [entree, setEntree] = React.useState("");
    const [order, setOrder] = useState('Start')
    const [filtered, setFiltered] = useState ([]);
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //         // User is signed in, see docs for a list of available properties
  //         // https://firebase.google.com/docs/reference/js/firebase.User
  //         const uid = user.uid;
  //         setUserid(uid);

  //     } else {
  //         // User is signed out
  //         // ...
  //     }
  // });
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/home");
  }, [user, loading]);
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs (userCollectionRef);   //return all documents inside of it 
            // console.log (data);
            // setUsers (data.docs.map ((doc) => ({ ...doc.data()}))); 
            // auth();
            // console.log ("userid", userid)

          onAuthStateChanged(auth, (user) => {
              if (user) {
                  const uid = user.uid;
                  console.log (uid)
                  console.log (typeof(uid))
                  // console.log (data)
                  // console.log ("data.docs: " + data.docs)
                  const temp = data.docs.map ((doc) => ({ ...doc.data()}));
                  console.log (temp)
                  // console.log (temp[6].UID)
                  // console.log (typeof (temp[0].UID))
                  const temp2 = temp.filter ((doc) => doc.UID === uid);
                  setUsers (temp2)
                  // const temp = data.docs.filter((doc) => (doc.UID === uid));
                  console.log (temp2)
                  // setUserid(uid);
        
              } else {
                  // User is signed out
                  // ...
              }
          })

            // const temp = data.docs.filter((doc) => doc.uid === uid);
            // setUsers (temp.docs.map ((doc) => ({ ...doc.data()}))); 
            // setUsers (data.docs.filter((doc) => doc.uid === userid));
        };
        getUsers();
    }, [])



    const filter = (event) => {
      console.log ("event", event.target.value)
      setEntree(event.target.value);
      
      if (event.target.value === 'All'){
        setOrder ('Start');
        const asArray = Object.entries (users); 
        setFiltered (asArray);
      }
      
      else {
        setOrder (event.target.value);
        const asArray = Object.entries(users);
        const filtered = asArray.filter(user => (user[1].Entree === event.target.value));
        setFiltered (filtered);
      }
    }

    function usersmap () {
      return (
        <Grid container spacing={2} p = {3}>
          {
            filtered.map ((user) => {
              return (
                 <Grid item spacing = {3}>
                    <div item xs={2}>
                      {print(user)}
                    </div>
                  </Grid>
              );
            }) 
          }
        </Grid>
      )
    }

    function print(array) 
    {
      var str = JSON.stringify(array, null);
      str = str.substring (5)
      str = str.replaceAll('"', '')
      str = str.replaceAll(']', '')
      str = str.replaceAll(':', ': ')
      str = str.replaceAll('{', '')
      str = str.replaceAll('}', '')

      var MyArray = str.split(',');
      MyArray = MyArray.sort();
      
      console.log ("array", MyArray)
      for (var i = 0; i<MyArray.length; i++){
        if (MyArray[i].startsWith('Entree')){
          var foundIdx = i;
        }

        if (MyArray[i].startsWith('UI')){
          var foundUID = i;
        }
      }
      console.log("foundIDx", foundIdx)
      MyArray.unshift(MyArray[foundIdx])
      // console.log ("", MyArray)
      MyArray.splice(foundIdx+1,1)
      MyArray.splice (foundUID,1)

      // MyArray.unshift (MyArray[foundUID])
      // MyArray.splice(foundUID+1,1)

      var details = MyArray.slice(1, MyArray.length)
      console.log ("details", details)

      return (
        <div>
          <div className = {history.entree}> 
            {
              MyArray[0]
            }
          </div>
          <div className = {history.details}>
          {
            details.map((item) => {
            return (<div>{item}</div>);
          })}
          </div>
        </div>
      );
    }
    

    return (
      <div className = {history.layout}>
        <div className = {history.title}>Your past orders! </div>
        {/* <div> User {userid}</div> */}
         <FormControl sx={{ m:3, minWidth: 500 }}>
        <InputLabel id="demo-simple-select">Order </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={entree}
          onChange={filter}
          autoWidth
          label="Hello"
        >
          <MenuItem value={"All"}>All</MenuItem>
          <MenuItem value={"Pizza"}>Pizza</MenuItem>
          <MenuItem value={"Sandwich"}>Sandwich</MenuItem>
          <MenuItem value={"Salad"}>Salad</MenuItem>
          <MenuItem value={"Sausage"}>Sausage</MenuItem>
          <MenuItem value={"European"}>European</MenuItem>
        </Select>
        
      </FormControl>
      {order === 'Start' && (usersmap())}
      {order === 'Pizza' && (usersmap())}
      {order === 'Sandwich' && (usersmap())}
      {order === 'Salad' && (usersmap())}
      {order === 'Sausage' && (usersmap())}
      {order === 'European' && (usersmap())}

      <ThemeProvider theme={studyTheme}>
        <Button 
              variant = "contained" 
              component={Link} to="../Welcome"
            >
        Back to Home
        </Button>    
      </ThemeProvider>
      </div>
    );

}; 

export default History; 