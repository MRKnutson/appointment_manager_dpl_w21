import React from 'react'

const Appointment = (props) => {
  
  return(
    <div style={{border: "1px solid black", margin: '5px'}}>
      <h3>Dr: {props.doctor}</h3>
      <h3>Patient: {props.patient}</h3>
      <h3>Appointment: {props.session}</h3>
    </div>
  );
};

export default Appointment;