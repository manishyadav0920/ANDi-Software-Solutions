import React from "react";
import logo from "../Images/logo.png";
import { Link, NavLink } from "react-router-dom";
import "../Css/ListStyle.css";
import {FaSearch, FaPhone, FaAddressBook} from 'react-icons/fa';

const List = () =>{
    return(
        <>
        <header>
            <div className="container container-flex">
            <div className="logoContainer">
                <img src={logo} alt="logo" className="logo"/>
            </div>
            <nav>
                <div className="list">
                    <NavLink exact to="/" className="listItem" activeClassName="active">Home</NavLink>
                    <NavLink to="/about" className="listItem" activeClassName="active">About</NavLink>
                    <NavLink to="/services" className="listItem" activeClassName="active">Services</NavLink>
                    <NavLink to="/partner" className="listItem" activeClassName="active">Our Partner</NavLink>
                    <NavLink to="/contact" className="listItem" activeClassName="active">Contact Us</NavLink>
                </div>
            </nav>
            <div className="icons">

                <Link to="/">
                    <FaSearch className="icon"/>
                </Link>
                <Link to="/contact">
                    <FaAddressBook className="icon"/>
                </Link>
                <Link to="/contact">
                    <FaPhone className="icon"/>
                </Link>
            </div>
            </div>
        </header>
        </>
    )
}

export default List;