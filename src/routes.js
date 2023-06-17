import React, {Suspense, lazy} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Loading from './pages/Loading';

const Home  = lazy(()=> import('./pages/Home'));
const HTML_CSS_JS  = lazy(()=> import('./pages/HTML_CSS_JS'));
const ReactJS  = lazy(()=> import('./pages/ReactJS'));
const Node  = lazy(()=> import('./pages/Node'));
const Python  = lazy(()=> import('./pages/Python'));
const Database  = lazy(()=> import('./pages/Database'));
const Unity  = lazy(()=> import('./pages/Unity'));


export default function Routes(){

    return (
        <BrowserRouter>
            <Switch>
                <Suspense fallback={<Loading />}>
                    <Route path="/" exact component={Home} />
                    <Route path="/html-css-js" exact component={HTML_CSS_JS} />
                    <Route path="/react" exact component={ReactJS} />
                    <Route path="/node" exact component={Node} />
                    <Route path="/python" exact component={Python} />
                    <Route path="/database" exact component={Database} />
                    <Route path="/unity" exact component={Unity} />
                </Suspense >
            </Switch>
        </BrowserRouter>
    );
};