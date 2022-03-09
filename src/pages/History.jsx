import React from 'react';
import { makeStyles } from '@mui/styles';
//import {doc} from "../firebase/config";
import { db } from '../firebase/config';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';



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
    const history = UseStyles();
    const [users, setUsers] = useState ([]); 
    const userCollectionRef = collection(db, 'Orders'); 
    const [entree, setEntree] = React.useState("");
    const [order, setOrder] = useState('Start')
    const [filtered, setFiltered] = useState ([]);

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs (userCollectionRef);   //return all documents inside of it 
            console.log (data);
            setUsers (data.docs.map ((doc) => ({ ...doc.data()}))); 
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
      }
      console.log("foundIDx", foundIdx)
      MyArray.unshift(MyArray[foundIdx])
      MyArray.splice(foundIdx+1,1)
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
        </Select>
        
      </FormControl>
      {order === 'Start' && (usersmap())}
      {order === 'Pizza' && (usersmap())}
      {order === 'Sandwich' && (usersmap())}
      {order === 'Salad' && (usersmap())}
      {order === 'Sausage' && (usersmap())}

      <ThemeProvider theme={studyTheme}>
        <Button 
              variant = "contained" 
              component={Link} to="../Home"
            >
        Back to Home
        </Button>    
      </ThemeProvider>
      </div>
    );

}; 

export default History; 