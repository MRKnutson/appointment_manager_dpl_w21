import React, {useState} from "react";
import axios from "axios";
import {Button, Form} from 'semantic-ui-react';

const DoctorForm = (props) => {
  const {newestDoctor} = props
  const [nameState, setNameState] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDoctor = {name:nameState};
    let response = await axios.post("/api/doctors", newDoctor);
    newestDoctor(response.data)
  };

  return(
   <Form onSubmit={handleSubmit}style={{padding:"25px"}}>
     <Form.Field>
       <label>Name</label>
       <input placeholder='Name'value={nameState} onChange = {(e)=>setNameState(e.target.value)}/>
     </Form.Field>
     <Button type='submit'>Submit</Button>
   </Form>
  )
};

export default DoctorForm;