import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from "./components/navbar"

const App = () => {

  
  return (
  <Router>
    <Navbar />      



     {/* Routes / Paths 
     <Route exact path="/">
        <Home />
      </Route>
      <Route path="/some component">
       < some component />
      </Route>
      <Route path="/some other component">
       <some other component/>
      </Route>
*/}



  </Router>
);
}



export default App;
