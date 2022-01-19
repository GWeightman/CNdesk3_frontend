import react from "react";
import { Link } from "react-router-dom";
import Admin from "./Admin";

const Create = () =>{
        const handleSubmit = event => {
         event.preventDefault();
         alert('You have submitted the form.')
       }
      
        return(
            <div>
                <h1 className="header">Create a new job</h1>
                
          <div className="wrapper">
            <h1>How About Them Apples</h1>
            <form onSubmit={handleSubmit}>
              <fieldset>
                <label>
                  <p>Job title</p>
                  <input title="title" />
                  <p>Description</p>
                  <input description="description" />
                  <p>Salary</p>
                  <input salary = "salary" />
                </label>
              </fieldset>
              <button type="submit">Submit</button>
            </form>
          </div>
          </div>
        )
}


export default Create;