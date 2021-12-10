import React, {useEffect, useState} from "react";
import axios from "axios";
import Patient from "./Patient";
import PatientForm from "./PatientForm";
import useAxiosOnMount from "../hooks/useAxiosOnMount";
import StringifyJson from "./StringifyJson";

const Patients = () => {

  const {data: patients, setData: setPatients, error: error} = useAxiosOnMount('/api/patients')

  const renderPatients=()=> {
    if (!patients) {
      return <p>No Patients</p>
    }
    return patients.map((patient) => {
      return <Patient key ={patient.id}{...patient}deletePatient={deletePatient} updatePatient={updatePatient}/>;
    });
  };

  const displayNewPatient=(patient)=> {
    setPatients([patient,...patients])
  };

  const deletePatient = async (id) => {
    let response = await axios.delete(`/api/patients/${id}`);
    let filteredPatients = patients.filter((patient) => patient.id !==id);
    setPatients(filteredPatients);
  };

  const updatePatient = (changedPatient) => {
    let updatedPatients = patients.map((patient) => (patient.id === changedPatient.id ? changedPatient : patient));
  setPatients(updatedPatients)
  };

  return (
    <div>
    <h1>Patients</h1>
    <PatientForm newestPatient={displayNewPatient}/>
    {patients && renderPatients()}
    {error && <StringifyJson json = {error}/>}
    </div>
  );
};

export default Patients;