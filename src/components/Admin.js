import { BrowserRouter, Link } from "react-router-dom";
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
                    
                </div>
                <div>
                <AboutMe/>
                <button><Link to={"/create"}>Create a new job</Link></button>
                <button><Link to={"/find"}>Find a developer</Link></button>
                <button><Link to={"/list"}>Listed jobs</Link></button>
                </div>
               
            </div>               
                <div>
                    
                </div>
        </div>
    );
}


export default Admin;