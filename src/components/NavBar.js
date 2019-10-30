import React from 'react';
import {List, ListItem} from 'react-mdl';
import '../NavBar.css';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return ( 
        <div className="nav-wrapper">
             <List>
              <ListItem >
                <div className="nav-items hello">
                  <Link to="/" className="nav-link">Hello</Link>
                  <div className="nav-sub-items">Me in a Nutshell</div>
                </div>
                
              </ListItem>
              <ListItem>
                <div className="nav-items">
                  <Link to="/projects" className="nav-link">Projects</Link>
                  <div className="nav-sub-items">This is My Work</div>
                </div>
                
              </ListItem>
              <ListItem>
                <div className="nav-items">
                  <Link to="/about" className="nav-link">About</Link>
                  <div className="nav-sub-items">Bit More About Me</div>
                </div>
                
              </ListItem>
              <ListItem>
                <div className="nav-items contact">
                  <Link to="/contact" className="nav-link">Contact</Link>
                  <div className="nav-sub-items">Say Hi</div>
                </div>
                
              </ListItem>
            </List>
        </div>
     );
}
 
export default NavBar;