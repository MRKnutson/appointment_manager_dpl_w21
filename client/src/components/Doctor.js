import React, {useState} from "react";
import DoctorForm from "./DoctorForm";
import {Button} from 'semantic-ui-react';

const Doctor = (props) => {
  const [editToggle, setEditToggle] = useState(false)
  const {id, deleteDoctor, name, updateDoctor} = props

  if (editToggle) {
    return (
    <div>
      <p>Name:{props.name}</p>
      <DoctorForm id={id} name={name}updateDoctor={updateDoctor}/>
      <Button onClick={() => setEditToggle(!editToggle)}>Hide</Button>
      <Button onClick={()=> deleteDoctor(id)}>Delete</Button>
    </div>
  )} else {
  return(
  <div>
  <p>Name:{props.name}</p>
  <p>ID:{props.id}</p>
    <Button onClick={() => setEditToggle(!editToggle)}>Edit</Button>
    <Button onClick={()=> deleteDoctor(id)}>Delete</Button>
  </div>
)}
};

export default Doctor;