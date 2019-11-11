import React from 'react';
import "../styles/Content.css"
import TwitterIcon from '../Icons/Twitter.js';
import LinkedinIcon from '../Icons/Linkedin.js';
import GithubIcon from '../Icons/GithubLogo.js';
import Typing from 'react-typing-animation';

const Content = () => {
    return ( 
        <div className="content-body">
            <div className="body-container">
                <div className='cl-h1'>Hello I'm Ray</div>
                <Typing speed={55}>
                    <div style={{color:'white'}} className='cl-h3'>
                        And I'm here to help you with,<br/>
                        your Web Development.<br/>
                        Email Development and<br/>
                         Marketing.
                        <Typing.Backspace count={33} speed={50}/>
                        <br/>Everything you need.
                    
                    </div>
                </Typing>

                <div className="logo-container">
                    <a href="https://github.com/caneno?tab=repositories" className="body-logo" target='_blank'>
                        <GithubIcon className="git-icon" width="51px" height="56px" fill="#FC6D00" />
                    </a>
                    <a href="www.linkedin.com/in/raymundo-vasquez-a71ab1132" className="body-logo" target='_blank'>
                        <LinkedinIcon className="linked-icon" width="45px" height="50px" fill="#FC6D00"/>
                    </a>
                    <a href="https://twitter.com/Nook_O_L_Things" className="body-logo" target='_blank'>
                        <TwitterIcon className="twitt-icon" width="45px" height="50px" fill="#FC6D00"/>
                    </a>
                </div>
            </div> 
        </div>
     );
}
 
export default Content;