import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, logout } from "../firebase/config";


function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
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
  return (
    <div>
         <div>
        Logged in as
         <button onClick={logout}>
          Logout
         </button>
       </div>
    </div>
  );
}
export default Dashboard;