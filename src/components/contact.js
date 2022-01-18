import { Link } from "react-router-dom"

const Contact = () => {
    return(
        <div>
            <h1>Place a job request with Node Nation</h1>
            <input placeholder='client name'/>
            <input placeholder="contact number"/>
            <input placeholder="email"/>
            <input placeholder="language"/>
            <input placeholder="pay range"/>
            <input placeholder="job description"/>
            <button>send</button>
            <button><Link to={"/"}>go back</Link></button>
        </div>
    )
}

export default Contact