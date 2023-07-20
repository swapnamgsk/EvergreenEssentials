import react from "react";
import './Navbar.css';
import { SelectConstant, navigationItems, topdivConstant } from "../Constatnt/homeConstant";

function Navbar(){
    return(
        <div className="nav">   
            <div id = "topDiv">
                {topdivConstant.head}
                </div> 
                <div className="navbar">
                    <div>
                        <div className="logo"></div>
                        <p className="quote">{topdivConstant.para}</p>
                    </div>
                    {
                        navigationItems.map((item, index) => (
                        <h3 key={index} className={item.className}>{item.label}</h3>
                        ))
                    }

                    <div className="language">
                        <select className="select">
                                {
                                    SelectConstant.map((item,i) =>(
                                        <option key = {i}>{item}</option>
                                    ))
                                }
                            </select>
                    </div>
                    <div className="signin"></div>
                </div>   
        </div>
    )
}
export default Navbar;
