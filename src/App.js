import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/login'
import Signup from './components/signup'
import Home from './components/home'
import Contact from './components/contact';
import MainPage from './components/mainPage';
import AboutMe from './components/aboutMe';
import Admin from './components/admin';
import FindUser from './components/findUser';
import ListedJobs from './components/listedJobs'; 
import Create from './components/createNewJob';
import JobPosts from './components/jobPosts';
import Notauth from './components/notauth';
import UserName from './components/userName';

const App = () => {
  const [username, setUsername] = useState();
  const [fname, setFname] = useState();
  const [sname, setSname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);
  const [page, setPage] = useState("main");
  const [modalOpen, setModalOpen] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [textarea, setTextarea] = useState("About me");
  const [clientname, setClientName] = useState();
  const [description, setDescription] = useState();
  const [salary, setSalary] = useState();
  const [phonenumber, setPhoneNumber] = useState();
  const [clientemail, setclientEmail] = useState();
  const [language, setLanguage] = useState();
  const [admin, setAdmin] = useState([]);
  const [dev, setDev] = useState([])
  const [destination, setDestination] = useState()
  const [logged, setLogged] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='login' element={<Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} fname={fname} setFname={setFname} destination={destination} setDestination={setDestination} logged={logged} setLogged={setLogged} setSname={setSname} />}/>
          <Route path='signup' element={<Signup username={username} setUsername={setUsername} password={password} setPassword={setPassword} fname={fname} setFname={setFname} sname={sname} setSname={setSname} email={email} setEmail={setEmail} destination={destination} setDestination={setDestination} logged={logged} setLogged={setLogged}/>}/>
          <Route path='mainpage' element={<MainPage appliedJobs={appliedJobs} setAppliedJobs={setAppliedJobs} savedJobs={savedJobs} setSavedJobs={setSavedJobs} page={page} setPage={setPage} modalOpen={modalOpen} setModalOpen={setModalOpen} jobs={jobs} setJobs={setJobs} fname={fname} sname={sname} username={username}/>}/>
          <Route path='aboutme' element={<AboutMe textarea={textarea} setTextarea={setTextarea} />}/>
          <Route path="create" element={<Create clientname={clientname} setClientName={setClientName} description={description} setDescription={setDescription} salary={salary} setSalary={setSalary} phonenumber={phonenumber} setPhoneNumber={setPhoneNumber} clientemail={clientemail} setclientEmail={setclientEmail} language={language} setLanguage={setLanguage}/>}/>
          <Route path="list" element={<ListedJobs clientname={clientname} description={description} salary={salary} phonenumber={phonenumber} clientemail={clientemail} jobs={jobs} setJobs={setJobs}/>}/> 
          <Route path="find" element={<FindUser username={username} setUsername={setUsername} admin={admin} setAdmin={setAdmin} dev={dev} setDev = {setDev} />}/>
          <Route path='admin' element={<Admin jobs={jobs} setJobs={setJobs} fname={fname} setFname={setFname} sname={sname} setSname={setSname}/>}/> 
          <Route path='notauth' element={<Notauth/>}/>
          <Route path="jobposts" element = {<JobPosts appliedJobs={appliedJobs} setAppliedJobs={setAppliedJobs} savedJobs={savedJobs} setSavedJobs={setSavedJobs} username={username} modalOpen={modalOpen} setModalOpen={setModalOpen} jobs={jobs} setJobs={setJobs} fname={fname} sname={sname} username={username}/>}/>
          <Route path="userName" element = {<UserName username={username} setUsername={setUsername}/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
