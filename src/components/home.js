import "../styles/home.css"
import { Link, NavLink } from "react-router-dom"
import network from "../images/network.jpg";

const Home = () => {
    return(
        //<div>
        //     <div className="welcome">
        //         <h1> Welcome to Node Nation!</h1>
        //         <p>A place to bring small coding projects and independent developers together</p>
        //         <br/>
        //         <br/>
        //         <button><Link to="/contact">contact us</Link></button>
        //         <button><Link to="/login">log in</Link></button>
        //     </div>
        //     
        // </div>

        <div>
      <div class="home-wrapper" style={{ backgroundImage: `url(${network})` }}>
        <header>
          <div class="logo-area">
            <h1 class="logo-title">NODE NATION</h1>
            <ul class="nav-area">
                <li><NavLink className="link" to="/contact">Contact Us</NavLink></li>
                <li><NavLink className="link" to="/login">Login</NavLink></li>
            </ul>
          </div>
        </header>
        <div class="welcome-text">
          <h1>Welcome to NodeNation!</h1>
          <h3>Join, connect and create with clients and developers!</h3>
          <button class="start-btn"><Link className="link" to="/signup">Get started!</Link></button>
        </div>
      </div>
      <footer>
        <p class="footer-text">NodeNation - 2022</p>
      </footer>
      <div className="devbutton">
                 <p>These buttons are for development only and must be deleted before submission</p>
                <button><Link to="/admin">Admin</Link></button>
                <button><Link to="/mainpage">Developer</Link></button>
             </div>
    </div>
    )
}

export default Home