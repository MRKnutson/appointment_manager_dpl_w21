import {Link} from "react-router-dom";

const NavBar = () => {
  return(
    <div>
      <Link to='/'>Home</Link>
      <Link to='/doctors'>Doctors</Link>
      <Link to='/patients'>Patients</Link>
      <Link to='/appointments'>Appointments</Link>
    </div>
  );
};

export default NavBar;