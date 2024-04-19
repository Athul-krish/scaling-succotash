import { Table ,TableBody ,TableCell ,TableContainer ,TableHead, TableRow } from "@mui/material";
import React from 'react'


const Third = () => {
  var data =[ {name:"Athul",age:21,place:"chalakudy"},
              {name:"Sameo",age:26,place:"Uganda"}];
return (
  <div>
    <TableContainer>
          <Table>
              <TableHead> 
                  <TableRow>
                      <TableCell><u>Name</u></TableCell>
                      <TableCell><u>Age</u></TableCell>
                      <TableCell><u>Place</u></TableCell>
                  </TableRow>
              </TableHead>


              <TableBody>
                      {data.map((val,i)=>{
                          return <TableRow key={i}>
                              <TableCell>{val.name}</TableCell>
                              <TableCell>{val.age}</TableCell>
                              <TableCell>{val.place}</TableCell>
                          </TableRow>
                      })}
              </TableBody>
          </Table>
    </TableContainer>
  </div>
)
}

export default Third
