import { Navigate } from "react-router-dom"
import { signup_fetch } from "../utilities/fetches";
import network from "../images/network.jpg";

const Signup = ({username, setUsername, password,  setPassword, fname,  setFname, sname, setSname, email, setEmail, destination, setDestination, logged, setLogged}) => {

    const signin_handler = async (e) => {
        e.preventDefault();
        await signup_fetch(username, password, fname, sname, email)
        setDestination("/mainpage")
        setLogged(true)
    }

    const return_handler = () => {
        window.location.href = "/"
    }

    return(
        <div>
            {logged && <Navigate to={destination}/>}
            <div class="home-wrapper" style={{ backgroundImage: `url(${network})` }}>
                <header>
                    <div class="logo-area">
                        <h1 class="logo-title">NODE NATION</h1>
                    </div>
                </header>
                <div className="signup-section">
                    <h2>Signup</h2>
                    <form onSubmit={signin_handler}>
                        <p>Username:</p>
                        <input onChange={(e) => setUsername(e.target.value)} placeholder='username'/>
                        <p>First Name:</p>
                        <input onChange={(e) => setFname(e.target.value)} placeholder='first name'/>
                        <p>Surname:</p>
                        <input onChange={(e) => setSname(e.target.value)} placeholder='surname'/>
                        <p>Email:</p>
                        <input onChange={(e) => setEmail(e.target.value)} placeholder='email'/>
                        <p>Password:</p>
                        <input onChange={(e) => setPassword(e.target.value)} placeholder='password' type="password" />
                        <br/>
                        <br/>
                        <button className="signup-btn" type='submit'>submit</button>
                        <button className="signup-btn" onClick={return_handler}>go back</button>
                    </form>
                </div>
            </div>
            <footer>
                <p class="footer-text">NodeNation - 2022</p>
            </footer>
        </div>
    )
}

export default Signup