import React, {useState} from "react";
import axios from "axios";
import {Button, Form} from 'semantic-ui-react'
import moment from "moment";

const AppointmentForm = (props) => {
  const {id,newestAppointment, updateAppointment} = props
  const [sessionState, setSessionState] = useState("");
  const [doctor_idState, setDoctor_idState] = useState("");
  const [patient_idState, setPatient_idState] = useState("");

  const handleSubmit = async(e) => {
    console.log(sessionState);
    e.preventDefault();
    const newAppointment = {doctor_id:doctor_idState, patient_id:patient_idState, session:moment(sessionState).utc()};
    
    if (id) {
      let response = await axios.put(`/api/doctors/${id}`, newAppointment);
      updateAppointment(response.data);
    }
    else { 
    let response = await axios.post("/api/appointments", newAppointment);
    newestAppointment(response.data)
  }
  console.log()
  };

  return(
    <Form onSubmit={handleSubmit} style={{padding:"25px"}}>
      <Form.Field>
        <label>Patient</label>
        <input placeholder='Patient' value={patient_idState} 
        onChange = {(e)=>setPatient_idState(e.target.value)}/>
      </Form.Field>
      <Form.Field>
        <label>Doctor</label>
        <input placeholder='Doctor' value={doctor_idState} 
        onChange = {(e)=>setDoctor_idState(e.target.value)}/>
      </Form.Field>
      <Form.Field>
        <label>Session</label>
        <input type="datetime-local" placeholder='Session' value={sessionState} 
        onChange = {(e)=>setSessionState((e.target.value))}/>
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  );
};

export default AppointmentForm;