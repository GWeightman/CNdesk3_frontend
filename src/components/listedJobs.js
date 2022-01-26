import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { listedJobsFetch } from "../utilities/fetches";

const ListedJobs = ({jobs, setJobs, fname, sname}) => {
  
  const getJobs = async() =>{
    const data = await listedJobsFetch()
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
        <div>
                <nav className="navbar">
                <ul>
                  <h1 className="logo">NODE NATION: {fname} {sname} </h1>
                  <li><NavLink to="/" className="navButton">Logout</NavLink></li> 
                  <li><NavLink to="/find" className="navButton">Find a user</NavLink></li>
                  <li><NavLink to="/admin" className="navButton">Listed jobs</NavLink></li>
                  <li><NavLink to="/create" className="navButton">Create a new Job</NavLink></li>
                </ul>
                </nav>    
            </div>
        <h1>Here you can find all the listed jobs</h1>
        <br/>
        <div>  
          {jobs.map((job,index) =>{
            return(
              <div key={index}>
                <p>{job.clientname}</p>
                <p>{job.contact_number}</p>
                <p>{job.email}</p>
                <p>{job.language}</p>
                <p>{job.pay_range}</p>
                <p>{job.job_description}</p>
                <br/>
              </div>
            )})}
        </div>
      </div>      
  )
}
export default ListedJobs;