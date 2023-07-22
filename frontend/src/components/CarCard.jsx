import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteCar, editCar } from "../redux/ProductReducer/action";
import Modal from "react-modal";
import { BsX } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import { toast } from "react-toastify";
Modal.setAppElement('#root');





const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    width: '600px',
    height:"800px",
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    transition: 'transform 0.3s ease',
  },
};


const CarCard = ({
  _id,
  accidentsReported,
  description,
  image,
  kmOnOdometer,
  majorScratches,
  title,
  previousBuyers,
  registrationPlace,
  originalPaint,
  price
}) => {
  const { isLoading } = useSelector((store) => store.CarsReducer);
  const dispatch = useDispatch();
  const intialstate = {
    title,
    description,
    image,
    kmOnOdometer,
    majorScratches,
    accidentsReported,
    previousBuyers,
    registrationPlace,
    originalPaint,
    price
  };


  const [editmodalIsOpen, setEditModalIsOpen] = useState(false);

  const openEditModal = () => {
    setEditModalIsOpen(true);
  };

  const closeEditModal = () => {
    setEditModalIsOpen(false);
  };

  const [car, setCarDetails] = useState(intialstate);

  // const toast = useToast()

  const handleChange = (event) => {
    setCarDetails({ ...car, [event.target.name]: event.target.value });
  };

  const handleUpdate = () => {
    dispatch(editCar(car, _id)).then(() => {
      toast.success("Car Details Updated successfully", {
        position: "top-center",
        autoClose: 3000,
      });
      closeEditModal();
    });
  };

  const handleDelete = () => {
    dispatch(deleteCar(_id)).then(() => {
      toast.success("Car Details Deleted successfully", {
        position: "top-center",
        autoClose: 3000,
      });
    });
  };

  
  

  
  
  return (
    <DIV>
      <img className="carImage" src={image} alt="img" />
      <div className="title">
        <h3>{title}</h3>
        
        <p>{description}</p>
        <h2>₹{price}</h2>
      </div>

      <div className="car-inventory">
        <div>
          <span>Accidents Reported</span>
          <p>{accidentsReported}</p>
        </div>
        <div>
          <span>Km On OdoMeter</span>
          <p>{kmOnOdometer}</p>
        </div>
        <div>
          <span>Major Scratches</span>
          <p>{majorScratches}</p>
        </div>
        <div>
          <span>Previous Buyers</span>
          <p>{previousBuyers}</p>
        </div>
        <div>
          <span>Registration Place</span>
          <p>{registrationPlace}</p>
        </div>
        <div>
          <span>Original Paint</span>
          <p>{originalPaint}</p>
        </div>
      </div>

      <div className="btns">
        <button className="editbtn" onClick={openEditModal} >Edit</button>
        <button className="deletebtn" onClick={handleDelete} >Delete</button>
      </div>


      {/* Edit Modal */}

      <Modal
      isOpen={editmodalIsOpen}
      onRequestClose={closeEditModal}
      contentLabel="Edit Modal"
      style={modalStyles}
    >
        
          <ModalContent>
        <CloseButton onClick={closeEditModal}>
          <BsX size={24} />
        </CloseButton>
        <h4 style={{marginTop:'8%'}}><b>EDIT CAR DETAILS
          </b></h4>
        <Form>
          <label>Title</label>
          <input
            type="text"
            placeholder="Title"
            onChange={handleChange}
            value={car.title}
            name="title"
          />

          <label>Description</label>
          <textarea
            placeholder="Description"
            onChange={handleChange}
            value={car.description}
            name="description"
          />

          <label>Image</label>
          <input
            type="text"
            placeholder="Image URL"
            onChange={handleChange}
            value={car.image}
            name="image"
          />

          <label>Km On Odometer</label>
          <input
            type="text"
            placeholder="Km On Odometer"
            onChange={handleChange}
            value={car.kmOnOdometer}
            name="kmOnOdometer"
          />

          <label>Major Scratches</label>
          <input
            type="text"
            placeholder="Major Scratches"
            onChange={handleChange}
            value={car.majorScratches}
            name="majorScratches"
          />

          <label>Accidents Reported</label>
          <input
            type="text"
            placeholder="Accidents Reported"
            onChange={handleChange}
            value={car.accidentsReported}
            name="accidentsReported"
          />

          <label>Previous Buyers</label>
          <input
            type="text"
            placeholder="Previous Buyers"
            onChange={handleChange}
            value={car.previousBuyers}
            name="previousBuyers"
          />


          <label>Price</label>
          <input
            type="number"
            placeholder="Price"
            onChange={handleChange}
            value={car.price}
            name="price"
          />

          <label>Registration Place</label>
          <input
            type="text"
            placeholder="Registration Place"
            onChange={handleChange}
            value={car.registrationPlace}
            name="registrationPlace"
          />

          <label>Original Paint</label>
          <select
            onChange={handleChange}
            value={car.originalPaint}
            name="originalPaint"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </Form>
        <StyledBTN>
          <button onClick={handleUpdate} >
            {isLoading ? "Saving..." : "Save"}
          </button>
          <button onClick={closeEditModal}>Cancel</button>
        </StyledBTN>
      </ModalContent>
    </Modal>
      
    




    </DIV>
  );
};

export default CarCard;

const DIV = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 1rem;

  .title {
    padding-left: 15px;
    margin-top: 15px;

    h3 {
      font-size: 18px;
      font-weight: bold;
      text-align: start;
    }

    p {
      margin-top: 8px;
      font-size: 13px;
      text-align: start;
      height: 40px;
    }
  }

  .car-inventory {
    padding-left: 15px;
    margin-top: 15px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;

    div {
      background-color: #eceff1;
      border-radius: 0.7rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
      padding: 5px;
      margin-right: 10px;
      margin-top: 10px;

      span {
        font-size: 12px;
      }

      p {
        font-size: 16px;
      }
    }
  }

  .btns {
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 20px;
  }
  .carImage {
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .editbtn{
    background-color: #4DB6AC;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .editbtn:hover{
    background-color:#3e9b91 ;
  }

  .deletebtn{
    background-color: #F4511E;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .deletebtn:hover{
    background-color:#d73a2f
  }


  .modal{
     border: 1px solid red;
  }

`;

const ModalContent = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;

  h4 {
    text-align: center;
    margin-top: 10px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    font-weight: bold;
  }

  input,
  textarea,
  select {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  textarea {
    resize: vertical;
  }

  select {
    width: 100%;
  }
`;


const StyledBTN = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  button{
   
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

 button:nth-child(1){
  background-color: #2ecc71;
 }
 button:nth-child(1):hover{
  background-color: #15d665;
 }

 button:nth-child(2){
  background-color: #db5e20;
 }
 button:nth-child(2):hover{
  background-color: #e3723a;
 }

`;