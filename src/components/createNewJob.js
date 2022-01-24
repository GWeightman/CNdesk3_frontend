
import React from 'react';
import { createNewJobFetch } from "../utilities/fetches";

const Create = ({clientname, setClientName, description, setDescription, salary, setSalary, phonenumber, setPhoneNumber, clientemail, setclientEmail}) =>{

  const createJobHandler = async (e) => {
    e.preventDefault();
    await createNewJobFetch(clientname, description, salary, phonenumber, clientemail)
  }
  const handleSubmit = event => {
    event.preventDefault();
    alert('You have submitted the form.')
  }   
        return(
            <div>
                <h1 className="header">Create a new job</h1>  
            <form onSubmit={createJobHandler}>
                  <p>Client name</p>
                  <input onChange = {(e) => setClientName(e.target.value)} placeholder = 'clientname' />
                  <p>Description</p>
                  <input onChange = {(e) => setDescription(e.target.value)} placeholder = 'description' />
                  <p>Salary</p>
                  <input onChange = {(e) => setSalary(e.target.value)} placeholder = 'salary' />
                  <p>Number</p>
                  <input onChange = {(e) => setPhoneNumber(e.target.value)} placeholder = 'phonenumber' />
                  <p>Email</p>
                  <input onChange = {(e) => setclientEmail(e.target.value)} placeholder = 'email' />
                  //language
              <button onClick={handleSubmit} type="submit">Submit</button>
            </form>
          </div>
        )
}


export default Create;
