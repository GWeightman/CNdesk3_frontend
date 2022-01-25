import { Link } from "react-router-dom";
import AboutMe from "./aboutMe";
import UserName from "./userName";

const Admin = () => {
    return (
        <div>
            <div>  
                <div>
                    <nav className="navbar">
                    <ul>
                        <li>
                        <Link to="/">Back to main screen</Link>
                        </li>
                        <li>
                        <Link to="/Logout">Logout</Link>
                        </li>
                    </ul>
                    </nav>    
                </div>
                <div>
                    <div><UserName/></div>
                    
                    <div><AboutMe/></div>
                    
                    <button><Link to={"/create"}>Create a new job</Link></button>
                    <button><Link to={"/find"}>Find a user</Link></button>
                    <button><Link to={"/list"}>Listed jobs</Link></button>
                </div>  
            </div>               
        </div>
    );
}

export default Admin;