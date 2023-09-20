import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { fetchregister } from "../redux/AuthReducer/action";
import { toast } from "react-toastify";

const initialState = {
  email: "",
  name: "",
  password: "",
};

const Register = () => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState(initialState);
  const [password, setPassord] = useState("");
  const [cpassword, setCPassword] = useState("");
  const navigate = useNavigate();
  const {isLoading,isError} = useSelector((store)=> store.AuthReducer)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleLogin = () => {
    if (password === cpassword) {
      dispatch(fetchregister(details)).then(() => {
        toast.success("Registration Successfull!", {
          position: "top-center",
          autoClose: 3000,
        });
        navigate("/login");
      });
    } else {
      toast.warn("Password and Confirm Password should be same", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  

  return (
    <DIV>
      <h2>Please Register</h2>
      <div className="register-form">
        <div>
          <input
            placeholder="Enter your Name"
            type="text"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            placeholder="Enter your Email"
            type="email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            placeholder="Enter Password"
            type="password"
            name="password"
            onChange={(e) => {
              setPassord(e.target.value);
              handleChange(e);
            }}
          />
        </div>
        <div>
          <input
            placeholder="Confirm Password"
            type="password"
            name="confirmPassword"
            onChange={(e) => {
              setCPassword(e.target.value);
            }}
          />
        </div>
        <button className="register-button" onClick={handleLogin} disabled={isLoading} >
          {isLoading? "Creating Account...":"Register"}
        </button>
      </div>
    </DIV>
  );
};

export default Register;

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
 
  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #333;
    margin-top: 6%;
  }

  .register-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;

    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 500px;
  }

  .register-form input {
    width: 400px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    margin-bottom: 15px;
  }

  .register-form button {
    background-color: teal;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .register-form button:hover {
    background-color: #27ae60;
  }
`;
