import React, { Component } from 'react';

import './styles.css';

import projects from './projects.json';

import Projects from '../../components/Projects';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Skills from '../../components/Skills';

export default class Angular extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
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
                    <Projects projects={projects} />
                </div>
                <Skills />
                <Footer />
            </div>
        );
    }
}
