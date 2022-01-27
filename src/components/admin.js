import { NavLink } from "react-router-dom";
import AboutMe from "./aboutMe";
import UserName from "./userName";
import { useEffect } from "react";
import { listedJobsFetch, deleteFetch } from "../utilities/fetches";
import "../styles/admin.css"

const Admin = ({jobs, setJobs, fname, sname}) => {
    const getJobs = async() =>{
        const data = await listedJobsFetch()
        setJobs(data)  
      }
         
      const deleteHandler = async (id) => {
        await deleteFetch(id)
        getJobs()
      }
      
      useEffect(() =>{
        getJobs()
      },[])

      if (!jobs){
        console.log(null)
        return null
      }

    return (
        <div className="wrapper"> 
            <div>
                <nav className="navbar">
                  <h1 className="adminLogo">NODE NATION: {fname} {sname} </h1>
                  <li><NavLink to="/" className="navButton">Logout</NavLink></li> 
                  <li><NavLink to="/find" className="navButton">Find a user</NavLink></li>
                  <li><NavLink to="/admin" className="navButton">Listed jobs</NavLink></li>
                  <li><NavLink to="/create" className="navButton">Create a new Job</NavLink></li>
                </nav>    
            </div>
            <div>
                <h1 className="pageTitle">Welcome to your admin portal</h1>
                <h2 className="pageTitle">Here you can find all the listed jobs</h2>

                <div className="jobCards">
                {jobs.map((job,index) =>{
                    return(
                    <div className="jobCard" key={index}>
                        <h4 className="cardTitle">Client name: </h4>
                        <p className="cardTitle1">{job.clientname}</p>
                        <h5 className="cardText">Constact number: </h5>
                        <p className="cardText1">{job.contact_number}</p>
                        <h5 className="cardText">Email: </h5>
                        <p className="cardText1">{job.email}</p>
                        <h5 className="cardText">Language: </h5>
                        <p className="cardText1">{job.language}</p>
                        <h5 className="cardText">Salary: </h5>
                        <p className="cardText1">£{job.pay_range}</p>
                        <h5 className="cardText">About the job: </h5>
                        <p className="cardText1">{job.job_description}</p>
                        <button className="submit" onClick={() => deleteHandler(job._id)}>Delete Job</button>
                    </div>
                    )})}
                </div>  
                    
            </div>  
            </div>
    );
}

export default Admin;
{/* <div className="aboutMe"><AboutMe/></div>
                <button className="adminButton"><Link to={"/create"}>Create a new job</Link></button>
                <button className="adminButton"><Link to={"/find"}>Find a user</Link></button>
                <button className="adminButton"><Link to={"/list"}>Listed jobs</Link></button> */}
            
