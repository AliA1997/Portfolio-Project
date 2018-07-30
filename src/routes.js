import React from 'react';
import About from './components/presentational/About/About';
import Contact from './components/container/Contact/Contact';
import Home from './components/container/Home/Home';
import Projects from './components/container/Projects/Projects';
import Tutorials from './components/container/Tutorials/Tutorials';
import { Switch, Route } from 'react-router-dom';


export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/projects' component={Projects} />
        <Route path='/tutorials' component={Tutorials} />
    </Switch>
);
