import React, {useEffect, useState} from "react";
import axios from "axios";
import Patient from "./Patient";
import PatientForm from "./PatientForm";
import useAxiosOnMount from "../hooks/useAxiosOnMount";
import StringifyJson from "./StringifyJson";
import { Dimmer, Image, Loader, Segment } from "semantic-ui-react";
import {Spinner} from "react-bootstrap";
import List from "./List";

const Patients = () => {

  const {data: patients, setData: setPatients, error: error, loading: loading} = useAxiosOnMount('/api/patients')

  const renderPatients=()=> {
    if (!patients) {
      return <p>No Patients</p>
    }
    return (
    <List data={patients} title={"Patients"}
    renderData = {(patient) => {
      return <Patient key ={patient.id}{...patient}deletePatient={deletePatient} updatePatient={updatePatient}/>}}/>);
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

  const loaderTest = () =>{
    return(
      <>
  <Spinner animation="border" variant="primary" />
  <Spinner animation="border" variant="secondary" />
  <Spinner animation="border" variant="success" />
  <Spinner animation="border" variant="danger" />
  <Spinner animation="border" variant="warning" />
  <Spinner animation="border" variant="info" />
  <Spinner animation="border" variant="light" />
  <Spinner animation="border" variant="dark" />
  <Spinner animation="grow" variant="primary" />
  <Spinner animation="grow" variant="secondary" />
  <Spinner animation="grow" variant="success" />
  <Spinner animation="grow" variant="danger" />
  <Spinner animation="grow" variant="warning" />
  <Spinner animation="grow" variant="info" />
  <Spinner animation="grow" variant="light" />
  <Spinner animation="grow" variant="dark" />
  </>
    )
  }
  return (
    <div>
    <h1>Patients</h1>
    {patients && <PatientForm newestPatient={displayNewPatient}/>}
    {loading && loaderTest()}
    {patients && renderPatients()}
    {error && <StringifyJson json = {error}/>}
    </div>
  );
};

export default Patients;