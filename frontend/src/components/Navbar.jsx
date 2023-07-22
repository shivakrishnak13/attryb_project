import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { styled } from "styled-components";
import logo from "../assets/CarTrade.svg";
import { Link, useNavigate } from "react-router-dom";
import { BiSolidUser } from "react-icons/bi";
import { GrFormAdd } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { LOGOUT } from "../redux/AuthReducer/actionType";

const Navbar = () => {
  const nav = useNavigate();
  const { isdealerauth,isauth,username } = useSelector((store) => store.AuthReducer);
  const isDealerAuth = useSelector((store) => !!store.AuthReducer.isdealerauth);
  const isAuthenticated = useSelector((store) => !!store.AuthReducer.isauth);
  const dispatch = useDispatch()
  function navigateAddPage() {
    if (isdealerauth) {
      nav("/add-car");
    } else {
      toast.info("Unauthorized access Please login as Dealer!", {
        position: "top-center",
        autoClose: 3000,
      });
      nav("/login");
    }
  }

  const handleLogout = () =>{
    dispatch({type:LOGOUT})
    toast.success("Logged out successfull", {
      position: "top-center",
      autoClose: 3000,
    });
    localStorage.removeItem('token');
    nav("/")
  }

  return (
    <DIV >
      <div className="main-div">
        <div className="img-div" onClick={() => nav("/")}>
          <img src={logo} alt="logo" />
        </div>

        <div className="links">
          <Link to={"/"}>Home</Link>
          <Link to={"/users-car"}>Cars</Link>
          <Link>About</Link>
          <Link>Contact</Link>
          {isdealerauth? <Link to="/dealers" >Dealers</Link>:""}
        </div>
        <div className="btn-div" style={{width: (isauth || isdealerauth)? "25%" : "20%"}}>
          {isdealerauth && isauth  ? (
            <div className="login" style={{width:"250px"}} >
              <BiSolidUser />
              <Link>Hello, Dealer</Link>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : isauth?
          <div className="login" style={{width:"250px"}} >
              <BiSolidUser />
              <Link>Hello, {username}</Link>
              <button onClick={handleLogout}>Logout</button>
            </div>
          
          :
           (
            <div className="login">
              <BiSolidUser />
              <Link to="/login">Login</Link>
              <span>|</span>
              <Link to="/register">Register</Link>
            </div>
          )}
          <button onClick={navigateAddPage} className="addBtn btn">
            <GrFormAdd style={{ color: "teal", width: "20px" }} />
            <Link>Add Car</Link>
          </button>
        </div>
      </div>
    </DIV>
  );
};

export default Navbar;

const DIV = styled.div`
  width: 100%;
  height: 75px;
  background-color: white;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 12;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  a {
    text-decoration: none;
    color: black;
    font-weight: 300;
    letter-spacing: 0.5px;
  }
  .main-div {
    display: flex;
    height: 75px;
    justify-content: space-between;
    align-items: center;
  }

  .img-div {
    margin-left: 30px;
    width: 100px;
    height: 30px;
    cursor: pointer;

    img {
      height: 30px;
      width: 100px;

      position: relative;
      bottom: 5px;
    }
  }

  .links {
    width: 23%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .btn-div {
    width:  20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 30px;
  }

  .login {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 150px;
    
    button {
      background-color: #2ecc71;
      color: #fff;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  }
  .addBtn {
    display: flex;
    align-items: center;
    border: 1px solid teal;
    border-radius: 0.5rem;
    padding: 10px;
    color: teal;
  }
  .addbtn:hover {
    background-color: teal;
    color: white;
  }
`;
