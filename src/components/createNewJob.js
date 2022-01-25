import React from 'react';
import { Link } from 'react-router-dom';
import { createNewJobFetch } from "../utilities/fetches";
import "../styles/createNewJob.css"

const Create = ({clientname, setClientName, description, setDescription, salary, setSalary, phonenumber, setPhoneNumber, clientemail, setclientEmail, language, setLanguage, fname, sname}) =>{

  const createJobHandler = async (e) => {
    e.preventDefault();
    await createNewJobFetch(clientname, description, salary, phonenumber, clientemail, language)
  }

  const returnHandler = () => {
    window.location.href = "/admin"
  }

  const handleSubmit = event => {
    event.preventDefault();
    alert('You have submitted the form.')
  }   
        return(
            <div>
              <div>
                <nav className="navbar">
                <ul>
                    <h1 className="logo">NODE NATION: {fname} {sname} </h1>
                    <a><Link to="/">Logout</Link></a> 
                    <a><Link to="/find">Find a user</Link></a>
                    <a><Link to="/admin">Listed jobs</Link></a>
                    <a><Link to="/create">Create a new Job</Link></a>
                </ul>
                </nav>    
              </div>
              <div className="createForm">
                <h1 className="header">Create a new job</h1>  
                <form onSubmit={createJobHandler}>
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
                  <button className="submit" onClick={handleSubmit} type="submit">Submit</button>
                  </div>
                  <div>
                  <button className="back" onClick={returnHandler}>Go back to homepage</button>
                  </div>
                </form>
              </div>
          </div>
        )
}


export default Create;
