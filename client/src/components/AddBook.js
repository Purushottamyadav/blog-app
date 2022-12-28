import {
    Button,
    FormLabel,
    TextField,
    Tab,
    Tabs
    
  } from "@mui/material";
  import { Box } from "@mui/system";
  import axios from "axios";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { NavLink } from "react-router-dom";
  
  const AddBlog = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
      tittle:"",
      image:"",
      description:"",
    });
  
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
      // console.log(e.target.name, "Value", e.target.value);
    };
  
    const sendRequest = async () => {
      await axios
        .post("http://localhost:3002/blogs", {
          tittle:String(inputs.tittle),
          image:String(inputs.image),
          description:String(inputs.description),
        })
        .then((res) => res.data);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
     
      sendRequest().then(() => history("/blogs"));
    };
  
    return (

        <div className="container">
            <Tabs><Tab LinkComponent={NavLink} to="/blogs" label="Create Blog" /></Tabs>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          maxWidth={700}
          alignContent={"center"}
          alignSelf="center"
          marginLeft={"auto"}
          marginRight="auto"
          marginTop={10}
        >
          <FormLabel>Tittle</FormLabel>
          <TextField
            value={inputs.tittle}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="tittle"
            required
          />
          <FormLabel>Image URL</FormLabel>
          <TextField
            value={inputs.image}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="image"
            required
          />
          <FormLabel>Description</FormLabel>
          <TextField
            value={inputs.description}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="description"
            required
          />
          <Button variant="contained" type="submit">
            Save Post
          </Button>
        </Box>
      </form>
      </div>
    );
  };
  
  export default AddBlog;