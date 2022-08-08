import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import "./main-page.css";

class MainPage extends Component {
    render(){
       return(
        <div id="mainPageContainer">
          <p>Main Page</p>
          <h2>Partner Up</h2>
          <nav id="topNav">
            <ul>
                <p>1)Switch between pages inside the main page</p>
                {/* <li>
                    <NavLink> </NavLink>
                </li>
                <li>
                    <NavLink> </NavLink>
                </li>
                <li>
                    <NavLink> </NavLink>
                </li> */}
            </ul>    
          </nav>  
          <div id="contentSpace">
            <p>2)Content Space</p>
          </div>
          <div id="bottomNav">
            <p>3)Bottom Nav for quick switching</p>
          </div>
        </div>
       )
    }
}

export default MainPage;