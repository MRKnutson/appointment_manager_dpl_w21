import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, Form} from 'semantic-ui-react';

const PatientForm = (props) => {
  const {id, newestPatient, updatePatient, name} = props
  const [nameState, setNameState] = useState("");

  useEffect(()=> {
    getPatient()
  },[]);

  const getPatient = async () => {
    if (id) {
      setNameState(name);
    }
    else{
      setNameState("")
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPatient = {name:nameState};

    if (id) {
      let response = await axios.put (`/api/patients/${id}`, newPatient);
      updatePatient(response.data);
    }
    else{
    let response = await axios.post("/api/patients", newPatient);
    newestPatient(response.data)
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

export default PatientForm;