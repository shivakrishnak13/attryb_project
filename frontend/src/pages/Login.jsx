import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { fetchLogin } from "../redux/AuthReducer/action";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast styles

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
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setcredentail({ ...credentail, [name]: value });
  };

  const handleLogin = () => {
    dispatch(fetchLogin(credentail)).then(() => {
      toast.success("Logged in successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/dealers");
    });
  };

  return (
    <StyledDiv>
      <h2>Please Login</h2>
      <div className="loginform">
        <div>
          <input
            placeholder="Enter your Email"
            type="email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <input
            type={show ? "text" : "password"}
            placeholder="Enter password"
            name="password"
            onChange={handleChange}
          />
          <div className="input-right-element">
            <button onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <button className="button" onClick={handleLogin}>
          {isLoading ? "Loading..." : "Login"}
        </button>
      </div>
      <ToastContainer /> {/* Add ToastContainer at the root level */}
    </StyledDiv>
  );
};

export default Login;

const StyledDiv = styled.div`
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
  .loginform {
    margin-top: 10px;
  }
  .input-group {
    margin-top: 10px;
  }
  .input-group input {
    padding-right: 4.5rem;
  }
  .input-group button {
    height: 1.75rem;
  }
  .button {
    margin-top: 10px;
    background-color: teal;
  }
`;
