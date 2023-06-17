import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { GoMarkGithub } from 'react-icons/go';
import { FiInstagram, FiLinkedin } from 'react-icons/fi';

import './styles.css';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="welcome">
                    <Link className="home" to='/'>Bem-vind@!</Link>
                </div>
                <div className="profiles">
                    <a 
                        href='https://github.com/mateus-oliveira' 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GoMarkGithub color="#FFF" size={22}/>
                    </a>
                    <a 
                        href='https://www.instagram.com/mateus_oliveira.py/' 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiInstagram color="#FFF" size={22}/>
                    </a>
                    <a 
                        href='https://www.linkedin.com/in/mateus-alves-de-oliveira-a60043168/' 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiLinkedin color="#FFF" size={22}/>
                    </a>
                </div>
            </header>
        );
    }
}
