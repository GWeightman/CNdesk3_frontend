import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { adminFetch, developerFetch } from "../utilities/fetches";
import "../styles/findUser.css"
import "../styles/createNewJob.css"

const FindUser = ({dev, setDev, admin, setAdmin, fname, sname}) => {

    const getAdmins = async() =>{
        const data = await adminFetch()
        setAdmin(data)  
    }

    const getDev = async() =>{
        const data = await developerFetch()
        setDev(data)
    }

    useEffect(() =>{
        getAdmins()
        getDev()
    },[])  

    const returnHandler = () => {
        window.location.href = "/admin"
    }

    return(
        <div className="wrapper">
            <div>
                <nav className="navbar">
                <ul>
                    <h1 className="adminLogo">NODE NATION: {fname} {sname} </h1>
                    <li><NavLink to="/" className="navButton">Logout</NavLink></li> 
                    <li><NavLink to="/find" className="navButton">Find a user</NavLink></li>
                    <li><NavLink to="/admin" className="navButton">Listed jobs</NavLink></li>
                    <li><NavLink to="/create" className="navButton">Create a new Job</NavLink></li>
                </ul>
                </nav>    
            </div>
            <div className="findList">
                <h1 className="title">Admins</h1>
                <br/>
                {admin.map((users,index) =>{
                    return(
                        <div className="jobCard" key={index}>
                            <h4> Username: </h4>
                            <p>{users.username}</p>
                            <h4>Email: </h4>
                            <p>{users.email}</p>
                            <br/>
                        </div>
                    )})}
                <h1 className="title">Developers</h1>
                {dev.map((users,index) =>{
                    return(
                        <div className="jobCard" key={index}>
                            <h4> Username: </h4>
                            <p>{users.username}</p>
                            <h4>Email: </h4>
                            <p>{users.email}</p>
                            <br/>
                        </div>
                    )})}
                    <div> 
                    <NavLink to="/admin" className="back">Go back to homepage</NavLink>
                    </div>
            </div>
            
        </div>       
    )   
}

export default FindUser;