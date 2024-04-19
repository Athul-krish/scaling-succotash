import { Button, TextField ,Typography,setInput } from '@mui/material'
import React, { useState } from 'react'

const First = () => {
    var [data,setInput]=useState();
    var[text,setText]=useState();
    const inputHandler =(e)=>{
        setInput(e.target.value)
    }
    const btnClicked=()=>{
        setText(data)
    }
  return (
    <div style={{margin:'10%'}}>
        <Typography variant='h3'>{text}</Typography>
        <TextField variant='outlined' label='Name' onChange={inputHandler}/><br />
        <br />
      <Button variant='outlined'  color='warning' onClick={btnClicked} >Click</Button>
    </div>
  )
}

export default First
