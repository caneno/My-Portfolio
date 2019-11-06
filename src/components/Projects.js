import React, {Component} from 'react';
import '../styles/Projects.css';
import GithubIcon from '../Icons/GithubLogo.js';
import {Grid,Cell,Card,CardTitle,CardText,CardActions,CardMenu,Button} from 'react-mdl';

class Projects extends Component {
    render() { 
        return (
            <div className="pro-container" style={{width: '100%', margin: 'auto'}}>
                
                <Grid className="demo-grid-1" align='middle'>
                    <Cell col={12}>
                        <div className='prj-header'>
                            My Work
                        </div>
                    </Cell>
                    <Cell col={4} >
                        {/* Promotional card -------------------------------- START */}
                        <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://res.cloudinary.com/rayray89/image/upload/v1571437820/Portfolio/promotional-thumb.png) center / cover'}}>Promotional Email</CardTitle>
                                <CardText>
                                    Email Template with live demo and code, showcasing a product being promoted.
                                    Email shows clear call to actions and some mockup ads.
                                </CardText>
                            <CardActions border>
                                <a href="https://caneno.github.io/Promotional-Email/" target='_blanc'><Button>Live Demo</Button></a>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <a href="https://github.com/caneno/Promotional-Email/tree/gh-pages" target="_blanc"><GithubIcon className="github-projects" width="24px" height="24px" fill="#FC6D00"/></a>
                                
                            </CardMenu>
                        </Card>
                        {/* Promotional card ----------------------------------- END */}
                        {/* Transactionla car ------------------------------------START */}
                    </Cell>
                    <Cell col={4}>
                    <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://res.cloudinary.com/rayray89/image/upload/v1571438608/Portfolio/transactional-thumb.png) center / cover'}}>Transactional Email</CardTitle>
                                <CardText>
                                    Mockup of a Transational email,Design not done by me. This is just to show
                                    my ability to grab a design and convert it into HTML, that works.
                                </CardText>
                            <CardActions border>
                                <a href="https://caneno.github.io/Transactional-Email/" target='_blanc'><Button>Live Demo</Button></a>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                            <a href="https://github.com/caneno/Transactional-Email/tree/gh-pages" target="_blanc"><GithubIcon className="github-projects" width="24px" height="24px" fill="#FC6D00"/></a>
                            </CardMenu>
                        </Card>
                    </Cell>
                    {/* Transactional card ---------------------------------------END */}
                    {/* Newsletter card ------------------------------------------START */}
                    <Cell col={4}>
                    <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://res.cloudinary.com/rayray89/image/upload/v1571551570/Portfolio/newsletter.png) center / cover'}}>Newsletter Email</CardTitle>
                                <CardText>
                                    Simple Newsletter email design, 
                                    help keep customers informed about upcoming important dates, 
                                    and other product news
                                </CardText>
                            <CardActions border>
                                <a href="https://caneno.github.io/Newsletter-Email/" target='_blanc'><Button>Live Demo</Button></a>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                            <a href="https://github.com/caneno/Newsletter-Email/tree/gh-pages" target="_blanc"><GithubIcon className="github-projects" width="24px" height="24px" fill="#FC6D00"/></a>
                            </CardMenu>
                        </Card>
                    </Cell>
                    {/* Newsletter card -----------------------------------------END */}
                </Grid>
            </div>
          );
    }
}
 
export default Projects;
