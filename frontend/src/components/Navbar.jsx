import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { styled } from 'styled-components';
import logo from "../assets/CarTrade.svg"
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <DIV>
        <div className='main-div'>
            <div className='img-div'>
                <img src={logo} alt="logo" />
            </div>

            <div className='links'>
                <Link to={"/"}>Home</Link>
                <Link>About</Link>
                <Link>Contact</Link>
            </div>

            <div className='btn-div'>
                <Button colorScheme={"messenger"}>
                    <Link to="/register" >SignUp</Link>
                </Button>
                <Button colorScheme={"whatsapp"}>
                <Link to="/login" >Login</Link>
                </Button>
            </div>

        </div>
    </DIV>
  )
}

export default Navbar;

const DIV = styled.div`
    width: 100%;
    height: 65px;
    background-color: aqua;
    position: static;
    top: 0;
    left: 0;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    .main-div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .img-div{
        margin-left: 30px;
        width: 100px;
        height: 60px;
        
        img{
           height: 80px;
           width: 150px;
           
            position: relative;
            bottom: 5px;
        }
    }

    .links{
        width: 23%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .btn-div{
        width: 15%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-right: 30px;
    }

`