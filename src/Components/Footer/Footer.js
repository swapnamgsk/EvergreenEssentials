import React from "react";
import './Footer.css'
import {HomeConstant } from "../Constatnt/homeConstant";
import {Link} from 'react-router-dom';


function Footer(){
    return(
        <div id = "footer">
            <div id = "footerlogo"></div>
                <div id = "footerText">
                    <div id = "homepart">
                        <h3 id = "head">{HomeConstant.heading}</h3>
                        {
                            HomeConstant.para.map((item,i)=>(
                                <Link to = {item.link}><p key = {i} id = "paragraphTag">{item.label}</p></Link>
                            ))
                        }
                    </div>
                    <div id = "contact">
                        <h3 className= "CONTACT">Contact us</h3>


                        <div id = "email-address">
                            <h3>Email Adress :  </h3>
                            <p className= "bottomText">
                                <a href = "mailto:mgswapna1911@gmail.com">sanjivini@gmail.com</a>
                            </p>
                        </div>
                        <div id = "mobilenumber">
                            <h3>Mobile number : </h3>
                            <p className= "bottomText">
                                <a href = "tel:9177939170">9876543210</a>
                            </p>
                        </div>
                        <div id = "Address">
                            <h3>Adress : </h3>
                            <p className= "bottomText">
                                <a href = "https://goo.gl/maps/ozj2hSoiqk824Fju9">20-Gangavaram,palamaner<br/>Chittor,AP</a>
                            </p>
                        </div>




                    </div>
                    <div id = "socialmedialinks">
                        <h3 id = "socialmedia">Social media</h3>
                        <div id = "facebook">
                            <div id = "facebookimage"></div>
                            <h3 id = "facebooklink">
                                <a href = "https://www.facebook.com/jtdfoundation/">Facebook</a>
                            </h3>
                        </div>
                        <div id = "instagram">
                            <div   id = "instagramimage"></div>
                            <h3 id = "instagramlink">
                                <a href = "https://www.instagram.com/joiningthedotsfoundation/?hl=en">Intsagram</a>
                            </h3>
                        </div>
                        <div id = "linkedin">
                            <div id = "linkedinimage"></div>
                            <h3 id = "linkedinlink">
                                <a href = "https://www.linkedin.com/in/swapna-m-g-5375b0278/">linkedin</a>
                            </h3>
                        </div>
                    </div>
                </div>    
        </div>
    )
 } 
 export default Footer;