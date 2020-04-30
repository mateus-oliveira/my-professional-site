import React, { Component } from 'react';

import './styles.css';

import projects from './projects.json';

import Projects from '../../components/Projects';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Skills from '../../components/Skills';

export default class Python extends Component {
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
                        Python was the first programming language I actually learned. 
                        I learned object orientation in this language. With Python, 
                        I haven't gotten to work professionally yet, however, 
                        I've developed many things in an academic way, including a 
                        package called Quimanima and I'm implementing all of its 
                        documentation with MkDocs with Markdown. In addition, I also know how to make 
                        documentation using Sphinx. 
                        Eventually I present short courses on animations with the libraries
                        Turtle and VPython. My next goal is to present something about 
                        Rest API with Flask.<br/>
                        I always try to update myself in Python, currently, 
                        I am studying Flask and Django.<br/>
                        Below are some of my projects with Python.
                    </p>
                    <h1>My projects</h1>
                    <Projects projects={projects} />
                </div>
                <Skills />
                <Footer />
            </div>
        );
    }
}
