import { useEffect } from "react";
import { Link } from "react-router-dom";
import { listedJobsFetch } from "../utilities/fetches";
import "../styles/mainPage.css";

const MainPage = ({ appliedJobs, setAppliedJobs, savedJobs, setSavedJobs, jobs, setJobs, username, fname }) => {
  
  //Retreive jobs from the backend:
  const getJobs = async () => {
    const data = await listedJobsFetch();
    setJobs(data);

  }
  
  //Methods:
  const addJob = (job) => {
    setAppliedJobs([...appliedJobs, { ...job }]);
  };

  
  const saveJob = (job) => {
    setSavedJobs([...savedJobs, { ...job }]);
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
          <h1 className="logo">NODE NATION</h1>
            <a><Link to="/">Logout</Link></a> 
            <a><Link to="/jobposts">Applications</Link></a>
            <a><Link to="/mainPage">Dev-Portal</Link></a>
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
          <button className="card-btn" onClick={() => addJob(job)}>
            Apply now
          </button>
          <button className="card-btn" onClick={() => saveJob(job)}>
            Save job
          </button>
        </div>
      )})}
    </div>
       
    </div>
  );
};

export default MainPage;
