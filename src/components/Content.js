import React from 'react';
import "../Content.css"
import TwitterIcon from '../Icons/Twitter.js';
import LinkedinIcon from '../Icons/Linkedin.js';
import GithubIcon from '../Icons/GithubLogo.js';
import Typing from 'react-typing-animation';

const Content = () => {
    return ( 
        <div className="content-body">
            <div className="body-container">
                <h1>Hello I'm Ray</h1>
                <Typing >
                    <h3 style={{color:'white'}}>And I'm here to help you with,<br/>
                    your Email Development.
                    <Typing.Backspace count={18} speed={75}/>
                    Web Development.
                    </h3>
                    
                </Typing>

                <div className="logo-container">
                    <a href="https://github.com/caneno?tab=repositories" className="body-logo">
                        <GithubIcon className="git-icon" width="51px" height="56px" fill="#FC6D00"/>
                    </a>
                    <a href="/" className="body-logo">
                        <LinkedinIcon className="linked-icon" width="45px" height="50px" fill="#FC6D00"/>
                    </a>
                    <a href="/" className="body-logo">
                        <TwitterIcon className="twitt-icon" width="45px" height="50px" fill="#FC6D00"/>
                    </a>
                </div>
            </div> 
        </div>
     );
}
 
export default Content;