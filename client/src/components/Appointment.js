import React from 'react';
import moment from 'moment';
import {Button} from 'semantic-ui-react';
import AppointmentForm from './AppointmentForm';

const Appointment = (props) => {
  const {id, deleteAppointment, updateAppointment} = props
  


  return(
    <div style={{border: "1px solid black", margin: '5px'}}>
      <h3>ID: {id}</h3>
      <h3>Dr: {props.doctor}</h3>
      <h3>Patient: {props.patient}</h3>
      <h3>Appointment: {moment(`${props.session}`).format('MMMM Do YYYY, h:mm:ss a')}</h3>
      <AppointmentForm id={id} session={props.session} updateAppointment={updateAppointment}/>
      <Button onClick={()=> deleteAppointment(id)}>Delete</Button>
    </div>
  );
};

export default Appointment;