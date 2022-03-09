import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, logout, db } from "../firebase/config";
import {onAuthStateChanged} from "firebase/auth";
import { collection, addDoc, getDocs, query,where } from "firebase/firestore";
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import PublicIcon from '@mui/icons-material/Public';

const UseStyles = makeStyles((theme) => ({
  layout: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100vw',
    },
   
    title: {
      font: 'normal 500 4.5rem/4.5rem "Solway"',
      color: '#F4A950',
      textAlign: 'center',
      margin: '5rem 0 2rem 0',
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

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [userid, setUserid] = useState("");
  const [orders, setOrders] = useState([]);
  const getFavOrders = async () => {
    try{
      const orderArr = [];
      const q = query(collection(db, "Orders"), where("Favorite", "==", userid));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        orderArr.push(doc.data());
      });
      setOrders([...orderArr]);
    } catch (error) {
      console.log(error);
    }
  }
  // const fetchUserName = async () => {    
  //   try {
  //     const q = query(collection(db, "users"), where("uid", "==", user?.uid));
  //     const doc = await getDocs(q);
  //     const data = doc.docs[0].data();
  //     setName(data.name);
  //   } catch (err) {
  //     console.error(err);
  //     alert("An error occured while fetching user data");
  //   }
  // };
  useEffect(() => {
    adduserid();
    getFavOrders();
    if (loading) return;
    if (!user) return navigate("/home");
  }, [user,loading]);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      setUserid(uid);
      
    } else {
      // User is signed out
      // ...
    }
  }); 
  const adduserid  = async () =>{
    try {
      const docRef = await addDoc(collection(db, "Users"), {
        UserID: userid
      });
    
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const dashboard = UseStyles();
  console.log ("dashboard")
  return (
    <div className={dashboard.layout}>
      <div className = {dashboard.title}> 
      <ThemeProvider theme={studyTheme}>
        {orders.map ((orders) => {
          return(
          <Button variant = "contained">
            {orders.Name}
          </Button>)
        })}
         <Button onClick={logout}
         variant = "contained">
          Logout 
         </Button>
         </ThemeProvider>
       </div>
    </div>
  );
}
export default Dashboard;