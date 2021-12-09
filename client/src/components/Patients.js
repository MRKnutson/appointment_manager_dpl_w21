import React, {useEffect, useState} from "react";
import axios from "axios";
import Patient from "./Patient";
import PatientForm from "./PatientForm";

const Patients = () => {
  const [patients, setPatients] = useState([])

  useEffect(() => {
    console.log("mounted");
    getPatients();
  },[]);

  const getPatients = async () => {
    try {
      let response = await axios.get("/api/patients");
    setPatients(response.data)
    } catch (error) {
      alert("Error getting patient data, debug")
    }
  };

  const renderPatients=()=> {
    if (patients.length === 0) {
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
    {renderPatients()}
    </div>
  );
};

export default Patients;