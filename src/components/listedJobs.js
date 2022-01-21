import react, { useEffect, useState } from "react";
import { listedJobsFetch } from "../utilities/fetches";

const ListedJobs = (clientname, description, salary, phonenumber, email) => {

    useEffect(()=> {
      listedJobsFetch()
    }, [])

    return(
        <div>
          <h1>Here you can find all the listed jobs</h1>
          <br></br>
          <div>
            
          </div>
          <button>Find a job</button>
        </div>      
    )
}
export default ListedJobs;