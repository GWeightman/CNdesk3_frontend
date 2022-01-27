import { Navigate } from "react-router-dom";
import { login_fetch } from "../utilities/fetches";
import network from "../images/network.jpg";


const Login = ({username, setUsername, password, setPassword, setFname, destination, setDestination, logged, setLogged, setSname}) => {
    
    const login_handler = async (e) => {
        try {
            e.preventDefault();
            const ret_val = await login_fetch(username, password)
            setFname(ret_val.firstname)
            setSname(ret_val.surname)
            if (ret_val === "NoAuth") {
                setDestination("/notauth")                
            } else if (ret_val.status === "admin") {
                setDestination("/admin")
            } else if (ret_val.status === "dev") {
                setDestination("/mainpage")
            } else {
                setDestination("/notauth")
            }
            setLogged(true)
        } catch (error) {
            window.location.href = "/notauth"
            console.log(error)
        }
    }

    const signup_button = () => {
        window.location.href = "/signup"
    }

    const return_button = () => {
        window.location.href ="/"
    }

    return(
        <div>
            {logged && <Navigate to={destination} />}
            <div class="home-wrapper" style={{ backgroundImage: `url(${network})` }}>
                <header>
                    <div class="logo-area">
                        <h1 class="logo-title">NODE NATION</h1>
                    </div>
                </header>
                    <div className="login-section">
                    <form onSubmit={login_handler}>
                        Username:<br/>                
                        <input onChange={(e) => setUsername(e.target.value)} placeholder='username'/>
                        <br/>
                        Password:<br/>
                        <input onChange={(e) => setPassword(e.target.value)} placeholder='password' type='password' />
                        <br/>
                        <br/>
                        <input className="login-btn" type='submit' value="Submit"/>
                    </form>
                    <button className="login-btn" onClick={signup_button}>Sign Up</button>
                    <button className="login-btn" onClick={return_button}>Go Back</button>
                </div>
            </div>
            <footer>
                    <p class="footer-text">NodeNation - 2022</p>
            </footer>
        </div>
    )
}

export default Login;