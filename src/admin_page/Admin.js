import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutMe from "./aboutMe";

const Admin = () => {
    function Home() {
        return (<div>
        <h1 className="header">Welcome</h1>
        <h1 className="header">Home</h1>
        </div>
        )
    }
    function Profile() {
        return (<div>
        <h1 className="header">My Profile</h1>
        <Profile/>
        </div>
        )
    }
    function Logout() {
        return (<div>
        <h1 className="header">Logout</h1>
        <Logout/>
        </div>
        )
    }
    return (
        <div>
            <div>
                <Router>
                <div>
                    <nav className="navbar">
                    <ul>
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/Profile">Profile</Link>
                        </li>
                        <li>
                        <Link to="/Logout">Logout</Link>
                        </li>
                    </ul>
                    </nav>
                    <Routes>
                        <Route path="/Profile" element = {<Profile/>} />
                        
                        <Route path="/Logout"
                            element = {<Logout/>} />
                        
                        <Route path="/"
                            element = {<Home />} />
                    
                    </Routes>
                </div>
                </Router>
            </div>
                <div>
                    <AboutMe />
                </div>
        </div>
        
    );
}

{/* <div className="buttons">
            <button onClick={create}>Create a new job</button>;
            <button onClick={find}>Find a developer</button>;
            <button onClick={list}>Listed jobs</button>;
        </div> */}
export default Admin;