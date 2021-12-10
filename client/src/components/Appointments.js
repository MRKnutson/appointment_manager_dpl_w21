import axios from "axios";
import React, { useEffect, useState } from "react";
import Appointment from "./Appointment";
import AppointmentForm from "./AppointmentForm";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);

  useEffect(()=>{
    getData();
  }, []);

  const getData = async () => {
    try {
      let response = await axios.get(`/api/appointments`)
      let doctorRes = await axios.get(`/api/doctors`)
      let patientRes = await axios.get(`/api/patients`)
      setAppointments(response.data)
      setDoctors(doctorRes.data)
      setPatients(patientRes.data)
    } catch (err) {
      alert("error getting appointments: debug")
    }
  };

  const renderAppointments=()=>{
    if(appointments.length === 0){
      return <p>No Appointments</p>
    }
    return appointments.map((appointment)=>{
      return <Appointment key = {appointment.id}{...appointment} updateAppointment={updateAppointment} deleteAppointment={deleteAppointment} doctors={doctors} patients={patients}/>
      
    });
  };
  const displayNewAppointment = (appointment) => {
    setAppointments([appointment,...appointments])
  };
    
    const deleteAppointment = async(id)=>{
      let response = await axios.delete(`/api/appointments/${id}`);
      let filteredAppointments = appointments.filter((appointment)=>appointment.id !==id);
      setAppointments(filteredAppointments);
    };

    const updateAppointment = (changedAppointment) => {
      let updatedAppointments = appointments.map((appointment)=> (appointment.id === 
        changedAppointment.id ? changedAppointment : appointment));
        setAppointments(updatedAppointments)
    };

  return (
    <div>
      <h1>Appointments</h1>
      <AppointmentForm newestAppointment={displayNewAppointment} patients = {patients} doctors={doctors}/>
      {renderAppointments()}
    </div>
  );
};

export default Appointments;