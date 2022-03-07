import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, logout, db } from "../firebase/config";
import {onAuthStateChanged} from "firebase/auth";
import { collection, addDoc, getDocs, query, orderBy } from "firebase/firestore";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [userid, setUserid] = useState("");
  const [drinks, setDrinks] = useState([]);
  const getDrinks = async () => {
    try{
      const drinksArr = [];
      const q = query(collection(db, "Drinks"), orderBy("Name"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        drinksArr.push(doc.data());
      });
      setDrinks([...drinksArr]);
    } catch (error) {
      console.log(error);
    }
  }  
// {/* //   const fetchUserName = async () => { */}
// //     try {
// //       const q = query(collection(db, "users"), where("uid", "==", user?.uid));
// //       const doc = await getDocs(q);
// //       const data = doc.docs[0].data();
// //       setName(data.name);
// //     } catch (err) {
// //       console.error(err);
// //       alert("An error occured while fetching user data");
// //     }
// //   };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/home");
    getDrinks();
  }, [user, loading]);
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
  return (
    <div>
        <div>
        Logged in as {drinks.Nutrition}
         <button onClick={logout}>
          Logout
         </button>
       </div>
    </div>
  );
}
export default Dashboard;