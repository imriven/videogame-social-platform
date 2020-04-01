import React from 'react';
import { NavLink } from "react-router-dom";


const Login = () => {


    return (
    <div>
        <h3>This is the Login Page</h3>
        <p>
            If you're not a member please 
            <NavLink to="/signup">sign up</NavLink>
            </p>
    </div>
  );
}

export default Login;