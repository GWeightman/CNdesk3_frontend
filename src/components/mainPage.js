import { Link } from "react-router-dom";

const MainPage = ( {appliedJobs, setAppliedJobs, savedJobs, setSavedJobs, page, setPage, modalOpen, setModalOpen, jobs, setJobs}) => {
  

  //Methods:
  const addJob = (job) => {
    setAppliedJobs([...appliedJobs, { ...job }]);
  };

  const saveJob = (job) => {
    setSavedJobs([...savedJobs, { ...job }]);
  };

  const removeJob = (jobToRemove) => {
    setAppliedJobs(appliedJobs.filter((job) => job !== jobToRemove));
  };

  const removeSavedJob = (jobToRemove) => {
    setSavedJobs(savedJobs.filter((job) => job !== jobToRemove));
  };

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
      <h1>Developer: Home</h1>
      {jobs.map((job, index) => (
        <div className="job-card" key={index}>
          <div className="card-body">
            <h3 className="card-title">{job.title}</h3>
            <h4 className="card-text">{job.techStack}</h4>
            <h4 className="card-text">
              {job.duration} | {job.value}
            </h4>
            <p className="job-desc">{job.description}</p>
          </div>
          <button className="card-btn" onClick={() => addJob(job)}>
            Apply now
          </button>
          <button className="card-btn" onClick={() => saveJob(job)}>
            Save job
          </button>
        </div>
      ))}
    </div>
       
    </div>
  );
};

export default MainPage;
