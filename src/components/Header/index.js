import React, { Component } from 'react';

import { GoMarkGithub } from 'react-icons/go';
import { FiInstagram, FiLinkedin } from 'react-icons/fi';

import './styles.css';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="welcome">
                    <span>Welcome!</span>
                </div>
                <div className="profiles">
                    <a href='https://github.com/mateus-oliveira' target="_blank">
                        <GoMarkGithub color="#FFF" size={22}/>
                    </a>
                    <a href='https://www.instagram.com/mateus_if/' target="_blank">
                        <FiInstagram color="#FFF" size={22}/>
                    </a>
                    <a href='https://www.linkedin.com/in/mateus-alves-a60043168/' target="_blank">
                        <FiLinkedin color="#FFF" size={22}/>
                    </a>
                </div>
            </header>
        );
    }
}
