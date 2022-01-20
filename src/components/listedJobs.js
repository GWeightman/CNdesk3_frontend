import react, { useEffect, useState } from "react";
import { listedJobsFetch } from "../utilities/fetches";

const ListedJobs = (clientname, description, salary, phonenumber, email) => {
    // const [jobs, setJobs] = useState ();
    // useEffect(() => {
    //     const getJobs = async() =>{
    //         await listedJobsFetch()
    //         setJobs(data)
    //     }
    //     getJobs();
    //   }, [jobs]
    //   );
      useEffect(() => {
        listedJobsFetch();
        }, []);
    // const listedJobsHandler = async (e) => {
    //     e.preventDefault();
    //     await  listedJobsFetch(clientname, description, salary, phonenumber, email)     
    // }
    return(
        <div>
            <h1>Here you can find all the listed jobs</h1>
            <br></br>
            <p>
          <strong>clientname: </strong> {clientname}
        </p>

            <button>Find a job</button>
        </div>
        
        //here goes the Read function from jobs CRUD
        
    )
}

export default ListedJobs;