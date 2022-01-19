const { useState } = require("react");

const MainPage = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [savedJobs, setSavedJobs] = useState([]);
    const [page, setPage] = useState("main");
    const [jobs] = useState([
        {
            id: 1,
            title: "e-commerce website, front-end",
            techStack: "JavaScript, React.js",
            duration: "3 weeks",
            value: "£650",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            id: 2,
            title: "REST API, back-end",
            techStack: "JavaScript, Node.js, mongoDB, authentication",
            duration: "2 weeks",
            value: "£550",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            id: 3,
            title: "start-up, front-end, UI/UX",
            techStack: "JavaScript, React.js",
            duration: "4 weeks",
            value: "£1200",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: 4,
            title: "start-up, front-end, UI/UX",
            techStack: "JavaScript, React.js",
            duration: "6 weeks",
            value: "£1800",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
    ]);

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

    const navigateTo = (nextPage) => {
        setPage(nextPage);
    };

    const renderMainPage = () => (
        <div className="centre-section">
            <h1>Developer: Home</h1>
            {jobs.map((job, index) => (
                <div className="job-card" key={index}>
                    <div className="card-body">
                        <h3 className="card-title">{job.title}</h3>
                        <h4 className="card-text">{job.techStack}</h4>
                        <h4 className="card-text">{job.duration} | {job.value}</h4>
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
    );

    const renderJobPosts = () => (
        <div className="centre-section">
            <h1>Developer: Jobs Page</h1>
            <div className="applied-jobs">
                <h2>Current Applications</h2>
                {appliedJobs.map((job, index) => (
                    <div className="job-card" key={index}>
                        <div className="card-body">
                            <h3 className="card-title">{job.title}</h3>
                            <h4 className="card-text">{job.techStack}</h4>
                            <h4 className="card-text">{job.duration} | {job.value}</h4>
                            <p className="job-desc">{job.description}</p>
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
                            <h3 className="card-title">{job.title}</h3>
                            <h4 className="card-text">{job.techStack}</h4>
                            <h4 className="card-text">{job.duration} | {job.value}</h4>
                            <p className="job-desc">{job.description}</p>
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
        </div>
    );
    
    const renderProfile = () => (
        <div className="centre-section">
            <h1>My Profile</h1>
            <div className="update-form">
                <form>
                    <h2>Update Details</h2>
                    <input placeholder="username" />
                    <input placeholder="email" />
                    <input placeholder="password" />
                    <input placeholder="confirm password" />
                    <button>Update</button>
                </form>
            </div>                
        </div>
    );

    return (
        <div className="wrapper">
            <div className="navbar">
                <a className="nav-link" onClick={() => navigateTo("main")}>Home</a>
                <a className="nav-link" onClick={() => navigateTo("jobPosts")}>Applications</a>
                <a className="nav-link" onClick={() => navigateTo("profile")}>Profile</a>
            </div>
            {page === "main" && renderMainPage()}
            {page === "jobPosts" && renderJobPosts()}
            {page === "profile" && renderProfile()}
        </div>
    )
};

export default MainPage;
