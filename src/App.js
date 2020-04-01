import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Navbar from "./components/navbar";
import Home from "./components/home"
import Profile from "./components/profile";
import Login from "./components/login";
import Signup from './components/signup';

const App = () => {

  
  return (
  <>
    <Navbar />  

     {/* Routes / Paths */}
     <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/profile">
        <Profile/>
      </Route>

      <Route exact path="/login">
        <Login/>
      </Route>

      <Route exact path="/signup">
        <Signup/>
      </Route>

  </>
);
}



export default App;
