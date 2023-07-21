import { Box, Button, Heading, Input, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { fetchregister } from '../redux/AuthReducer/action';
import { useNavigate } from 'react-router-dom';

const intialstate = {
    email: "",
    name:"",
    password:""
}

const Register = () => {

  const dispatch = useDispatch()
  const [details,setDetails] = useState(intialstate)
  const [password,setpassord] = useState("")
  const [cpassword,csetpassord] = useState("")
  const toast = useToast();
  const navigate = useNavigate()
  const handleChange = (e) =>{
    const {name,value} = e.target;
    
        setDetails({...details,[name]: value})
    
  };

  const handleLogin = () =>{
     if(password === cpassword){
        dispatch(fetchregister(details)).then(()=>{
            toast({
                title:'Registration Successfull!',
                status:'success',
                isClosable:true
            })
            navigate("/login")
        });
        // console.log('register',details)
     }else{
        alert("Password and Confirm Password should be same")
    }
  }




    return (
        <DIV>
          <Heading>Please Login</Heading>
          <div className="loginform">
            <Box>
              <Input
                placeholder="Enter your Name"
                type="email"
                mt={"10px"}
                name="name"
                onChange={handleChange}
              />
              <Input
                placeholder="Enter your Email"
                type="email"
                mt={"10px"}
                name="email"
                onChange={handleChange}
              />
              <Input
                placeholder="Enter Password"
                type="password"
                mt={"10px"}
                name="password"
                onChange={(e)=>{
                    setpassord(e.target.value);
                    handleChange(e)
                }}
              />
              <Input
                placeholder="Confirm Password"
                type="password"
                mt={"10px"}
                name="password"
                onChange={(e)=>{
                    csetpassord(e.target.value);
                }}
              />
              
              <Button colorScheme='teal' backgroundColor={"teal"} mt={"15px"}  onClick={handleLogin} >
               Register
              </Button>
            </Box>
          </div>
        </DIV>
      );
    };
    
    export default Register;
    
    const DIV = styled.div`
      h2 {
        margin-top: 50px;
      }
      .loginform {
        padding: 30px;
        width: 500px;
        margin: auto;
        margin-top: 30px;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
          rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        border-radius: 1rem;
      }
    `;
    