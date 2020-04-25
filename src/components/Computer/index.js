import React, { Component } from 'react';
import computer from '../../assets/computer.jpeg';
import './styles.css';

export default class Computer extends Component {
    render() {
        return (
            <div className="computer">
                <img src={computer}/>
            </div>
        );
    }
}
