const ProfilePage = () => {

    return (
        <div className="wrapper">
            <div className="navbar">

            </div>
            <div className="left-section">
                <div className="user-card">
                    <h2 className="card-title">Joe Bloggs</h2>
                    <h3>Full-stack Developer, MERN | Liverpool, UK</h3>
                </div>
                <div className="learn-card">
                    <h2>Current Tasks</h2>
                    <ul>
                        <li>Learning Python (Data Science, Machine Learning)</li>
                        <li>C#/C++ fundamentals</li>
                    </ul>
                </div>
            </div>
            <div className="centre-section">
                <h1>My Profile</h1>
                <div className="statement-section">
                    <h2>Personal statement</h2>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="skills-section">
                    <h2>Skills and Experience</h2>
                    <ul>
                        <li>HTML, CSS, JavaScript</li>
                        <li>DOM, React.js</li>
                        <li>Node.js, Express.js</li>
                        <li>mongoDB (mongoose), mySQL</li>
                        <li>REST API, authentication</li>
                    </ul>
                </div>
                <div className="projects-section">
                    <h2>Projects</h2>
                    <ul>
                        <li></li>
                        <li>e-commerce site for pizza business</li>
                        <li>REST API for a startup</li>
                        <li>Additional support for startup</li>
                        <li>Unit testing for backend operations</li>
                    </ul>
                </div>
            </div>
            <div className="right-section">
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
        </div>
    )
};

export default ProfilePage;