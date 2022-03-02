import React from 'react';
import { makeStyles } from '@mui/styles';
import { db } from '../firebase/config';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import Checkbox from '@material-ui/core/Checkbox';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import ButtonComponent from '../Components/Button';
import MouseOverPopover from '../Components/PopoverButton';
import { useNavigate } from "react-router-dom";

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
      fontWeight: 'bold',
      width: '100rem',
     height: '8.5rem',
    },
    subtitle : {
      font: theme.font.title,
      color: theme.color.black,
      textAlign: 'left',
      margin: '0 0 0 0.9rem',
      fontWeight: 'medium',
      width: '50rem',
      height: '4rem',
    },
  
  }));
  
  function Sausage() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = `newPath`; //change to correct path
    navigate(path);
  }
    const sausage = UseStyles();
    const [sausages, setSausages] = useState ([]);
    const sausageCollectionRef = collection(db, 'Sausage');
    useEffect(() => {
             const getSausages = async () => {
                const data = await getDocs (sausageCollectionRef);   //return all documents inside of it 
                 console.log (data);
                setSausages (data.docs.map ((doc) => ({ ...doc.data()}))); 
             };
             getSausages();
         }, [])

         const [drinks, setDrinks] = useState ([]);
         const drinksCollectionRef = collection(db, 'Drinks');
         useEffect(() => {
                  const getDrinks = async () => {
                     const data = await getDocs (drinksCollectionRef);   //return all documents inside of it 
                      console.log (data);
                     setDrinks (data.docs.map ((doc) => ({ ...doc.data()}))); 
                  };
                  getDrinks();
              }, [])

        const [sides, setSides] = useState ([]);
         const sidesCollectionRef = collection(db, 'Sides');
         useEffect(() => {
                  const getSides = async () => {
                     const data = await getDocs (sidesCollectionRef);   //return all documents inside of it 
                      console.log (data);
                     setSides (data.docs.map ((doc) => ({ ...doc.data()}))); 
                  };
                  getSides();
              }, [])


    return (
      <div className={sausage.layout}>
        <div className = {sausage.title}>
        Craft-Your-Own Sausage
        </div>
        <div className={sausage.subtitle}>
          <div><h2> Sausage: </h2>
        {sausages.map ((sausage) => {
           return (
             <div>
<MouseOverPopover label={sausage.Nutrition}>{sausage.Name}
<Checkbox icon={<CircleUnchecked />}checkedIcon={<CircleCheckedFilled />}/>
</MouseOverPopover>
             </div>
           );
         })}</div>
          </div>

          <div className={sausage.subtitle}>
          <div><h2> Drink: </h2>
        {drinks.map ((drink) => {
           return (
             <div>
<MouseOverPopover label={drink.Nutrition}>{drink.Name} 
<Checkbox icon={<CircleUnchecked />}checkedIcon={<CircleCheckedFilled />}/>
</MouseOverPopover>
             </div>
           );
         })}</div>
          </div>

          <div className={sausage.subtitle}>
          <div><h2> Side: </h2>
        {sides.map ((side) => {
           return (
             <div>
<MouseOverPopover label={side.Nutrition}>{side.Name} 
<Checkbox icon={<CircleUnchecked />}checkedIcon={<CircleCheckedFilled />}/>
</MouseOverPopover>
             </div>
           );
         })}</div>
          </div>
            <ButtonComponent handleClick={routeChange}>Place Order</ButtonComponent>
      </div>
    );

}; 
export default Sausage; 
// function History() {
//   const history = UseStyles();
//   const [users, setUsers] = useState ([]); 
//   const userCollectionRef = collection(db, 'Orders'); 

//   useEffect(() => {
//       const getUsers = async () => {
//           const data = await getDocs (userCollectionRef);   //return all documents inside of it 
//           console.log (data);
//           setUsers (data.docs.map ((doc) => ({ ...doc.data()}))); 
//       };
//       getUsers();
//   }, [])

//   return (
//     <div className={history.layout}>
//       Your past orders!
//         {users.map ((user) => {
//           return (
//             <div>
//               <h1> Entree: {user.Entree} </h1>
//             </div>
//           );
//         })}
//     </div>
//   );

// }; 

// export default History; 