import React, { Component } from 'react';


import './styles.css';

import Presentation from '../../components/Presentation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Skills from '../../components/Skills';

export default class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="container">
                <Header />
                <Presentation />
                <Skills />
                <Footer />
            </div>
        );
    }
}
