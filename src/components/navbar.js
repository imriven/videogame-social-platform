import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const outline = {
    border: "1px solid black",
    padding: "3%",
    width: "100%",
    marginBottom: "2%"
    };

    return (
    <div style={outline}>
        <h3>Navbar Logo</h3>
        <NavLink to="/">Home Page</NavLink>
        <NavLink to="/profile">Profile Page</NavLink>
        <NavLink to="/login">Login Page</NavLink>
    </div>
  );
}

export default Navbar;