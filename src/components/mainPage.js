import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { availableJobsFetch, devnameFetch } from "../utilities/fetches";
import "../styles/mainPage.css";
import "../styles/admin.css";


const MainPage = ({ appliedJobs, setAppliedJobs, savedJobs, setSavedJobs, jobs, setJobs, username, fname, sname }) => {
  
  //Retreive jobs from the backend:
  const getJobs = async () => {
    const data = await availableJobsFetch(username);
    setJobs(data);

  }
  
  //Methods:
  const addJob = async (username, id) => {
    await devnameFetch(username, id)
    getJobs()
    // setAppliedJobs([...appliedJobs, { ...job }]);
  };

  useEffect(() => {
    getJobs();
  }, [])

  if (!jobs) {
    console.log(null);
    return null;
  }
  
  return (
    <div className="wrapper">
        <nav className="navbar">
        <h1 className="logo" >NODE NATION: {fname} {sname} </h1>
          <li><NavLink to="/" className="navButton">Logout</NavLink></li> 
          <li><NavLink to="/jobPosts" className="navButton">Applications</NavLink></li>
          <li><NavLink to="/mainPage" className="navButton">Dev-Portal</NavLink></li>
        </nav>
        <div className="centre-section">
      <h1 className="page-title">Developer Portal</h1>
      
      {jobs.map((job, index) => {
        return(
        <div className="job-card" key={index}>
          <div className="card-body">
            <h3 className="card-title">{job.clientname}</h3>
            <h4 className="card-text">{job.contact_number}</h4>
            <h4 className="card-text">{job.email}</h4>
            <h4 className="card-text">
              £{job.pay_range} | {job.language}
            </h4>
            <h4>Developer: {job.dev_name}</h4>
            <p className="job-desc">{job.job_description}</p>
          </div>
          <button className="card-btn" onClick={() => addJob(username, job._id)}>
            Apply now
          </button>
        </div>
      )})}
    </div>
       
    </div>
  );
};

export default MainPage;
