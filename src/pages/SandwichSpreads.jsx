import React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import PublicIcon from '@mui/icons-material/Public';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { db } from '../firebase/config';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { collection, getDocs, query, orderBy, doc, setDoc } from 'firebase/firestore';
import { orderRefID } from './StartOrder';

const UseStyles = makeStyles((theme) => ({
  layout: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100vw',
    height: '100vw',
    backgroundColor: '#FDF9F9',
  },
  
  title: {
    font: 'normal 500 4.5rem/4.5rem "Solway"',
    color: '#F4A950',
    textAlign: 'center',
    margin: '3rem 0 2rem 0',
    fontWeight: 'bold',
    width: '100rem',
    height: '6rem',
  },
  
  }));

const studyTheme = createTheme({
  palette: {
    primary: {
      main: '#594A47',
      contrastText: '#fff',
    },
    low: {
      main: '#0f9600',
    },
    high: {
      main: '#bf0404',
    },
    background: {
      default: '#F1ECEC',
    }
  },
  typography: {
    fontFamily: 'Solway',
    fontSize: 12,
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
          minWidth: '250px', 
          maxHeight: '35px',
          minHeight: '35px',
        },
      }, 
    }, 
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#fff',
          '&.Mui-checked': {
            color: '#fff',
          },
          transform: "scale(0.85)",
        }
      }
    }
  },
});

function SandwichSpreads() {
  const style = UseStyles();
  const [ingredients, setIngredients] = useState([]);
  console.log ("sandwichSpreads")

  const getIngredients = async () => {
    try{
      const ingredientsArr = [];
      const q = query(collection(db, "Spreads"), orderBy("Name"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        ingredientsArr.push(doc.data());
      });
      setIngredients([...ingredientsArr]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getIngredients();
    console.log("test")
  }, []);

  var options = [] //array of names
  {ingredients.map ((ingredients) => {
    options.push(ingredients.Name);
  })}

  const [ checkedBoxes, setCheckedBoxes ] = React.useState([])
  
  const onChange = (name, e) => {
    const isChecked = e.target.checked
    if (isChecked) {
      console.log(checkedBoxes)
      setCheckedBoxes(checkedBoxes.concat(name))
      console.log(checkedBoxes)
    } else {
      setCheckedBoxes(checkedBoxes.filter(x => x !== name))
    }
  }

  function postToDB(toppingsArray) {
    for (let i = 0; i <= 1; i++) {
      if (toppingsArray[i] === undefined) {
        toppingsArray[i] = 'N/A';
      }
    }
    setDoc(doc(db, 'Orders', orderRefID), {'Spread 1': checkedBoxes[0], 'Spread 2': checkedBoxes[1]},  {merge: true})
  }

  return (
    <div className={style.layout}>
      <div className = {style.title}>
      Sandwich Spreads & Condiments 
      </div>
      <ThemeProvider theme={studyTheme}>
        <Stack spacing={1}>
          {ingredients.map ((ingredients) => {
            if (ingredients.Footprint === 'low'){
              return(
                <Button 
                  variant = "contained" 
                  endIcon={<PublicIcon color = 'low'/>}
                >
                  <FormGroup>
                    <FormControlLabel 
                    control = {<Checkbox 
                      size = "small"
                      onChange={onChange.bind(ingredients.Name, ingredients.Name)}
                      />} 
                    label = {ingredients.Name} />
                  </FormGroup>
                </Button>
              )
            }
            else if (ingredients.Footprint == 'high'){
              return(
                <Button 
                  variant = "contained" 
                  endIcon={<PublicIcon color = 'high'/>}
                >
                  <FormGroup>
                    <FormControlLabel 
                    control = {<Checkbox 
                      size = "small"
                      onChange={onChange.bind(ingredients.Name, ingredients.Name)}
                      />} 
                      label = {ingredients.Name} />
                  </FormGroup>
                </Button>
              )
            }
            else {
              return(
                <Button 
                  variant = "contained" 
                >
                  <FormGroup>
                    <FormControlLabel 
                    control = {<Checkbox 
                      size = "small"
                      onChange={onChange.bind(ingredients.Name, ingredients.Name)}
                    />} 
                      label = {ingredients.Name} />
                  </FormGroup>
                </Button>
              )
            }
        })}
        <Stack spacing={5}>
          <Button 
            variant = "contained" 
            component={Link} to="../PostOrder"
            disabled = {checkedBoxes.length > 2}
            onClick={e => postToDB(checkedBoxes)}
          >
            Place Order (Pick up to 2 Spreads)
          </Button>
          <Button 
            variant = "contained" 
            component={Link} to="../SandwichAddOns"
          >
            Back
          </Button>
        </Stack>
      </Stack>
    </ThemeProvider>
    </div>

  );
}; 

export default SandwichSpreads; 