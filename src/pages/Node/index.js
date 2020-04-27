import React, { Component } from 'react';

import './styles.css';

import projects from './projects.json';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Skills from '../../components/Skills';

export default class Node extends Component {
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
                        I started to study Node using materials made available by Rocketseat. 
                        Shortly afterwards I got a job at the startup Hubbi as a 
                        full stack developer, there we used Node throughout the backend, 
                        with access to MongoDB and MySQL banks. <br/>
                        Below are some examples of implementing Rest API with NodeJS.
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
