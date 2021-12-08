import React from "react";
import DoctorForm from "./DoctorForm";
import {Button} from 'semantic-ui-react';



const Doctor = (props) => {
  const {id, deleteDoctor, name, updateDoctor} = props
return (
  <div>
    <p>Name:{props.name}</p>
    <DoctorForm id={id} name={name}updateDoctor={updateDoctor}/>
    <Button onClick={()=> deleteDoctor(id)}>Delete</Button>
  </div>
);
};

export default Doctor;