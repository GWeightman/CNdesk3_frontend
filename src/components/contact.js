import { Link } from "react-router-dom"
import network from "../images/network.jpg";

const Contact = () => {

    const return_handler = () => {
        window.location.href = "/"
    }

    return(
        <div>
            <div class="home-wrapper" style={{ backgroundImage: `url(${network})` }}>
                <header>
                <div class="logo-area">
                    <h1 class="logo-title">NODE NATION</h1>
                </div>
                </header>
                <div className="contact-section">
                    <h2>Place a job request with Node Nation</h2>
                    <form action="mailto:admin@nodenation.uk" subject="Job%Request" method="post" encType="text/plain">
                        Username:<br/><input type="text" name="name" required/><br/>
                        Contact Number:<br/><input type="number" name="contact number"/><br/>
                        Email:<br/><input type="text" name="email" required/><br/>
                        Coding Language:<br/><input type="text" name="language"/><br/>
                        Pay Range:<br/><input type="number" name="pay range"/><br/>
                        Job Description:<br/><textarea type="text" name="job description" required></textarea>
                        <br/>
                        <br/>
                        <input className="signup-btn" type="submit" value="Send"/>
                        <button className="signup-btn" onClick={return_handler}>Go Back</button>
                    </form>
                </div>
            </div>
            <footer>
                <p class="footer-text">NodeNation - 2022</p>
            </footer>
        </div>
    )
}

export default Contact