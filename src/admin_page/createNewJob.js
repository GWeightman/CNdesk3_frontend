import { createNewJobFetch } from "../utilities/fetches";

const Create = (clientname, description, salary, phonenumber, email) =>{
  const createJobHandler = async (e) => {
    e.preventDefault();
    await createNewJobFetch(clientname, description, salary, phonenumber, email)
}
      //   const handleSubmit = event => {
      //    event.preventDefault();
      //    alert('You have submitted the form.')
      //  }
      
        return(
            <div>
                <h1 className="header">Create a new job</h1>
                
          <div className="wrapper">
            <h1>How About Them Apples</h1>
            <form onSubmit={createJobHandler}>
              <fieldset>
                <label>
                  <p>Client name</p>
                  <input title="title" />
                  <p>Description</p>
                  <input description="description" />
                  <p>Salary</p>
                  <input salary = "salary" />
                  <p>Number</p>
                  <input description= "number" />
                  <p>Email</p>
                  <input email = "email" />
                </label>
              </fieldset>
              <button type="submit">Submit</button>
            </form>
          </div>
          </div>
        )
}


export default Create;