import React from 'react';
import { makeStyles } from '@mui/styles';
//import {doc} from "../firebase/config";
import { db } from '../firebase/config';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const UseStyles = makeStyles((theme) => ({
    layout: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100vw',
    },

    output: {
      font: theme.font.output,
      color: theme.color.black,
      textAlign: 'center',
    },

    title: {
      font: theme.font.title,
      color: theme.color.black,
      margin: '0 0 0 0 rem',
      marginTop: '2.4rem',
    },

    entree: {
      font: theme.font.output,
      color: theme.color.white, 
      background: theme.color.brown,
      textAlign: 'center',
      padding: '0.5rem',
      margin: '1 rem',
    },

    details: {
      font: theme.font.output,
      color: theme.color.black, 
      background: theme.color.background,
      margin: '1 rem',
      width: '20rem',
      padding: '0.3rem',
      borderColor: theme.color.black,
      border: '0.1rem',
      textAlign: 'center',
    }
  }));

function History() {
    const history = UseStyles();
    const [users, setUsers] = useState ([]); 
    const userCollectionRef = collection(db, 'Orders'); 

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs (userCollectionRef);   //return all documents inside of it 
            console.log (data);
            setUsers (data.docs.map ((doc) => ({ ...doc.data()}))); 
        };
        getUsers();
    }, [])
  

    function print(array) 
    {
      var str = JSON.stringify(array, null);
      console.log (str)
      str = str.replaceAll('"', '')
      str = str.replaceAll(':', ': ')
      str = str.replaceAll('{', '')
      str = str.replaceAll('}', '')

      var MyArray = str.split(',');
      MyArray = MyArray.sort();
      
      // const foundIdx = MyArray.findIndex();

      // const foundIdx = MyArray.findIndex(el => el === (MyArray[el].startswith('Entree')))
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
        <div className = {history.output}>
          <div className = {history.entree}> 
            {
              MyArray[0]
            }
          </div>
          <div>
          {
            details.map((item) => {
            return (<div className = {history.details}>{item}</div>);
          })}
          </div>
        </div>
      );
    }

    function usersmap (){
      users.map ((user) => {
        return (
          <div className = {history.details}>
           {print(user)}
          </div>
        );
      })
    }
    return (
      
      <div className = {history.layout}>
        <div className = {history.title}>Your past orders! </div>
        <FormControl sx={{ minWidth: 500 }}>
          <InputLabel id="demo-simple-select" sx={{ minWidth: 70}}>Entree</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            // value={age}
            // onChange={handleChange}
            autoWidth
            label="Hello"
          >
            <MenuItem>Pizza</MenuItem>
            <MenuItem>Sandwich</MenuItem>
          </Select>
        </FormControl>

        {usersmap()}
      </div>
    );

}; 

export default History; 