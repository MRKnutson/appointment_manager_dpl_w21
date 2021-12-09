import './App.css';
import { Routes, Route } from 'react-router';
import Doctors from './components/Doctors';
import Patients from './components/Patients';
import Appointments from './components/Appointments';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
    <Routes>
      <Route path="/"element={<Home />}/>
      <Route path="/doctors"element={<Doctors />}/>
      <Route path="/patients"element={<Patients />}/>
      <Route path="/appointments"element={<Appointments />}/>
    </Routes>
    </div>
  );
}

export default App;
