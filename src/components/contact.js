import { Link } from "react-router-dom"

const Contact = () => {

    const return_handler = () => {
        window.location.href = "/"
    }

    return(
        <form action="mailto:admin@nodenation.uk" method="post" encType="text/plain">
            <h1>Place a job request with Node Nation</h1>
            <p>Your Name</p>
            <input placeholder='client name'/>
            <p>Contact Number</p>
            <input placeholder="contact number"/>
            <p>Email</p>
            <input placeholder="email"/>
            <p>If you know what language you would like to use</p>
            <input placeholder="language"/>
            <p>How much would you like be looking at paying</p>
            <input placeholder="pay range"/>
            <p>Give a description of the project brief</p>
            <input placeholder="job description"/>
            <br/>
            <br/>
            <button>send</button>
            <button onClick={return_handler}>go back</button>
        </form>
    )
}

export default Contact