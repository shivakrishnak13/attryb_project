import { FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react'
import React from 'react';

const intialstate = {
    title:"",
        description:"",
        image:"",
        kmOnOdometer:"",
        majorScratches:"",
        accidentsReported:"",
        previousBuyers:"",
        registrationPlace:"",
        originalPaint:""
}

const AddCar = () => {


    const handleChange = (e) =>{

    }

  return (
    <div>

<FormControl>
              <FormLabel>Title</FormLabel>
              <Input  placeholder='title' onChange={handleChange} value={car.title} name="title" />
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

    </div>
  )
}

export default AddCar