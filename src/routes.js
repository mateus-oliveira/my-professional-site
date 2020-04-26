import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import HTML_CSS_JS from './pages/HTML_CSS_JS';
import Angular from './pages/Angular';

import Header from './components/Header';
import Footer from './components/Footer';
import Skills from './components/Skills';

export default function Routes(){
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/html-css-js" exact component={HTML_CSS_JS} />
                <Route path="/angular" exact component={Angular} />
            </Switch>
            <Skills />
            <Footer />
        </BrowserRouter>
    );
};