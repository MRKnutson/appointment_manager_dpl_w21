import React, {useEffect, useState} from "react";
import axios from "axios";
import Doctor from "./Doctor";
import DoctorForm from "./DoctorForm";

const Doctors = () => {
  const [doctors, setDoctors] = useState([])

  useEffect(() => {
    console.log("mounted");
    getDoctors();
  },[]);

  const getDoctors = async () => {
    try {
      let response = await axios.get("/api/doctors");
    setDoctors(response.data)
    } catch (error) {
      alert("Error getting doctor data, debug")
    }
  };

  const renderDoctors=()=> {
    if (doctors.length === 0) {
      return <p>No Doctors</p>
    }
    return doctors.map((doctor) => {
      return <Doctor key ={doctor.id}{...doctor}deleteDoctor={deleteDoctor}/>;
    });
  };

  const displayNewDoctor=(doctor)=> {
    setDoctors([doctor,...doctors])
  };

  const deleteDoctor = async (id) => {
    let response = await axios.delete(`/api/doctors/${id}`);
    let filteredDoctors = doctors.filter((doctor) => doctor.id !==id);
    setDoctors(filteredDoctors);
  };

  return (
    <div>
    <h1>Doctors</h1>
    <DoctorForm newestDoctor={displayNewDoctor}/>
    {renderDoctors()}
    </div>
  );
};

export default Doctors;