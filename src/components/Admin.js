import { Link } from "react-router-dom";
import AboutMe from "./aboutMe";
import UserName from "./userName";
import { useEffect } from "react";
import { listedJobsFetch } from "../utilities/fetches";
import "../styles/admin.css"

const Admin = ({jobs, setJobs, fname, sname}) => {
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

    return (
        <div className="wrapper"> 
            <div>
                <nav className="navbar">
                <ul>
                    {/* <li>
                    <Link to="/">Back to main screen</Link>
                    </li> */}
                    <h1 className="logo">NODE NATION: {fname} {sname} </h1>
                    <a><Link to="/">Logout</Link></a> 
                    <a><Link to="/find">Find a user</Link></a>
                    <a><Link to="/admin">Listed jobs</Link></a>
                    <a><Link to="/create">Create a new Job</Link></a>
                    
                    {/* <h1>Admin</h1> */}
                </ul>
                </nav>    
            </div>
            <div>
                {/* <h1>Admin p</h1> */}
                
                <h1 className="pageTitle">Welcome to your admin portal</h1>
                <h2 className="pageTitle">Here you can find all the listed jobs</h2>
                
                <div className="jobCards">
                {jobs.map((job,index) =>{
                    return(
                    <div className="jobCard" key={index}>
                        <p><h3 className="cardTitle">Client name: </h3>{job.clientname}</p>
                        <p><h4 className="cardText">Constact number: </h4> {job.contact_number}</p>
                        <p><h4 className="cardText">Email: </h4> {job.email}</p>
                        <p><h4 className="cardText">Language: </h4> {job.language}</p>
                        <p><h4 className="cardText">Salary: </h4> £{job.pay_range}</p>
                        <p><h4 className="cardText">About the job: </h4> {job.job_description}</p>
                        
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
            