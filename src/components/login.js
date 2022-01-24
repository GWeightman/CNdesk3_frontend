import { login_fetch } from "../utilities/fetches";

const Login = ({username, setUsername, password, setPassword, fname, setFname}) => {

    const login_handler = async (e) => {
        try {
            e.preventDefault();
            const ret_val = await login_fetch(username, password)
            setFname(ret_val.firstname)
            if (ret_val === "NoAuth") {
                window.location.href = "/notauth"                
            } else if (ret_val.status === "admin") {
                window.location.href = "/admin"
            } else if (ret_val.status === "dev") {
                window.location.href = "/mainpage"
            } else {
                window.location.href = "/notauth"
            }
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
            <h1>Awesome Company</h1>
            <br/>
            <form onSubmit={login_handler}>
                Username:<br/>                
                <input onChange={(e) => setUsername(e.target.value)} placeholder='username'/>
                <br/>
                Password:<br/>
                <input onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
                <br/>
                <br/>
                <input type='submit' value="Submit"/>
            </form>
            <button onClick={signup_button}>Sign Up</button>
            <button onClick={return_button}>Go Back</button>
        </div>
    )
}

export default Login;