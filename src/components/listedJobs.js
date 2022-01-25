import { useEffect } from "react";
import { Link } from "react-router-dom";
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
  const returnHandler = () => {
    window.location.href = "/admin"
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
        <button onClick={returnHandler}>Go back to homepage</button>
      </div>      
  )
}
export default ListedJobs;