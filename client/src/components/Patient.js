import React, {useState} from "react";
import PatientForm from "./PatientForm";
import {Button} from 'semantic-ui-react';

const Patient = (props) => {
  const [editToggle, setEditToggle] = useState(false)
  const {id, deletePatient, name, updatePatient} = props

  if (editToggle) {
    return (
    <div>
      <p>Name:{props.name}</p>
      <PatientForm id={id} name={name} updatePatient={updatePatient}/>
      <Button onClick={() => setEditToggle(!editToggle)}>Hide</Button>
      <Button onClick={()=> deletePatient(id)}>Delete</Button>
    </div>
  )} else {
  return(
  <div>
  <p>Name:{props.name}</p>
    <Button onClick={() => setEditToggle(!editToggle)}>Edit</Button>
    <Button onClick={()=> deletePatient(id)}>Delete</Button>
  </div>
)}
};

export default Patient;