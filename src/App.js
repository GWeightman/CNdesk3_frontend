import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/login'
import Signup from './components/signup'
import Home from './components/home'
import Contact from './components/contact';
import MainPage from './components/mainPage';
import Admin from './admin_page/Admin'


const App = () => {
  const [username, setUsername] = useState();
  const [fname, setFname] = useState();
  const [sname, setSname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [status, setStatus] = useState();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);
  const [page, setPage] = useState("main");
  const [modalOpen, setModalOpen] = useState(false);
  const [jobs, setJobs] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='login' element={<Login setUsername={setUsername} setPassword={setPassword}/>}/>
          <Route path='signup' element={<Signup username={username} setUsername={setUsername} password={password} setPassword={setPassword} fname={fname} setFname={setFname} sname={sname} setSname={setSname} email={email} setEmail={setEmail}/>}/>
          <Route path='mainpage' element={<MainPage appliedJobs={appliedJobs} setAppliedJobs={setAppliedJobs} savedJobs={savedJobs} setSavedJobs={setSavedJobs} page={page} setPage={setPage} modalOpen={modalOpen} setModalOpen={setModalOpen} jobs={jobs} setJobs={setJobs} />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
