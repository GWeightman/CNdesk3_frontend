import { useEffect } from "react";
import { adminFetch, userFetch } from "../utilities/fetches";

const UserName = ({admin, setAdmin, username, setUsername}) =>{
    const getUsername = async() =>{
        const data = await userFetch()
        setUsername (data)
    }

    useEffect(()=>{
        getUsername()
    },[])
    
    if (!username){
        console.log(null)
        return null
      }
    return(
        <div>
            <h2>name</h2>
            {username.map((users,index) =>{
                return(
                    <div key={index}>
                    <p>{users.username}</p>
                    <br/>
                    </div>
                )})}
        </div>
    )
}

export default UserName;