import react from "react";
import './Navbar.css';

function Navbar(){
    return(
        <div>
            
            
            <div className="nav">
                <div className="language">
                    <select className="select">
                            <option>select the language</option>
                            <option>Telugu</option>
                            <option>Hindi</option>
                            <option>Tamil</option>
                            <option>Kannada</option>
                            <option>Malayalam</option>
                            <option>Bengali</option>
                        </select>
                </div>
                <div className="navbar">
                    <div>
                        <div className="logo"></div>
                        <p className="quote">Uncover, Unlock, Empower:Nature's Wisdom.</p>
                    </div>
                    <h2 className="home">Home</h2>
                    <h2 className="about">About</h2>
                    <h2 className="plant">Plants</h2>
                    <div className="signin"></div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;
