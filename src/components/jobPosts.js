import { Link } from "react-router-dom";
import Modal from "react-modal";
import { updateUserFetch } from "../utilities/fetches";

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
            <nav className="navbar">
                <h1 className="logo">NODE NATION</h1>
                <a><Link to="/">Logout</Link></a> 
                <a><Link to="/jobposts">Applications</Link></a>
                <a><Link to="/mainPage">Dev-Portal</Link></a>
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
              <button className="card-btn" onClick={() => saveJob(job)}>
              Save job
              </button>
              <button className="card-btn" onClick={() => removeJob(job)}>
              Remove
              </button>
          </div>
          ))}
      </div>
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
      </div>
      <div className="settings">
      <button onClick={() => setModalOpen(true)}>Settings</button>
      <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
          <div className="update-form">
            <form>
              <h2>Update Details</h2>
              <label htmlFor="username">Username</label>
              <input placeholder="username" />
              <label htmlFor="email">Email</label>
              <input placeholder="email" />
              <label htmlFor="password">Password</label>
              <input placeholder="confirm password" />
              <button onClick={handleUpdate}>Update Profile</button>
            </form>
            <button>Delete Account</button>
          </div>
          <button onClick={() => setModalOpen(false)}>Close</button>
        </Modal>
      </div>          
  </div>
</div>
)};
        
export default JobPosts;
