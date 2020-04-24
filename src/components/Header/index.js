import React, { Component } from 'react';

import { GoMarkGithub } from 'react-icons/go';
import { FiInstagram, FiLinkedin } from 'react-icons/fi';

import './styles.css';

import mateus from '../../assets/mateus.jpg';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="welcome">
                    <img src={mateus} alt="Mateus Alves de Oliveira"/>
                    <span>Welcome!</span>
                </div>
                <div className="profiles">
                    <a href='https://github.com/mateus-oliveira' target="_blank">
                        <GoMarkGithub color="#FFF" />
                    </a>
                    <a href='https://www.instagram.com/mateus_if/' target="_blank">
                        <FiInstagram color="#FFF" />
                    </a>
                    <a href='https://www.linkedin.com/in/mateus-alves-a60043168/' target="_blank">
                        <FiLinkedin color="#FFF" />
                    </a>
                </div>
            </header>
        );
    }
}
