import React, { Component } from 'react';
import emailjs from 'emailjs-com'

import './styles.css';

import {FiPhone, FiMail, FiSend, FiRotateCcw} from 'react-icons/fi';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { name, email, message } = this.state

        let templateParams = {
            from_name: email,
            to_name: 'matews5522@gmail.com',
            subject: `Site pessoal - Mensagem de ${name}.`,
            message_html: `<p>${message}</p>`,
        }
        await emailjs.send(
            'gmail',
            'template_JLfQA7ww',
            templateParams,
            "user_W3N5gxqh4cqieREnXqf47"
        )
        this.resetForm();
    };

    resetForm = () => this.setState({name: '', email: '', message: ''})

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
                <div className="contact_form">
                    <form onSubmit={this.handleSubmit} method="POST">
                        <h2>Contact me</h2>
                        <input 
                            type="text" 
                            placeholder='Name' 
                            value={this.state.name} 
                            onChange={event => this.setState({name: event.target.value})} 
                        />
                        <input 
                            type="email" 
                            placeholder='Email' 
                            aria-describedby="emailHelp" 
                            value={this.state.email} 
                            onChange={event => this.setState({email: event.target.value})} 
                        />
                        <textarea 
                            rows="5" 
                            value={this.state.message} 
                            placeholder='Message'
                            onChange={event => this.setState({message: event.target.value})} 
                        />
                        <div className="button">
                            <button type="button" onClick={this.resetForm}>
                                <FiRotateCcw className='form-icon'/>
                                Reset
                            </button>
                            <button type="submit">
                                <FiSend className='form-icon'/>
                                Send
                            </button>
                        </div>
                        
                    </form>
                </div>
            </footer>
        );
    }
}
