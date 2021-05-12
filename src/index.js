import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

import "./index.css";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Prices from "./pages/Prices";
import Team from "./pages/Team";
import Contact from "./pages/Contact";


import reportWebVitals from './reportWebVitals';


ReactDOM.render(
   <Router>
       <div className="app min-h-screen w-full">
           <Nav/>
           <div className="w-full">
               <Switch>
                   <Route exact path="/" component={ () => { return <Redirect to="/home"/> } } />
                   <Route exact path="/home" component={Home}/>
                   <Route exact path="/prices" component={Prices}/>
                   <Route exact path="/contact" component={Contact}/>
                   <Route exact path="/team" component={Team}/>
               </Switch>
           </div>
       </div>
   </Router>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();