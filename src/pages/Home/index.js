import React, { Component } from 'react';

import './styles.css';

import Skills from '../../components/Skills';
import Computer from '../../components/Computer';
import Presentation from '../../components/Presentation';

export default class Home extends Component {
    
    render() {
        return (
            <div className="container">
                <Computer />
                <Presentation />
                <h1>My skills</h1>
                <Skills />
            </div>
        );
    }
}
