import React, { Component } from 'react';

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
                    <h1>Resumo</h1>
                    <p>
                        Python foi a primeira linguagem de programação que aprendi, desde 2017 uso esta linguagem para estudos e trabalhos.
                        Ainda como estudante, eu desenvolvi um projeto integrador que tinha como objetivo desenvolver simples animações 2D com o módulo Turtle.
                        Apesar de simples, foi uma grande forma que tive para aprender lógica de programação e orientação a objetos.
                        Algum tempo depois, comecei a usar Flask e Django já profissionalmente. Hoje em dia, trabalho como desenvolvedor fullstack, e no backend trabalho
                        em projetos que usam Django, Flask e Pyramid. Posso dizer que é a minha linguagem de programação preferida e a que mais domino.
                        Tive algumas ligeiras oportunidades também de trabalhar com Pandas em algumas tasks de Data Science, apesar de não ser muito experiente nessa área.
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
