import React from 'react';
import { makeStyles } from '@mui/styles';
import { Link, useNavigate } from "react-router-dom";

const UseStyles = makeStyles((theme) => ({
    layout: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100vw',
    },
   
    title: {
      font: theme.font.title,
      color: theme.color.orange,
      textAlign: 'center',
      margin: '0 0 0 0.9rem',
      fontWeight: 'bold',
      width: '100rem',
     height: '8.5rem',
    },

    subtitle: {
      font: theme.font.subtitle,
      color: theme.color.black,
      textAlign: 'center',
      margin: '0 0 0 0.9rem',
      fontWeight: 'medium',
      width: '50rem',
     height: '4rem',
    }
  
  
  }));

function Home() {
    const home = UseStyles();
    console.log ("home")
    const navigate = useNavigate(); 
    return (
      <div className={home.layout}>
        <div className = {home.title}>
        The Study
        </div>
        <div className = {home.subtitle}>
        at Hedrick
        </div>
        <button onClick={() => navigate("/login")}>get in line
       </button>
      </div>
    );

}; 

export default Home; 