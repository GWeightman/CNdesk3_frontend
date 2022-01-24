import { useEffect } from "react";
import { userFetch } from "../utilities/fetches";


const FindUser = ({username, setUsername}) => {
    
    const getUsers = async() =>{
        const data = await userFetch()
        setUsername(data)  
    }
             
    useEffect(() =>{
        getUsers()
    },[])
        
    if (!username){
        console.log(null)
        return null
        }

    const useMapper = () =>{
        
        
    }
    return(
        <div>
        <h1>What are you looking for?</h1>
        <br/>
          <div>  
          {username.map((users,index) =>{
            return(
              <div key={index}>
            <p>{users.username}</p>
            <br/>
            </div>
        
        )})}
        </div>
        </div>
    )
        
}

export default FindUser;