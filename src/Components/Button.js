import React from 'react'
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
export default function ButtonComponent(props){
    const myClass = `button ${props.type}`
    const myId = `button ${props.type}`
    return(
    <Button class={props.class}style={
        {maxWidth: '150', maxHeight: '300px', minWidth: '300px', minHeight: '300px'}}
        variant="contained" className={myClass} color={props.color}
        id={myId} onClick={props.handleClick}>{props.children}
    
        </Button>
    )
    }