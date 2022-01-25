import { useEffect } from "react";
import { Link } from "react-router-dom";
import { adminFetch, developerFetch } from "../utilities/fetches";
import "../styles/findUser.css"

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
                    <a><Link to="/">Logout</Link></a> 
                    <a><Link to="/find">Find a user</Link></a>
                    <a><Link to="/admin">Listed jobs</Link></a>
                    <a><Link to="/create">Create a new Job</Link></a>
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
                    <button className="back" onClick={returnHandler}>Go back to homepage</button>
                </div>
            </div>
            
        </div>       
    )
        
}
{/* {username.map((users,index) =>{
            return(
              <div key={index}>
            <p>{users.username}</p>
            <br/>
            </div>
        )})} */}
export default FindUser;