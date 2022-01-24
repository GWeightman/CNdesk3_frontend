import { useEffect } from "react";
import { adminFetch, developerFetch } from "../utilities/fetches";


const FindUser = ({dev, setDev, admin, setAdmin, username, setUsername}) => {
    
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
        <div>
            <div>
            <h1>Admins</h1>
            {admin.map((users,index) =>{
                return(
                    <div key={index}>
                    <p>{users.username}</p>
                    <br/>
                    </div>
                )})}
            <br/>
            <h1>Developers</h1>
            {dev.map((users,index) =>{
                return(
                    <div key={index}>
                    <p>{users.username}</p>
                    <br/>
                    </div>
                )})}
            </div>
            <button onClick={returnHandler}>Go back to homepage</button>
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