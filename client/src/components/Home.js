
import { Tab, Tabs} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import React from "react";

import Books from "./Book/Books";
import Header from "./Header/header";

const Home = () => {
    const [value, setValue] = useState();
  return (
    <div className="container">
        <Header/>
        <div classNmae="title">
            <h1>BlogApp</h1>
            <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Create Blog" /> </Tabs>
          
        </div>
        <div ></div>
        <div className="add">
        <Tab LinkComponent={NavLink} to="/home" label="Home" /> 
        </div>
      <Books/>
    </div>
    
  );
};

export default Home;