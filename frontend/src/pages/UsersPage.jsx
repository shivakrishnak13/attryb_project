import React from 'react'
import Sidebar from '../components/Sidebar';
import { styled } from 'styled-components';
import UserProducts from '../components/UserProductList';

const UsersPage = () => {


  return( <DIV>
     
       <div className='div1'>
        <Sidebar/>
        </div>
        <div className='div2'>
        <UserProducts/>
        </div>

    </DIV>)
  
}

export default UsersPage;

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