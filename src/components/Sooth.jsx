import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useState } from 'react'

const Sooth = () => {
    var[input,setInputs]= useState([]);
    var[text,setText]=useState([]);

    const addHandler=()=>{
        console.log("clicked");
        setText((data)=>[...text,input]);
        console.log(text);
    }
    const inputHandle=(e)=>{
        setInputs({...input,[e.target.name]:e.target.value});
        console.log(input);
    }
  return (
    <div style={{margin:'10%'}}>
      <TextField variant='outlined' label='name' name="sname" onChange={inputHandle}>Name</TextField> &nbsp;
      <TextField variant='outlined' label='place'name="splace" onChange={inputHandle}></TextField><br/><br/>
      <TextField variant='outlined' label='age' name="sage" onChange={inputHandle}></TextField> &nbsp;
      <TextField variant='outlined' label='Phone No' name="phone" onChange={inputHandle}></TextField><br /><br />
      <Button size='large' variant='contained' onClick={addHandler}>Submit</Button><br /><br /><br /><br />
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell style={{color:"purple" ,fontStyle:"oblique"}}>Name</TableCell>
                    <TableCell style={{color:"purple" ,fontStyle:"oblique"}}>Place</TableCell>
                    <TableCell style={{color:"purple" ,fontStyle:"oblique"}}>Age</TableCell>
                    <TableCell style={{color:"purple" ,fontStyle:"oblique"}}>Phone No</TableCell>
                </TableRow>
            </TableHead>
        <TableBody>
            {text.map((val,i)=>{
                return(
                    <TableRow key={i}>
                        <TableCell>{val.sname}</TableCell>
                        <TableCell>{val.splace}</TableCell>
                        <TableCell>{val.sage}</TableCell>
                        <TableCell>{val.phone}</TableCell>
                    </TableRow>
                )
            })}
        </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Sooth
