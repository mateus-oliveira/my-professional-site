import React, { Component } from 'react';

import './styles.css';

import projects from './projects.json';

import Projects from '../../components/Projects';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Skills from '../../components/Skills';

export default class MySQL extends Component {
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
                        I learned SQL in the technical course with another relational bank, 
                        however, my experience with MySQL started in my first professional 
                        experience, in which I developed an API with NodeJS accessing the 
                        MySQL database, I worked deeply on the conceptual model and made 
                        use of ORM Sequelize and Workbench software. Currently, I use MySQL 
                        for almost all applications I develop, 
                        as I appreciate its ease of use and performance.<br />
                        Below are some examples of using MySQL.
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
