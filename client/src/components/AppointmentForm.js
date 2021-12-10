import React, {useState} from "react";
import axios from "axios";
import {Button, Form} from 'semantic-ui-react'
import moment from "moment";

const AppointmentForm = (props) => {
  const {id,newestAppointment, updateAppointment, doctors, patients, session, doctor_id, patient_id} = props
  const [sessionState, setSessionState] = useState(session ? session : "");
  const [doctor_idState, setDoctor_idState] = useState(doctor_id ? doctor_id : "");
  const [patient_idState, setPatient_idState] = useState(id ? patient_id : "");

  const handleSubmit = async(e) => {
    console.log(sessionState);
    e.preventDefault();
    const newAppointment = {doctor_id:doctor_idState, patient_id:patient_idState, session:moment(sessionState).local()};
    
    if (id) {
      let response = await axios.put(`/api/appointments/${id}`, newAppointment);
      let doctor = doctors.find((d)=>d.id===response.data.doctor_id)
      let patient = patients.find((p)=>p.id===response.data.patient_id)
      updateAppointment({doctor: doctor.name, patient: patient.name, ...response.data});
    }
    else { 
      let response = await axios.post("/api/appointments", newAppointment);
      let doctor = doctors.find((d)=>d.id===response.data.doctor_id)
      let patient = patients.find((p)=>p.id===response.data.patient_id)
      console.log(doctor)
      newestAppointment({doctor: doctor.name, patient: patient.name, ...response.data})
      console.log( response.data)
    }
  };

  const normalizeDoctors = ()=>{
    return doctors.map((doctor)=>{
      return {key: doctor.id, value: doctor.id, text: doctor.name}
    });
  };

  const normalizePatients= ()=>{
    return patients.map((patient)=>{
      return {key: patient.id, value: patient.id, text: patient.name}
    });
  };

  return(
    <Form onSubmit={handleSubmit} style={{padding:"25px"}}>
      <Form.Field>
        <label>Patient</label>
        <Form.Select options={normalizePatients()} value = {patient_idState} onChange={(e, {value})=>setPatient_idState(value)}/>
        {/* <input placeholder='Patient' value={patient_idState} 
        onChange = {(e)=>setPatient_idState(e.target.value)}/> */}
      </Form.Field>
      <Form.Field>
        <label>Doctor</label>
        {/* <input placeholder='Doctor' value={doctor_idState} 
        onChange = {(e)=>setDoctor_idState(e.target.value)}/> */}
        <Form.Select options={normalizeDoctors()} value = {doctor_idState} onChange={(e, {value})=>setDoctor_idState(value)}/>
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