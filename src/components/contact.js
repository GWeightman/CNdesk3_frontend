import { Link } from "react-router-dom"

const Contact = () => {

    const return_handler = () => {
        window.location.href = "/"
    }

    return(
        <div>
            <h1>Place a job request with Node Nation</h1>
            <form action="mailto:admin@nodenation.uk" subject="Job%Request" method="post" encType="text/plain">
                Username:<br/><input type="text" name="name" required/><br/>
                Contact Number:<br/><input type="number" name="contact number"/><br/>
                Email:<br/><input type="text" name="email" required/><br/>
                Coding Language:<br/><input type="text" name="language"/><br/>
                Pay Range:<br/><input type="number" name="pay range"/><br/>
                Job Description:<br/><textarea type="text" name="job description" required></textarea>
                <br/>
                <br/>
                <input type="submit" value="Send"/>
                <button onClick={return_handler}>Go Back</button>
            </form>

            
        </div>
    )
}

export default Contact