import React from 'react';
import {List, ListItem} from 'react-mdl';
import '../styles/NavBar.css';
import {NavLink } from 'react-router-dom';



const NavBar = () => {
    return ( 
        <div className="nav-wrapper">
             <List>
              <ListItem >
                <div className="nav-items hello">
                  <NavLink 
                  exact to="/" 
                  activeClassName='nav-link-active' 
                  className="nav-link" >Hello</NavLink>
                  <div className="nav-sub-items">Me in a Nutshell</div>
                </div>
                
              </ListItem>
              <ListItem>
                <div className="nav-items">
                  <NavLink 
                  exact to="/projects" 
                  className="nav-link" 
                  activeClassName='nav-link-active'>Projects</NavLink>
                  <div className="nav-sub-items">This is My Work</div>
                </div>
                
              </ListItem>
              <ListItem>
                <div className="nav-items">
                  <NavLink 
                  exact to="/about" 
                  className="nav-link"
                  activeClassName='nav-link-active'>About</NavLink>
                  <div className="nav-sub-items">Bit More About Me</div>
                </div>
                
              </ListItem>
              <ListItem>
                <div className="nav-items contact">
                  <NavLink 
                  exact to="/contact" 
                  className="nav-link"
                  activeClassName='nav-link-active'>Contact</NavLink>
                  <div className="nav-sub-items">Say Hi</div>
                </div>
                
              </ListItem>
            </List>
        </div>
     );
}
 
export default NavBar;