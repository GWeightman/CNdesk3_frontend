
import React from 'react';
import { createNewJobFetch } from "../utilities/fetches";

const Create = ({clientname, setClientName, description, setDescription, salary, setSalary, phonenumber, setPhoneNumber, email, setEmail}) =>{

  const createJobHandler = async (e) => {
    e.preventDefault();
    await createNewJobFetch(clientname, description, salary, phonenumber, email)
  }
  const handleSubmit = event => {
    event.preventDefault();
    alert('You have submitted the form.')
  }
<<<<<<< HEAD
=======

import React, {useState} from 'react';
import { createNewJobFetch } from "../utilities/fetches";

const Create = ({clientname, description, salary, phonenumber, email}) =>{
  const [clientname, setClientName] = useState();
  const [description, setDescription] = useState();
  const [salary, setSalary] = useState();
  const [phonenumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();

  const createJobHandler = async (e) => {
    e.preventDefault();
    await createNewJobFetch(clientname, description, salary, phonenumber, email)
}
        const handleSubmit = event => {
         event.preventDefault();
         alert('You have submitted the form.')
       }

>>>>>>> 515fc8632a9175f9554f037a5e789d8971f9956e
      
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
                  <input onChange = {(e) => setEmail(e.target.value)} placeholder = 'email' />
              <button onClick={handleSubmit} type="submit">Submit</button>
            </form>
          </div>
        )
}


export default Create;