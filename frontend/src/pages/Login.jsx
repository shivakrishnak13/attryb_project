import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { fetchLogin } from "../redux/AuthReducer/action";

const intialstate = {
  email: "",
  password: "",
};

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [credentail, setcredentail] = useState(intialstate);
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.AuthReducer);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setcredentail({ ...credentail, [name]: value });
  };

  const handleLogin = () => {
   dispatch(fetchLogin(credentail));
  };

  return (
    <DIV>
      <Heading>Please Login</Heading>
      <div className="loginform">
        <Box>
          <Input
            placeholder="Enter your Email"
            type="email"
            mt={"10px"}
            name="email"
            onChange={handleChange}
          />
          <InputGroup size="md" mt={"10px"}>
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              name="password"
              onChange={handleChange}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button colorScheme={"teal"} mt={"10px"}   onClick={handleLogin}>
            {isLoading? "Loading..." : "Login"}
          </Button>
        </Box>
      </div>
    </DIV>
  );
};

export default Login;

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
