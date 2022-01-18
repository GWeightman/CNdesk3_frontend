import { Link } from "react-router-dom";
import { login_fetch } from "../utilities/fetches";

const Login = ({setUsername, setPassword}) => {

    const login_handler = async (e, username, password) => {
        e.preventDefault();
        const ret_val = await login_fetch(username)
        if (ret_val.usr.username == username && ret_val.user.password == password) {
          console.log(ret_val);
        }
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
                <button><Link to={"/signup"}>sign up</Link></button>
            </form>
        </div>
    )
}

export default Login;