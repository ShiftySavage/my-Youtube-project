import React, { Component } from "react";
import {
      Route, Routes,
      NavLink,
      HashRouter
    } from "react-router-dom";
    import Home from "./Home";
    import Subscribed from "./Subscribed";
    import Direct from "./Direct";
 
    class Main extends Component {
        render() {
          return (
            <HashRouter>
              <div>
                <h1>Youtube</h1>
                <ul className="header">
                  <li><NavLink exact to="/">Home</NavLink></li>
                  <li><NavLink to="/subscribed">Subscribed Channels</NavLink></li>
                  <li><NavLink to="/direct">Direct Messaging</NavLink></li>
                </ul>
                <div className="content">
                <Routes>
                  <Route exact path="/" element={<Home />}/>
                  <Route path="/subscribed" element={<Subscribed />}/>
                  <Route path="/direct" element={<Direct />}/>
                </Routes>
                </div>
              </div>
            </HashRouter>
          );
        }
      }
 
export default Main;