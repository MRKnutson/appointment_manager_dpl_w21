import React from "react";



const Doctor = (props) => {
  const {id, deleteDoctor, name} = props
return (
  <div>
    <p>Name:{props.name}</p>
    <button onClick={()=> deleteDoctor(id)}>Delete</button>
  </div>
);
};

export default Doctor;