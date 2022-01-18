import { Link, Navigate, Router } from "react-router-dom"

const login_handler = (e) => {
    e.preventDefault();
    <Link to={"/login"}/>
}

const Home = () => {
    return(
        <div>
           <button><Link to={"/contact"}>contact us</Link></button>
           <button onClick={login_handler}>log in</button> 
           <h1> Welcome to Node Nation </h1>
           <p>A place to bring small coding projects and independent developers together</p>
           
        </div>
    )
}

export default Home