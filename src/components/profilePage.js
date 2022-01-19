const ProfilePage = () => {

    return (
        <div className="wrapper">
            <div className="navbar">
                Navbar
            </div>
            <div className="centre-section">
                <h1>My Profile</h1>
                <div className="update-form">
                    <form>
                        <h2>Update Details</h2>
                        <input placeholder="username" />
                        <input placeholder="email" />
                        <input placeholder="password" />
                        <input placeholder="confirm password" />
                        <button>Update</button>
                    </form>
                </div>                
            </div>
        </div>
    )
};

export default ProfilePage;