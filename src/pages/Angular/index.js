import React, { Component } from 'react';

import './styles.css';

import projects from './projects.json';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Skills from '../../components/Skills';

export default class Angular extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
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
                    <div className="item">
                        <span>{item.description}</span>
                    </div>
                    <div className="item">
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
                        My experience with Angular started from a demand that arose in the 
                        company where I work, because the front end of the Hubbi system was 
                        developed in Angular. With that, I had to know the structure of 
                        Angular and learn Type Script. <br/>
                        I also developed other applications to serve as an example. <br/>
                        See the table below.
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
