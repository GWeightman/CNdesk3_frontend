import React from 'react';
import { Link, Navigate, NavLink } from 'react-router-dom';
import { createNewJobFetch } from "../utilities/fetches";
import "../styles/createNewJob.css"
import "../styles/findUser.css"

const Create = ({clientname, setClientName, description, setDescription, salary, setSalary, phonenumber, setPhoneNumber, clientemail, setclientEmail, language, setLanguage, fname, sname}) =>{

  const createJobHandler = async (e) => {
    e.preventDefault();
    await createNewJobFetch(clientname, description, salary, phonenumber, clientemail, language)
    alert('You have submitted the form.')
  }

  const returnHandler = () => {
    window.location.href = "/admin"
  }

  return(
      <div>
        <div>
          <nav className="navbar">
              <h1 className="adminLogo">NODE NATION: {fname} {sname} </h1>
              <li><NavLink to="/" className="navButton">Logout</NavLink></li> 
              <li><NavLink to="/find" className="navButton">Find a user</NavLink></li>
              <li><NavLink to="/admin" className="navButton">Listed jobs</NavLink></li>
              <li><NavLink to="/create" className="navButton">Create a new Job</NavLink></li>
          </nav>
        </div>
        <div className="createForm">
          <h1 className="pageTitle">Create a new job</h1>  
          <form>
            <p>Client name</p>
            <input onChange = {(e) => setClientName(e.target.value)} placeholder = 'clientname' />
            <p>Number</p>
            <input onChange = {(e) => setPhoneNumber(e.target.value)} placeholder = 'phonenumber' />
            <p>Email</p>
            <input onChange = {(e) => setclientEmail(e.target.value)} placeholder = 'email' />
            <p>Language</p>
            <input onChange = {(e) => setLanguage(e.target.value)} placeholder = 'language' />
            <p>Salary</p>
            <input onChange = {(e) => setSalary(e.target.value)} placeholder = 'salary' />
            <p>Job description</p>
            <input onChange = {(e) => setDescription(e.target.value)} placeholder = 'description' />
            <div>
            <button className="submit" onClick={createJobHandler} type="submit">Submit</button>
            </div>
          </form>
          <div>
            <NavLink to="/admin" className="back">Go back to homepage</NavLink>
          </div>
        </div>
    </div>
  )
}

export default Create;