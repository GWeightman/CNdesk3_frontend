import { useEffect } from "react";
import { Link } from "react-router-dom";
import { listedJobsFetch } from "../utilities/fetches";

const MainPage = ({ appliedJobs, setAppliedJobs, savedJobs, setSavedJobs, jobs, setJobs, username }) => {
  
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
        <div className="navbar">
            <nav className="navbar">
              <ul>
                  <li>
                  <Link to="/mainpage">Home</Link>
                  </li>
                  <li>
                  <Link to="/jobposts">Applications</Link>
                  </li>
              </ul>
            </nav>
        </div>
        <div className="centre-section">
      <h1> {username} : Developer Portal</h1>

      {jobs.map((job, index) => {
        return(
        <div className="job-card" key={index}>
          <div className="card-body">
            <h3 className="card-title">{job.clientname}</h3>
            <h5 className="card-text">{job.contact_number}</h5>
            <h5 className="card-text">{job.email}</h5>
            <h5 className="card-text">
              £{job.pay_range} | {job.language}
            </h5>
            <h5>Developer: {job.dev_name}</h5>
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
