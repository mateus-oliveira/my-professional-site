import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from './pages/Home';
import HTML_CSS_JS from './pages/HTML_CSS_JS';
import Angular from './pages/Angular';
import ReactJS from './pages/ReactJS';
import Node from './pages/Node';
import Python from './pages/Python';
import MySQL from './pages/MySQL';
import MongoDB from './pages/MongoDB';


export default function Routes(){

    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/html-css-js" exact component={HTML_CSS_JS} />
            <Route path="/angular" exact component={Angular} />
            <Route path="/react" exact component={ReactJS} />
            <Route path="/node" exact component={Node} />
            <Route path="/python" exact component={Python} />
            <Route path="/mysql" exact component={MySQL} />
            <Route path="/mongodb" exact component={MongoDB} />
        </BrowserRouter>
    );
};