import React, { Component } from 'react';

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
                    <h1>Resumo</h1>
                    <p>
                        Meu primeiro contato com SQL no curso foi com SQL Server.
                        Profissionalmente, trabalhei com MySQL alguns anos atrás em uma API com NodeJS e o ORM Sequelize.
                    </p>
                    <h1>Repositórios</h1>
                    <Projects projects={projects} />
                </div>
                <Skills />
                <Footer />
            </div>
        );
    }
}
