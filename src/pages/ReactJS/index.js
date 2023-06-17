import React, { Component } from 'react';

import projects from './projects.json';

import Projects from '../../components/Projects';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Skills from '../../components/Skills';

export default class ReactJS extends Component {
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
                    <h1>Resumo</h1>
                    <p>
                        I got to know ReactJS and React Native through materials made 
                        available by Rocketseat. Shortly afterwards I got a job at the 
                        startup Hubbi as a full stack developer, there we used React Native. 
                        We are currently developing two applications and also a web version 
                        with ReactJS.<br/>
                        In addition, I also developed other applications with ReactJS and
                        React Native, including this website. Below are some examples.
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
