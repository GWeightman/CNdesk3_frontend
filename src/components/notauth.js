const Notauth = () => {

    const return_handler = () => {
        window.location.href = "/login"
    }

    return(
        <div>
            <h1>Either the username or password you have provided is not correct please return and try again</h1>
            <button onClick={return_handler}>Go Back</button>
        </div>
    )
}

export default Notauth

