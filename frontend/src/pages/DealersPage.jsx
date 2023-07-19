import React from 'react'
import { styled } from 'styled-components';
import Sidebar from '../components/Sidebar';
import Products from '../components/Products';
import { Heading } from '@chakra-ui/react';

const DealersPage = () => {


  return (
    <DIV>
      
       <div className='div1'>
        <Sidebar/>
        </div>
        <div className='div2'>
        <Products/>
        </div>
    </DIV>
  )
}

export default DealersPage;

const DIV = styled.div`
 width: 85%;
 margin: auto;
    display: flex;
    margin-top: 30px;
  .div1{
    width: 20%;
  }
  .div2{
    width: 80%;
  }
`;