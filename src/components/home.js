import { Link } from "react-router-dom"

const Home = () => {
    return(
        <div>
           <h1> home </h1>
           <button><Link to={"/contact"}>contact us</Link></button>
           <button><Link to={"/login"}>log in</Link></button> 
        </div>
    )
}

export default Home