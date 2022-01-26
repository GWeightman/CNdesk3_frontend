import { useEffect } from "react";
import { Link } from "react-router-dom";
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
                    <h1 className="logo">NODE NATION: {fname} {sname} </h1>
                    <li><a className="navButton" href="/">Logout</a></li> 
                    <li><a className="navButton" href="/find">Find a user</a></li>
                    <li><a className="navButton" href="/admin">Listed jobs</a></li>
                    <li><a className="navButton" href="/create">Create a new Job</a></li>
                </ul>
                </nav>    
            </div>
            <div className="findList">
            <h1 className="title">Admins</h1>
            {admin.map((users,index) =>{
                return(
                    <div className="jobCard" key={index}>
                        <h3> Username: </h3>
                        <p>{users.username}</p>
                        <h3>Email: </h3>
                        <p>{users.email}</p>
                        <br/>
                    </div>
                )})}
            <br/>
            <h1 className="title">Developers</h1>
            {dev.map((users,index) =>{
                return(
                    <div className="jobCard" key={index}>
                        <h3> Username: </h3>
                        <p>{users.username}</p>
                        <h3>Email: </h3>
                        <p>{users.email}</p>
                        <br/>
                    </div>
                )})}
                <div> 
                    <a className="back" onClick={returnHandler}>Go back to homepage</a>
                </div>
            </div>
            
        </div>       
    )
        
}

export default FindUser;