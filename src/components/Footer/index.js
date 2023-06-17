import React, { Component } from 'react';

import './styles.css';

import {FiPhone, FiMail} from 'react-icons/fi';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="contact">
                    <div className='property'>
                        <div className='icon'><FiPhone color="#FFF" size={22} /></div>
                        <h2>+55 84 994023093</h2>
                    </div>
                    <div className='property'>
                        <div className='icon'><FiMail color="#FFF" size={22} /></div>
                        <h2>devmateusalves@gmail.com</h2>
                    </div>
                </div>
            </footer>
        );
    }
}
