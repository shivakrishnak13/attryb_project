import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { styled } from "styled-components";
import logo from "../assets/CarTrade.svg";
import { Link, useNavigate } from "react-router-dom";
import { BiSolidUser } from "react-icons/bi";
import { GrFormAdd } from "react-icons/gr";

const Navbar = () => {
    const nav = useNavigate();
  return (
    <DIV>
      <div className="main-div">
        <div className="img-div" onClick={()=> nav("/")}>
          <img src={logo} alt="logo" />
        </div>

        <div className="links">
          <Link to={"/"}>Home</Link>
          <Link to={"/dealers"}>Cars</Link>
          <Link>About</Link>
          <Link>Contact</Link>
        </div>

        <div className="btn-div">
          <div className="login">
            <BiSolidUser />
            <a href="/login">Login</a>
            <span>|</span>
            <a href="/register">Register</a>
          </div>
          <button className="addBtn btn">
            <GrFormAdd style={{color:"teal",width:"20px"}} />
            <a href="/add-car">Add Car</a>
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

  a{
    text-decoration:none;
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
    width: 20%;
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
  }
  .addBtn {
    display: flex;
    align-items: center;
    border: 1px solid teal;
    border-radius: 0.5rem;
    padding: 10px;
    color: teal;
  }
  .addbtn:hover{
    background-color: teal;
    color: white;
  }
`;
