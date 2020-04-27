import React, { Component } from 'react';

import './styles.css';

import projects from './projects.json';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Skills from '../../components/Skills';

export default class HTML_CSS_JS extends Component {
    constructor (props){
        super(props);        
        this.state = {
            history: this.props.history,
        };
    }
    componentDidMount() { window.scrollTo(0, 0) }

    renderTable = () => {
        return projects.map((item, index)=>{
            return (
                <div className="project" key={index}>
                    <div id="num">
                        <span>{index+1}</span>
                    </div>
                    <div id="title">
                        <span>{item.title}</span>
                    </div>
                    <div id="description">
                        <span>{item.description}</span>
                    </div>
                    <div id="link">
                        <a  
                            href={item.link} 
                            target="_blank"
                            rel="noopener noreferrer"
                        >{item.link}</a>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="container">
                <Header />
                <div className="experience">
                    <h1>Resume</h1>
                    <p>
                        My experience with pure HTML, CSS and Javascript started at school, 
                        I have some projects as an example that I developed as a student and 
                        are listed in the table below. Nowadays, I work with tools like 
                        Angular and React that require knowledge of HTML, CSS and Javascript.
                    </p>
                    <h1>My projects</h1>
                    <div className="projects">
                        <div className="header"></div>
                        {this.renderTable()}
                    </div>
                </div>
                <Skills />
                <Footer />
            </div>
        );
    }
}
