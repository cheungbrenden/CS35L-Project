import React from 'react';
import { makeStyles } from '@mui/styles';
//import {doc} from "../firebase/config";
import { db } from '../firebase/config';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';

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
      marginTop: '20.4rem',
      fontWeight: 'bold',
    },
  
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

    return (
      <div className={history.layout}>
        Your past orders!
          {users.map ((user) => {
            return (
              <div>
                <h1> Entree: {user.Entree} </h1>
              </div>
            );
          })}
      </div>
    );

}; 

export default History; 