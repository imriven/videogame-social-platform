import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const outline = {
    border: "1px solid black",
    padding: "5%"
    };

    return (
    <div style={{outline}}>
        <h3>This is the Navbar</h3>
        <NavLink>filler</NavLink>
        <NavLink>filler</NavLink>
        <NavLink> filler</NavLink>
    </div>
  );
}

export default Navbar;