import React, { Component } from 'react';

import './styles.css';

import Computer from '../../components/Computer';
import Presentation from '../../components/Presentation';

export default class Home extends Component {
    
    render() {
        return (
            <div className="container">
                <Computer />
                <Presentation />
            </div>
        );
    }
}
