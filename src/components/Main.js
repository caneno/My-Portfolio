import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Content from './Content';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Content} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    </Switch>
)

export default Main;