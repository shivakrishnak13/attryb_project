import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Spinner,
  Text,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { addCar } from "../redux/ProductReducer/action";
import { useDispatch, useSelector } from "react-redux";

const intialstate = {
  title: "",
  description: "",
  image: "",
  kmOnOdometer: "",
  majorScratches: "",
  accidentsReported: "",
  previousBuyers: "",
  registrationPlace: "",
  originalPaint: "",
  oemSpecs: "",
};

const AddCar = () => {
  const [car, setData] = useState(intialstate);
  const [search, setsearch] = useState("");
  const [oempsecs, setOemSpecsData] = useState([]);
  const [model, setModel] = useState("");
  const [oemSpecs,setoemSpecs] = useState("")
  const dispatch = useDispatch();
const toast = useToast()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...car, [name]: value });
  };
 const {isLoading} = useSelector((store) => store.CarsReducer)
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (search !== "") {
        axios
          .get(`https://buy-cars.onrender.com/oem/specs?q=${search}`)
          .then((res) => {
            console.log(res.data);
            setOemSpecsData(res.data.specification);
          })
          .catch((err) => console.log(err));
      }
      console.log("Perform search for:", search);
    }, 500);

    return () => {
      clearTimeout(debounceTimer); // Clear the timeout if component unmounts or searchTerm changes
    };
  }, [search]);


  const handleAddCar = () =>{

if(car.oemSpecs !== "" && car.description !== "" && car.image !=="" && car.description!=="" && car.kmOnOdometer!=="" && car.originalPaint!=="" && car.majorScratches!=="" && car.previousBuyers!=="" && car.registrationPlace!=="" ){
    dispatch(addCar(car)).then((res)=>{
      toast({
          title:"Successfully Added",
          status:"succsess",
          duration:3000,
          isClosable:true
      })
    })

}else{
    console.log(oemSpecs)
    console.log(car.oemSpecs)
    toast({
        title:"Please fill all fields",
        status:"warning",
        duration:3000,
        isClosable:true
    })
}

  }

  return (
    <DIV>
      <Heading color={"facebook.200"}>ADD YOUR CAR DETAILS HERE</Heading>
      <div className="form">
        <FormControl>
          <FormLabel>Car Model</FormLabel>
          <Input
            placeholder="Search your car"
            onChange={(e) => setsearch(e.target.value)}
            name="name"
            type="search"
          />
        </FormControl>
        {search === ""  ? (
          ""
        ) : (
          <div className="search-div">
            {oempsecs?.map((el) => {
              return (
                <div
                  key={el._id}
                  className="card"
                  onClick={() => {
                    setModel(`${el.model_name}, ${el.year}, ${el.colors}`);
                    setoemSpecs(el._id);
                    setData( {...car,oemSpecs:el._id});
                    setsearch("")
                  }}
                >
                  <Text textAlign={"start"}>
                    {el.model_name},{el.year},{el.colors}
                  </Text>
                </div>
              );
            })}
          </div>
        )}

        <FormControl>
          <FormLabel>OEM Model</FormLabel>
          <Input
            placeholder="Model"
            onChange={handleChange}
            value={model}
            name="model"
            disabled
          />
        </FormControl>

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
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Image</FormLabel>
          <Input
            placeholder="Image"
            onChange={handleChange}
            value={car.image}
            name="image"
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>km On Odometer</FormLabel>
          <Input
            placeholder="kmOnOdometer"
            onChange={handleChange}
            value={car.kmOnOdometer}
            name="kmOnOdometer"
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Major Scratches</FormLabel>
          <Input
            placeholder="Major Scratches"
            onChange={handleChange}
            value={car.majorScratches}
            name="majorScratches"
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Accidents Reported</FormLabel>
          <Input
            placeholder="Accidents Reported"
            onChange={handleChange}
            value={car.accidentsReported}
            name="accidentsReported"
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Previous Buyers</FormLabel>
          <Input
            placeholder="Previous Buyers"
            onChange={handleChange}
            value={car.previousBuyers}
            name="previousBuyers"
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Registration Place</FormLabel>
          <Input
            placeholder="Registration Place"
            onChange={handleChange}
            value={car.registrationPlace}
            name="registrationPlace"
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Original Paint</FormLabel>
          <Select
            placeholder="Original Paint"
            onChange={handleChange}
            value={car.originalPaint}
            name="originalPaint"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Select>
        </FormControl>

        <Button mt={"20px"} backgroundColor={"green"} onClick={handleAddCar}>
        {!isLoading ? (
            "ADD"
          ) : (
           "Adding..."
            )}
        </Button>
      </div>
    </DIV>
  );
};

export default AddCar;

const DIV = styled.div`
  .form {
    width: 600px;
    margin: auto;
    padding: 20px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    border-radius: 0.6rem;
    margin-top: 30px;
  }

  .search-div {
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    border-radius: 0.6rem;
  }
  .card {
    padding-left: 15px;
    border: 0.5px solid black;
    border-top: none;
    border-left: none;
    border-right: none;
  }
`;
