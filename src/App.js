import React from 'react';
import './global.css';

import Routes from './routes';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <div className='app'>
            <Header />
            <Routes />
            <Footer />
        </div>
    );
}

export default App;
