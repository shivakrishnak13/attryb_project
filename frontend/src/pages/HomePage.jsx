import React from 'react'
import { styled } from 'styled-components';
import poster from "../assets/header.png"
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import { useSelector } from 'react-redux';
import HCarCard from '../components/HCarCard';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const HomePage = () => {
  const navigate = useNavigate();
  const {isauth} = useSelector((store)=> store.AuthReducer)
  const [text] = useTypewriter({
    words: ['Find Great Cars', 'Explore Quality Used Cars at Unbeatable Prices',"Discover Reliable Pre-Owned Vehicles Today"," Wide Selection of Pre-Loved Cars Awaits!"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  

  const carListings = [
    {
      accidentsReported: 0,
      createdAt: "2023-07-19T03:59:30.145Z",
      description: "This Honda Accord LX is a reliable sedan with excellent fuel efficiency.",
      image: "https://fastly-production.24c.in/hello-ar/dev/uploads/4d347f85-f897-4a30-b4cf-f50b8106a1d8/f08c39a6-3002-4c64-ae3a-d2e1debf04c7/44.jpg?w=690&auto=format",
      kmOnOdometer: 41000,
      majorScratches: "None",
      
      originalPaint: "Yes",
      previousBuyers: 1,
      price: 300000,
      registrationPlace: "Karnataka",
      title: "2020 Honda Accord",
      updatedAt: "2023-07-22T07:00:54.676Z",
      _id: "64b75fa2f9c84e61866877d1"
    },
    {
      accidentsReported: 1,
      createdAt: "2023-07-19T16:47:51.087Z",
      description: "Good Condition",
      image: "https://fastly-production.24c.in/hello-ar/dev/uploads/64b52425bdf72cb9a4c96605/a9c74c97-0813-40dc-9ac8-12fa68f324b1/slot/14412117747-c92ec0b13cdb494c949806f594d5de6a-Exterior-8.jpg?w=690&auto=format",
      kmOnOdometer: 36000,
      majorScratches: "2",
     
      originalPaint: "Yes",
      previousBuyers: 0,
      price: 320000,
      registrationPlace: "Delhi",
      title: "Honda Activa 5G",
      updatedAt: "2023-07-22T06:40:33.603Z",
      _id: "64b813b60b331b615558b856"
    },
    {
      accidentsReported: 1,
      createdAt: "2023-07-19T16:47:51.087Z",
      description: "Good Condition",
      image: "https://images10.gaadi.com/usedcar_image/3510693/original/usedcar_1_729861689933021_1689933031.jpg?imwidth=640",
      kmOnOdometer: 32000,
      majorScratches: "0",
     
      originalPaint: "Yes",
      previousBuyers: 0,
      price: 200000,
      registrationPlace: "Hyderbad",
      title: "2014 Maruti Wagon R LXI CNG",
      updatedAt: "2023-07-21T13:30:16.175Z",
      _id: "64baa1b22fd71ad44aaa63d8"
    },
    {
      accidentsReported: 1,
      createdAt: "2023-07-19T16:47:51.087Z",
      description: "Good Condition",
      image: "https://fastly-production.24c.in/hello-ar/dev/uploads/23149658-60e5-494d-8c8b-d625e02f4676/a8cfcfd6-b14e-428f-8bc5-b1a4a8c1ef94/42.jpg?w=690&auto=format",
      kmOnOdometer: 32000,
      majorScratches: "0",
  
      originalPaint: "Yes",
      previousBuyers: 0,
      price: 220000,
      registrationPlace: "Hyderbad",
      title: "2013 Hyundai i10",
      updatedAt: "2023-07-21T13:30:16.175Z",
      _id: "6d8"
    }
  ];
  

  const handleNavigate = ()=>{
      if(isauth){
        navigate("/users-car")
      }else{
        toast.info(
          'Please login to view your car details',{
            position:"top-center",
            autoClose: 4000,
          })
        navigate("/login")
      }
  }
  

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
         {carListings?.map((el)=>{
          return <HCarCard key={el._id} {...el}/>
         })}
      </div>
      <button onClick={handleNavigate}>More...</button>
    </div>



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
      margin-left:70px;
      font-weight: 700;
    }
  }

  .car-cards{
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center; 
    width: 90%;
    margin:auto;
    margin-top: 50px;
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
