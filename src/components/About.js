import React, {Component} from 'react';
import "../styles/About.css";
import {Link} from 'react-router-dom';

class About extends Component {
    render() { 
        return (
            <div className="about-container">
                <div className="about-body">
                    <div className='about-img'>
                        <img src="https://res.cloudinary.com/rayray89/image/upload/v1573109774/Portfolio/ray-about-thumb.png" alt='profile'/>
                    </div>
                    <p >
                        <span>Hello there, I am Ray a web developer,</span>
                        with experience in Email development, 
                        with exellent project management skills, <br/>
                        and strategic design. My background in software development, <br/>
                        and IT makes my work mindful and competitive approach.
                    </p>
                    <p>
                        <span>My passion is fueled by the understanding of the nuances</span><br/> 
                        of cross-cultural web development.
                        I consider myself a "Forever Student", <br/>
                        eager to build on my develpment foundations in <br/>
                        Front-end and Back-end,
                        but always keeping up with latest <br/>
                        digital marketing strategies through professional development.
                    </p>
                    <p>
                        I am currently working as a Freelance web developer, 
                        I am always interested on new challenges.
                        Here are some 
                        <Link to="/projects"> challenges</Link> I recently accomplished,<br/>
                        If you like the type of work I have done and ready to do You can reach out
                        <Link to="/contact" > Here</Link>. 
                        Let's make your dream project come True!
                    </p>
                </div> 
            </div>
          );
    }
}
 
export default About;
