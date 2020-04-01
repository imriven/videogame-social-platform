import React from 'react';
import { NavLink } from "react-router-dom";


const Signup = () => {


    return (
    <div>
        <h3>This is the Sign Up Page</h3>
        <p>
            If you're a member please 
            <NavLink to="/profile">sign in</NavLink>
            </p>
    </div>
  );
}

export default Signup;