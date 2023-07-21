import React from 'react'
import { styled } from 'styled-components';
import poster from "../assets/header.png"
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import { useSelector } from 'react-redux';
import HCarCard from '../components/HCarCard';
import Footer from '../components/Footer';

const HomePage = () => {

  const [text] = useTypewriter({
    words: ['Find Great Cars', 'Explore Quality Used Cars at Unbeatable Prices',"Discover Reliable Pre-Owned Vehicles Today"," Wide Selection of Pre-Loved Cars Awaits!"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });


  const {cars} = useSelector((store)=> store.CarsReducer)

  return (
    <DIV>
    <div className="poster">
       <div className="inner-text">
          <h1>Find Your <span >Perfect</span> Car</h1>
          <h2  className='typewriter'>{text}<span> <Cursor cursorStyle="🚗" cursorColor='red' /></span></h2>
       </div>
    </div>

    <div className="cars-div">
      <h1>Popular Makes</h1>
      <div className="car-cards">
         {cars?.map((el)=>{
          return <HCarCard key={el.id} {...el}/>
         })}
      </div>
      <button>More...</button>
    </div>


   <Footer/>

    </DIV>
  )
}

export default HomePage;

const DIV = styled.div`

  .poster{
    width: 100%;
   height: 700px;
    margin: auto;
    background-size: cover;
    background-image: url(${poster});
  }
 
  .inner-text{
       padding-top:200px;
    h1{
      color:white;
      font-weight: 700;
      font-size: 5rem;
      span{
        color:red;
      }
    }
    h2{
      color:white;
      font-weight: 700;
      font-size: 2rem;
      color: white;
    }
  }

  .cars-div{
    width: 100%;
    height: 550px;
    padding-top: 30px;
    background-color: #EFF3FA;
    h1{
      text-align: start;
      padding-top: 20px;
      margin-left: 20px;
      font-weight: 700;
    }
  }

  .car-cards{
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;
    margin-top: 50px;
    width: 80%;

  }
  button{
    width: 150px;
    margin: auto;
    padding: 5px;
    background-color: #FF4605;
    color: white;
    border-radius: 0.5rem;
    margin-top: 30px;
    font-size: 20px;
    font-weight: 600;
  }
 
`;
