import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, FormControl, FormLabel, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Spinner, Stat, StatLabel, StatNumber, Text, Textarea, useDisclosure, useToast } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { deleteCar, editCar } from "../redux/ProductReducer/action";

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
  originalPaint
}) => {

    const { isOpen: isEditOpen , onOpen: onEditOpen, onClose: onEditClose } = useDisclosure()
    const { isOpen: isDeleteOpen , onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure()
    const {isLoading} = useSelector((store) => store.CarsReducer);
    const cancelRef = useRef()
    const initialRef = useRef(null)
    const finalRef = useRef(null);
    const dispatch = useDispatch();
    const intialstate ={
        
        title,
        description,
        image,
        kmOnOdometer,
        majorScratches,
        accidentsReported,
        previousBuyers,
        registrationPlace,
        originalPaint
    }

    const toast = useToast()

    const [car,setCarDetails] = useState(intialstate);

    const handleChange = (event) => {
        setCarDetails({...car,[event.target.name]: event.target.value});
    }

    const handleUpdate = () =>{
        dispatch(editCar(car,_id)).then(()=>{
            onEditClose();
            toast({
                title: `"Updated Car Details"`,
                status: "succsess",
                isClosable: true,
              });
        });
    }

    const handleDelete = () =>{
        dispatch(deleteCar(_id)).then(()=>{
            onDeleteClose();
            toast({
                title: `Deleted "${title}"`,
                description:"The car has been deleted from your inventory.",
                status: "error",
                isClosable:true
            })
        })
    }

  return (
    <DIV>
      <div>
        <Image borderTopLeftRadius={"0.8rem"} borderTopRightRadius={"0.8rem"} src={image} alt="img" />
      </div>

      <div className="title">
        <Text fontSize={"18px"} fontWeight={"bold"} textAlign={"start"}>{title}</Text>
        <Text mt={"8px"} fontSize={"13px"} textAlign={"start"}>{description}</Text>
      </div>
     
      <div className="car-inventory">
        <Stat backgroundColor={"#FAFAFA"} borderRadius={"0.7rem"} boxShadow= "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" p={"5px"} mr={"10px"}>
          <StatLabel fontSize={"12px"}>Accidents Reported</StatLabel>
          <StatNumber fontSize={"16px"}>{accidentsReported}</StatNumber>
        </Stat>
        <Stat backgroundColor={"#FAFAFA"} borderRadius={"0.7rem"} boxShadow= "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" p={"5px"} mr={"10px"}>
          <StatLabel fontSize={"12px"}>Km On OdoMeter</StatLabel>
          <StatNumber fontSize={"16px"}>{kmOnOdometer}</StatNumber>
        </Stat>
        <Stat backgroundColor={"#FAFAFA"} borderRadius={"0.7rem"} boxShadow= "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" p={"5px"} mt={"10px"} mr={"10px"}>
          <StatLabel fontSize={"12px"}>Major Scratches</StatLabel>
          <StatNumber fontSize={"16px"}>{majorScratches}</StatNumber>
        </Stat>
        <Stat backgroundColor={"#FAFAFA"} borderRadius={"0.7rem"} boxShadow= "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" p={"5px"} mt={"10px"} mr={"10px"}>
          <StatLabel fontSize={"12px"}>Previous Buyers</StatLabel>
          <StatNumber fontSize={"16px"}>{previousBuyers}</StatNumber>
        </Stat>
        <Stat backgroundColor={"#FAFAFA"} borderRadius={"0.7rem"} boxShadow= "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" p={"5px"} mt={"10px"} mr={"10px"}>
          <StatLabel fontSize={"12px"}>Registration Place</StatLabel>
          <StatNumber fontSize={"16px"}>{registrationPlace}</StatNumber>
        </Stat>
        <Stat backgroundColor={"#FAFAFA"} borderRadius={"0.7rem"} boxShadow= "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" p={"5px"} mt={"10px"} mr={"10px"}>
          <StatLabel fontSize={"12px"}> Original Paint</StatLabel>
          <StatNumber fontSize={"20px"}>{ originalPaint}</StatNumber>
        </Stat>
      </div>

      <div className="btns">
        <Button backgroundColor={"purple"} onClick={onEditOpen}>Edit</Button>
        <Button backgroundColor={"red"} onClick={onDeleteOpen} >Delete</Button>
      </div>
        {/* Edit Modal */}



        <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isEditOpen}
        onClose={onEditClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Car Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input ref={initialRef} placeholder='title' onChange={handleChange} value={car.title} name="title" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea placeholder='Description' onChange={handleChange} value={car.description} name="description" />
            </FormControl>


            <FormControl mt={4}>
              <FormLabel>km On Odometer</FormLabel>
              <Input placeholder='kmOnOdometer' onChange={handleChange} value={car.kmOnOdometer} name="kmOnOdometer" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Major Scratches</FormLabel>
              <Input placeholder='Major Scratches' onChange={handleChange} value={car.majorScratches} name="majorScratches" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Accidents Reported</FormLabel>
              <Input placeholder='Accidents Reported' onChange={handleChange} value={car.accidentsReported} name="accidentsReported" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Previous Buyers</FormLabel>
              <Input placeholder='Previous Buyers' onChange={handleChange} value={car.previousBuyers} name="previousBuyers" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Registration Place</FormLabel>
              <Input placeholder='Registration Place' onChange={handleChange} value={car.registrationPlace} name="registrationPlace" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Original Paint</FormLabel>
             <Select  placeholder='Original Paint' onChange={handleChange} value={car.originalPaint} name="originalPaint">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
             </Select>
            </FormControl>



          </ModalBody>

          <ModalFooter>
            <Button backgroundColor={'blue'} mr={3} onClick={handleUpdate}>
            {!isLoading ? (
            "Submit"
          ) : (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="md"
            />
          )}
            </Button>
            <Button onClick={onEditClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>





       {/* Delete Modal */}
      <AlertDialog
        isOpen={isDeleteOpen}
        leastDestructiveRef={cancelRef}
        onClose={onDeleteClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onDeleteClose}>
                Cancel
              </Button>
              <Button backgroundColor={"red"} onClick={handleDelete} ml={3}>
              {!isLoading ? (
            "Delete"
          ) : (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="md"
            />
          )}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </DIV>
  );
};

export default CarCard;

const DIV = styled.div`
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
border-radius: 1rem;

.title{
    padding-left: 15px;
    margin-top: 15px;
}

.car-inventory{
     padding-left: 15px;
     margin-top: 15px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 5px;
}
.btns{
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 20px;
}

`;
