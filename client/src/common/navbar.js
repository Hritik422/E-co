import {Link} from "react-router-dom"
import icon from "../assest/OIP.jpg"
import React, { useState, useEffect } from 'react';
import React, { useState } from "react";

const Navbar = () =>{
    const [divHeight, setDivHeight] = useState(200);

  useEffect(() => {
    const handleScroll = () => {
      const newHeight = Math.max(200 - window.scrollY, 80);
      setDivHeight(newHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
       <div className="navbar" style={{ height: `${divHeight}px` }}>
        <img src={icon}></img>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/MyAccount">My Account</Link>
        <Link to="/Aboutus">About Us</Link>
        <Link to="/Login">Login/Logout</Link>
        <Link to="/Register">Register</Link>
        </div>
       
    )
}
export default Navbar;