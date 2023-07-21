import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteCar, editCar } from "../redux/ProductReducer/action";
import Modal from "react-modal";
import { BsX } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";

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
  };

  const [car, setCarDetails] = useState(intialstate);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  // const toast = useToast()

  const handleChange = (event) => {
    setCarDetails({ ...car, [event.target.name]: event.target.value });
  };

  const handleUpdate = () => {
    dispatch(editCar(car, _id)).then(() => {
      setIsEditOpen(false);
     
    });
  };

  const handleDelete = () => {
    dispatch(deleteCar(_id)).then(() => {
      setIsDeleteOpen(false);
      
    });
  };

  return (
    <CarCardContainer>
      <CarImage src={image} alt="img" />
      <div className="title">
        <h3>{title}</h3>
        <p>{description}</p>
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
{/* 
      <div className="btns">
        <Button backgroundColor={"purple"} onClick={() => setIsEditOpen(true)}>
          Edit
        </Button>
        <Button backgroundColor={"red"} onClick={() => setIsDeleteOpen(true)}>
          Delete
        </Button>
      </div> */}

      {/* Edit Modal */}
      {/* <StyledModal
        isOpen={isEditOpen}
        onRequestClose={() => setIsEditOpen(false)}
      >
        <ModalHeader>Edit Car Details</ModalHeader>
        <ModalCloseButton onClick={() => setIsEditOpen(false)} />
        <ModalBody>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              placeholder="title"
              onChange={handleChange}
              value={car.title}
              name="title"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Textarea
              placeholder="Description"
              onChange={handleChange}
              value={car.description}
              name="description"
            />
          </FormControl> */}

          {/* Rest of the form controls */}
          {/* ... */}
        {/* </ModalBody>

        <ModalFooter>
          <Button
            backgroundColor={"blue"}
            mr={3}
            onClick={handleUpdate}
            disabled={isLoading}
          >
            {isLoading ? (
              <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="md" />
            ) : (
              "Submit"
            )}
          </Button>
          <Button onClick={() => setIsEditOpen(false)}>Cancel</Button>
        </ModalFooter>
      </StyledModal> */}

      {/* Delete Modal */}
      {/* <AlertDialog
        isOpen={isDeleteOpen}
        leastDestructiveRef={cancelRef}
        onClose={() => setIsDeleteOpen(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Car
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={() => setIsDeleteOpen(false)}>
                Cancel
              </Button>
              <Button
                backgroundColor={"red"}
                onClick={handleDelete}
                ml={3}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="md" />
                ) : (
                  "Delete"
                )}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog> */}
    </CarCardContainer>
  );
};

export default CarCard;

const CarCardContainer = styled.div`
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
    }
  }

  .car-inventory {
    padding-left: 15px;
    margin-top: 15px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;

    div {
      background-color: #fafa;
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
`;

const StyledModal = styled(Modal)`
  .ModalContent {
    width: 400px;
    margin: auto;
    border-radius: 0.6rem;
    background-color: white;
    padding: 15px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  }

  .ModalHeader {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
  }

  .ModalCloseButton {
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
    color: #b5b5b5;
    font-size: 18px;
  }

  .ModalBody {
    padding: 0 10px;

    label {
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 5px;
    }

    input,
    textarea,
    select {
      width: 100%;
      padding: 8px;
      font-size: 14px;
      border: 1px solid #b5b5b5;
      border-radius: 4px;
      margin-bottom: 10px;
    }
  }

  .ModalFooter {
    text-align: center;
    margin-top: 20px;

    button {
      padding: 10px 20px;
      font-size: 14px;
      border-radius: 4px;
      cursor: pointer;
      color: white;
      transition: background-color 0.2s ease-in-out;

      &:hover {
        background-color: #2d66da;
      }

      &:not(:first-child) {
        margin-left: 10px;
      }
    }
  }
`;

const CarImage = styled.img`
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
