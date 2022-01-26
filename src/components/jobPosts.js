import { Link } from "react-router-dom";
import { useEffect } from "react";
import Modal from "react-modal";
import { updateUserFetch, appliedJobsFetch, removeJobsFetch } from "../utilities/fetches";
import "../styles/jobPosts.css";

const JobPosts = ({appliedJobs, setAppliedJobs, savedJobs, setSavedJobs, modalOpen, setModalOpen, username, setUsername, email, setEmail, password, setPassword}) => {
    
    const handleUpdate = async (username, email, password) => {
        const data = await updateUserFetch();
        setUsername(data.username);
        setEmail(data.email);
        setPassword(data.password);
    };

    /*
    const handleDelete = async () => {
        await deleteUserFetch();
    }
    */

    //Methods:
    // const addJob = (job) => {
    //     setAppliedJobs([...appliedJobs, { ...job }]);
    // };

    // const saveJob = (job) => {
    //     setSavedJobs([...savedJobs, { ...job }]);
    // };

    const removeJob = async (id) => {
        await removeJobsFetch(id);
        getJobs()
    };

    // const removeSavedJob = (jobToRemove) => {
    //     setSavedJobs(savedJobs.filter((job) => job !== jobToRemove));
    // };

    const getJobs = async () => {
        const data = await appliedJobsFetch(username);
        setAppliedJobs(data);
    
    }

    useEffect(() => {
        getJobs();
      }, [])

    return (
        <div className="wrapper">
            <nav className="navbar">
                <h1 className="logo">NODE NATION</h1>
                <li><Link to="/">Logout</Link></li> 
                <li><Link to="/jobposts">Applications</Link></li>
                <li><Link to="/mainPage">Dev-Portal</Link></li>
            </nav>       

            <div className="centre-section">
              <h1 className="page-title">Jobs Portal</h1>
              <div className="applied-jobs">
                <h2>Current Applications</h2>
                {appliedJobs.map((job, index) => (
                <div className="job-card" key={index}>
                  <div className="card-body">
                    <h4 className="card-title">{job.clientname}</h4>
                    <h4 className="card-text">{job.contact_number}</h4>
                    <h4 className="card-text">{job.email}</h4>
                    <h4 className="card-text">
                    £{job.pay_range} | {job.language}
                    </h4>
                    <h4>Developer: {job.dev_name}</h4>
                    <p className="job-desc">{job.job_description}</p>
                  </div>
                  {/* {<button className="card-btn" onClick={() => saveJob(job)}>
                  Save job
                  </button> */}
                  <button className="card-btn" onClick={() => removeJob(job._id)}>
                  Remove Job
                  </button>
              </div>
              ))}
          </div>
                
      {/*
      <div className="saved-jobs">
          <h2>Saved Applications</h2>
          {savedJobs.map((job, index) => (
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
              <button className="card-btn" onClick={() => removeSavedJob(job)}>
              Remove
              </button> 
          </div>
          ))}
      </div> */}
      
      <div className="settings">
      <h2>Profile Settings</h2>
      <button className="settings-btn" onClick={() => setModalOpen(true)}>Settings</button>
      <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
          <div className="modal-container">
            <form className="update-form">
              <h2>Update Details</h2>
              <label htmlFor="username">Username:</label>
              <input placeholder="username" />
              <label htmlFor="email">Email:</label>
              <input placeholder="email" />
              <label htmlFor="password">Password:</label>
              <input placeholder="password" />
              <button className="update-btn" onClick={handleUpdate}>Update Profile</button>
            </form>
            <div className="delete-section">
              <button className="settings-btn" >Delete Account</button>
              <button className="settings-btn" onClick={() => setModalOpen(false)}>Close</button>
            </div>
          </div> 
      </Modal>
    </div>          
  </div>
</div>
)};
        
export default JobPosts;
