import { AppBar , Box ,Toolbar,Button ,Typography } from "@mui/material";
import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
          <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" style={{textAlign:"left", fontFamily:"initial"}} component="div" sx={{ flexGrow: 1 }}>
            Login
          </Typography>
          <Button color="info" variant="contained"><Link to={'/'}>Login</Link></Button> &nbsp;
          <Button color="info" variant="contained"><Link to={'/s'}>Help</Link></Button> &nbsp;
          <Button color="info" variant="contained"><Link to={'/t'}>Array</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
