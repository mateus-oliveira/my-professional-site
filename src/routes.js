import React, {Suspense, lazy} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Loading from './pages/Loading';

const Home  = lazy(()=> import('./pages/Home'));
const HTML_CSS_JS  = lazy(()=> import('./pages/HTML_CSS_JS'));
const Angular  = lazy(()=> import('./pages/Angular'));
const ReactJS  = lazy(()=> import('./pages/ReactJS'));
const Node  = lazy(()=> import('./pages/Node'));
const Python  = lazy(()=> import('./pages/Python'));
const MySQL  = lazy(()=> import('./pages/MySQL'));
const MongoDB  = lazy(()=> import('./pages/MongoDB'));


export default function Routes(){

    return (
        <BrowserRouter>
            <Switch>
                <Suspense fallback={<Loading />}>
                    <Route path="/" exact component={Home} />
                    <Route path="/html-css-js" exact component={HTML_CSS_JS} />
                    <Route path="/angular" exact component={Angular} />
                    <Route path="/react" exact component={ReactJS} />
                    <Route path="/node" exact component={Node} />
                    <Route path="/python" exact component={Python} />
                    <Route path="/mysql" exact component={MySQL} />
                    <Route path="/mongodb" exact component={MongoDB} />
                </Suspense >
            </Switch>
        </BrowserRouter>
    );
};