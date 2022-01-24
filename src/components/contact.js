import { Link } from "react-router-dom"

const Contact = () => {

    const return_handler = () => {
        window.location.href = "/"
    }

    return(
        <div>
            <h1>Place a job request with Node Nation</h1>
            <form action="mailto:admin@nodenation.uk" subject="Job%Request" method="post" encType="text/plain">
                Username:<input type="text" name="name" required/>
                Contact Number:<input type="number" name="contact number"/>
                Email:<input type="text" name="email" required/>
                Coding Language:<input type="text" name="language"/>
                Pay Range:<input type="number" name="pay range"/>
                Job Description:<input type="text" name="job description" required/>
                <br/>
                <br/>
                <input type="submit" value="Send"/>
                <button onClick={return_handler}>Go Back</button>
            </form>

            
        </div>
    )
}

export default Contact