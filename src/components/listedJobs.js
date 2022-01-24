import react, { useEffect, useState } from "react";
import { listedJobsFetch } from "../utilities/fetches";

const ListedJobs = ({clientname, description, salary, phonenumber, email, jobs, setJobs}) => {
  
  const getJobs = async() =>{
    const data = await listedJobsFetch()
    // const jobData = await data.JSON
    setJobs(data)
    
  }
      
useEffect(() =>{
  getJobs()
},[])
if (!jobs){
  console.log(null)
  return null
}
    return(
        <div>
          <h1>Here you can find all the listed jobs</h1>
          <br></br>
          <div>
          
          {jobs.map((job,index) =>{
            return(
              <div key={index}>
            <p>{job.clientname}</p>
            <p>{job.job_description}</p>
            <p>{job.pay_range}</p>
            <br/>
            </div>
        )})}
          </div>
          <button>Find a job</button>
        </div>      
    )
}
export default ListedJobs;