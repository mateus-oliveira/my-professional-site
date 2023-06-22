import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { GoMarkGithub,} from 'react-icons/go';
import { FiLinkedin } from 'react-icons/fi';
import { FaStackOverflow } from 'react-icons/fa';

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
                        href='https://stackoverflow.com/users/12619605/mateus-alves-de-oliveira ' 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaStackOverflow color="#FFF" size={22}/>
                    </a>
                    <a 
                        href='https://www.linkedin.com/in/mateusalvesdeoliveira/' 
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
