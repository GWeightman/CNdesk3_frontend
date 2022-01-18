import { Link } from "react-router-dom"

const login_handler = () => {
    window.location.href = "/login"
}

const contact_handler = () => {
    window.location.href = "/contact"
}

const dev_handler = () => {
    window.location.href = "/mainpage"
}

const admin_handler = () => {
    window.location.href = "/admin"
}

const Home = () => {
    return(
        <div>
           <button onClick={contact_handler}>contact us</button>
           <button onClick={login_handler}>log in</button> 
           <h1> Welcome to Node Nation </h1>
           <p>A place to bring small coding projects and independent developers together</p>
           <br/>
           <br/>
           <p>These buttons are for development only and must be deleted before submission</p>
           <button onClick={admin_handler}>Admin</button>
           <button onClick={dev_handler}>Developer</button>
        </div>
    )
}

export default Home