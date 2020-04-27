import React, { Component } from 'react';

import './styles.css';

import projects from './projects.json';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Skills from '../../components/Skills';

export default class MongoDB extends Component {
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
                        My experience with MongoDB started when I began the studies with 
                        NodeJS, in which I used the Mongoose library and the Robo 3T 
                        software. I currently use MongoDB for route logs in the Fretec 
                        application API. I also use Mongo DB in the Hubbi application.<br/>
                        Below are some examples of using MongoDB.
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
