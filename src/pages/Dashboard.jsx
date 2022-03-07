import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, logout } from "../firebase/config";
import {onAuthStateChanged} from "firebase/auth";


function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [userid, setUserid] = useState("");
//   const fetchUserName = async () => {
//     try {
//       const q = query(collection(db, "users"), where("uid", "==", user?.uid));
//       const doc = await getDocs(q);
//       const data = doc.docs[0].data();
//       setName(data.name);
//     } catch (err) {
//       console.error(err);
//       alert("An error occured while fetching user data");
//     }
//   };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");
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
  return (
    <div>
         <div>
        Logged in as {userid}
         <button onClick={logout}>
          Logout
         </button>
       </div>
    </div>
  );
}
export default Dashboard;