import { Link } from "react-router-dom";
import { login_fetch } from "../utilities/fetches";

const Login = ({username, setUsername, password, setPassword}) => {

    const login_handler = async () => {
        try {
            const ret_val = await login_fetch(username, password)
            console.log(ret_val.password)
            if (ret_val.username === username) {
                if(ret_val.status == "admin"){
                    window.location.href = "/admin"
                } else {
                    window.location.href = "/mainpage"
                }
            } else {
                window.location.href = "/notauth"
            }
        } catch (error) {
            window.location.href = "/notauth"
        }
    }

    const signup_button = () => {
        window.location.href = "/signup"
    }

    return(
        <div>
            <h1>Awesome Company</h1>
            <br/>
            <form onSubmit={login_handler}>
                <p>Username:</p>
                <input onChange={(e) => setUsername(e.target.value)} placeholder='username'/>
                <p>Password:</p>
                <input onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
                <br/>
                <br/>
                <button type='submit'>submit</button>
                <button onClick={signup_button}>sign up</button>
            </form>
        </div>
    )
}

export default Login;