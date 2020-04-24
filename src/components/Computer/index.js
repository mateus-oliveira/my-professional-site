import React, { Component } from 'react';
import computer from '../../assets/computer.jpeg';
import './styles.css';

export default class Computer extends Component {
    render() {
        return (
            <div className="computer">
                <img src={computer}/>
                <div>
                    <h1>Mateus Alves de Oliveira</h1>
                    <h3>Full stack developer</h3>
                    <h3>Natal, 2020</h3>
                </div>
            </div>
        );
    }
}
