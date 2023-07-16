import React from "react";
import './Footer.css'
// import {Link} from "react-router-dom";



function Footer(){
    return(
        <div id = "footer">
                <div id = "homepart">
                    <h2 id = "heading2">Home</h2>
                    <p className= "bottomText">About</p>
                    <p className= "bottomText">Collections</p>
                    <p className= "bottomText">Plant resources</p>
                    <p className= "bottomText">Services</p>
                </div>
                <div id = "contact">
                    <h2 className= "CONTACT">Contact us</h2>
                    <div id = "email-address">
                         <h3>Email Adress :  </h3>
                         <p className= "bottomText"><a href = "">mgswappna1911@gmail.com</a></p>
                    </div>
                    <div id = "mobilenumber">
                        <h3>Mobile number : </h3>
                        <p className= "bottomText">9177939170</p>
                    </div>
                    <div id = "Address">
                        <h3>Adress : </h3>
                        <p className= "bottomText"><a href = "https://goo.gl/maps/ozj2hSoiqk824Fju9">2-20/Jeedimakulapalli,gangavaram<br/>Chittor,AP</a></p>
                    </div>
                </div>
                <div id = "socialmedialinks">
                    <h2 id = "socialmedia">Social media</h2>
                    <div id = "facebook">
                        <div id = "facebookimage"></div>
                        <h3 id = "facebooklink"><a href = "https://www.facebook.com/jtdfoundation/">Facebook</a></h3>
                    </div>
                    <div id = "twitter">
                        <div id = "twitterimage"></div>
                        <h3 id = "twitterlink">Whatsapp</h3>
                    </div>
                    <div id = "instagram">
                        <div   id = "instagramimage"></div>
                        <h3 id = "instagramlink"><a href = "https://www.instagram.com/joiningthedotsfoundation/?hl=en">Intsagram</a></h3>
                    </div>
                    <div id = "linkedin">
                        <div id = "linkedinimage"></div>
                        <h3 id = "linkedinlink"><a href = "https://www.linkedin.com/in/swapna-m-g-5375b0278/">linkedin</a></h3>
                    </div>
                </div>
        </div>
    )
 } 
 export default Footer;