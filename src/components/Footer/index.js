import React, { Component } from 'react';

import './styles.css';

import {FiPhone, FiMail, FiSend} from 'react-icons/fi';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="contact">
                    <div className='property'>
                        <div className='icon'><FiPhone color="#FFF" size={22} /></div>
                        <h2>+55 84 998177501</h2>
                    </div>
                    <div className='property'>
                        <div className='icon'><FiMail color="#FFF" size={22} /></div>
                        <h2>matews5522@gmail.com</h2>
                    </div>
                </div>
                <div className="profile_apps">
                    <form>
                        <h2>Contact me</h2>
                        <input type="text" placeholder='Your Email' className="email"/>
                        <textarea placeholder='Message'></textarea>
                        <div className="button">
                            <button>
                                <FiSend color="#FFF" size={22} />
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </footer>
        );
    }
}
