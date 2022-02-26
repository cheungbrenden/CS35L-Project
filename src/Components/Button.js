import React from 'react'
import Button from '@mui/material/Button';
export default function ButtonComponent(props){
    const myClass = `button ${props.type}`
    const myId = `button ${props.type}`
    return(
    <Button style={
        {maxWidth: '300px', maxHeight: '300px', minWidth: '300px', minHeight: '300px'}}
        variant="contained" className={myClass} 
        id={myId} onClick={props.handleClick}>{props.children}

        </Button>
    )
    }