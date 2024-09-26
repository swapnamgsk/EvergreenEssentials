import './Navbar.css';
import React from 'react';
import { SelectConstant, navigationItems, topdivConstant } from "../Constatnt/homeConstant";
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <div className="nav">   
            <div id = "topDiv">
                <marquee className="head">{topdivConstant.head}</marquee>
            </div> 


                <div className="navbar">
                    <div>
                        <div className="logo"></div>
                        <p className="quote">{topdivConstant.para}</p>
                    </div>
                    {
                        navigationItems.map((item, index) => (
                            <Link to = {item.link} className='link'><p key = {index} className= "margintop" style={{textDecoration: 'none', borderBottom: 'none'}}>{item.label}</p></Link>
                        ))
                    }
                   

                <div className="dropdown">
                    <Link to="/category">
                    <span>Category</span>
                    </Link>
                    <ul className="submenu">
                        <li>
                        <Link to="/category/heart">Cardioprotective</Link>
                        </li>
                        <li>
                        <Link to="/category/brain">Adaptogens</Link>
                        </li>
                        <li>
                        <Link to="/category/kidney">Diuretics</Link>
                        </li>
                    </ul>
                    </div>

                    <div className="language">
                        <select className="select">
                                {
                                    SelectConstant.map((item,i) =>(
                                        <option key = {i}>{item}</option>
                                    ))
                                }
                            </select>
                    </div>
                </div>   
        </div>
    )
}
export default Navbar;

