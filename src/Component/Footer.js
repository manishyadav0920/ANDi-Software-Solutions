import React from "react";
import {FaInstagram, FaFacebook, FaLinkedin, FaYoutube} from 'react-icons/fa';
import '../Css/FooterStyle.css';
import { Link } from "react-router-dom";

const Footer = () =>{
    return(
        <>
            <footer>
                <div className="container container-flex">
                    <div className="icons">
                        <Link to="https://www.youtube.com/channel/UC0mfGwSDteVVWqmggE3MtYQ">
                            <FaYoutube className="icon" />
                        </Link>

                        <Link to="https://www.facebook.com/people/Andi-Software-Solutions/100065172963303/">
                            <FaFacebook className="icon" />
                        </Link>

                        <Link to="https://www.instagram.com/andisoftwaresolutions5/?hl=en">
                            <FaInstagram className="icon" />
                        </Link>

                        <Link to="https://www.linkedin.com/company/andisoftwaresolutions/about/">
                            <FaLinkedin className="icon" />
                        </Link>
                    </div>
                    <div className="line">
                        <hr/>
                        <hr/>
                    </div>
                    <div className="copyright">
                        <p>Copyright 2021 &copy; ANDi Software Solutions</p>
                        <p>All Rights reserved</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;