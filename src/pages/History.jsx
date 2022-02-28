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

// async function getMarker() {
//     const snapshot = await firebase.firestore().collection('Orders').get()
//     return snapshot.docs.map(doc => doc.data());
// }

function History() {
    const history = UseStyles();
    const [users, setUsers] = useState ([]); 
    const userCollectionRef = collection(db, 'orders'); 

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs (userCollectionRef);   //return all documents inside of it 
            console.log (data);
            console.log ("hello"); 
        }
        getUsers();
    }, [userCollectionRef])
    // console.log (firebase)
    // const ref = firebase.firestore().collection('Orders');
  //  console.log(ref);

    return (
      <div className={history.layout}>
        <div className = {history.title}>
        {/* {getMarker()} */}
        Your past orders!
        </div>
      </div>
    );

}; 

export default History; 