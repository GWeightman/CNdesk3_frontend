import "../styles/home.css"
import { Link } from "react-router-dom"

const Home = () => {
    return(
        <div>
            <div className="welcome">
                <h1> Welcome to Node Nation </h1>
                <p>A place to bring small coding projects and independent developers together</p>
                <br/>
                <br/>
                <button><Link to="/contact">contact us</Link></button>
                <button><Link to="/login">log in</Link></button>
            </div>
            <div className="devbutton">
                <p>These buttons are for development only and must be deleted before submission</p>
                <button><Link to="/admin">Admin</Link></button>
                <button><Link to="/mainpage">Developer</Link></button>
            </div>
        </div>
    )
}

export default Home