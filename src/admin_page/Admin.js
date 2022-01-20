import React, {useState} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutMe from "./aboutMe";
import Create from "./createNewJob";
import ListedJobs from "./listedJobs";
import FindDeveloper from "./findDeveloper"

const Admin = () => {
    const [clientname, setClientName] = useState();
    const [description, setDescription] = useState();
    const [salary, setSalary] = useState();
    const [phonenumber, setPhoneNumber] = useState();
    const [email, setEmail] = useState();
    
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
                <BrowserRouter>
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
                        <Route path="/" element = {<Home />} />
                        <Route path="/Profile" element = {<Profile/>} />                    
                        <Route path="/Logout" element = {<Logout/>} /> 
                        <Route path="create" element={<Create clientname={clientname} setClientName={setClientName} description={description} setDescription={setDescription} salary={salary} setSalary={setSalary} phonenumber={phonenumber} setPhoneNumber={setPhoneNumber} email={email} setEmail={setEmail}/>}/>
                        <Route path="list" element={<ListedJobs clientname={clientname} description={description} salary={salary} phonenumber={phonenumber} email={email}/>}/> 
                        <Route path="find" element={<FindDeveloper />}/>                                          
                    </Routes>
                </div>
                <div>
                <AboutMe/>
                <button><Link to={"/create"}>Create a new job</Link></button>
                <button><Link to={"/find"}>Find a developer</Link></button>
                <button><Link to={"/list"}>Listed jobs</Link></button>
                </div>
                </BrowserRouter>
            </div>               
                <div>
                    
                </div>
        </div>
    );
}


export default Admin;