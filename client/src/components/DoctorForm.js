import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, Form} from 'semantic-ui-react';

const DoctorForm = (props) => {
  const {id, newestDoctor, updateDoctor} = props
  const [nameState, setNameState] = useState("");

  useEffect(()=> {
    getDoctor()
  },[]);

  const getDoctor = async () => {
    if (id) {
      let doctor_res = await axios.get (`/api/doctors/${id}`);
      setNameState(doctor_res.data.name);
    }
    else{
      setNameState("")
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDoctor = {name:nameState};

    if (id) {
      let response = await axios.put (`/api/doctors/${id}`, newDoctor);
      updateDoctor(response.data);
    }
    else{
    let response = await axios.post("/api/doctors", newDoctor);
    newestDoctor(response.data)
    }
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