import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Homepage from "./Components/Homepage"
import Header from "./Components/Header"
import Benefits from "./Components/Benefits"
import About from "./Components/About"
import Testimonials from "./Components/Testimonials"


export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Header/>
        <Switch>
          <Route path="/About Me">
            <About/>
          </Route>
          <Route path="/benefits">
            <Benefits/>
          </Route>
          <Route path="/testimonials">
            <Testimonials/>
          </Route>
          <Route path="/">
            <Homepage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );


}
