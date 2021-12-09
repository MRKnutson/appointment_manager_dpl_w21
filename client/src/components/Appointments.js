import axios from "axios";
import React, { useEffect, useState } from "react";
import Appointment from "./Appointment";

const Appointments = () => {
  const [appointmentsState, setAppointmentsState] = useState([]);

  useEffect(()=>{
    getData();
  }, []);

  const getData = async () => {
    try {
      let response = await axios.get(`/api/appointments`)
      setAppointmentsState(response.data)
    } catch (err) {
      alert("error getting appointments: debug")
    }
  };

  const renderAppointments=()=>{
    console.log(appointmentsState)
    return appointmentsState.map((appointment)=>{
      return <Appointment {...appointment}/>
      
    });
  };

  return (
    <div>
      <h1>Appointments</h1>
      {renderAppointments()}
    </div>
  );
};

export default Appointments;