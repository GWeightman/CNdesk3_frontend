import React, { useState } from 'react'

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [savedJobs, setSavedJobs] = useState([]);
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
    ]);


    return (
        <div className="wrapper">
            <div className="navbar">

            </div>
            <div className="left-section">
                <div className="user-card">
                    <h2 className="card-title">Joe Bloggs</h2>
                    <h3>Full-stack Developer, MERN | Liverpool, UK</h3>
                </div>
            </div>
            <div className="centre-section">
                <h1>Developer: Job Applications</h1>
                {jobs.map((job, index) => (
                    <div className="job-card" key={index}>
                        <div className="card-body">
                            <h2 className="card-title">{job.title}</h2>
                            <h3 className="card-text">{job.techStack}</h3>
                            <h3 className="card-text">{job.duration} | {job.value}</h3>
                            <p className="job-desc">{job.description}</p>
                        </div>
                           <button className="card-btn">
                            Apply now
                        </button>
                        <button className="card-btn">
                            Save post
                        </button>
                    </div>
                ))};
            </div>
            <div className="right-section">
                <div className="latest-section">
                    <h2>Saved Jobs</h2>
                    <ul>
                        <li>{jobs[0].title}</li>
                        <li>{jobs[1].title}</li>
                        <li>{jobs[2].title}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default AppliedJobs;
