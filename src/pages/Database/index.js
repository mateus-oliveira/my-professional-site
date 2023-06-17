import React, { Component } from 'react';

import projects from './projects.json';

import Projects from '../../components/Projects';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Skills from '../../components/Skills';

export default class Database extends Component {
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
                        Minha experiência com banco de dados começou desde estudos em 2017 à atuação profissional até então.
                        Minhas primeiras experiências profissionais foi com MySQL. Algum tempo depois, passei a trabalhar em projetos
                        que utilizam PostgreSQL, o que foi uma fácil adaptação já que achei bem semelhante ao MySQL.
                        Hoje trabalho em projetos que usam PostgreSQL e MongoDB também.
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
