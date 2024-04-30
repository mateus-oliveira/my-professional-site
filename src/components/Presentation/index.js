import React, { Component } from 'react';
import {FiFileText} from 'react-icons/fi';

import './styles.css';

import mateus from '../../assets/mateus.jpg';

export default class Presentation extends Component {
  render() {
    return (
        <div className="presentation">
            <h1>Apresentação</h1>
            <p>
                Olá! Meu nome é Mateus e eu sou desenvolvedor web fullstack.
                Estou concluindo o curso superior em Tecnologia da Informação na UFRN.
                Também sou Técnico em Informática pelo IFRN no qual me formei em 2017,
                onde tive meu primeiro contato com desenvolvimento de software.
                Há 4 anos venho trabalhando com Python no backend e Javascript no frontend web.
                Sou também um entusiasta do mundo de desenvolvimento de jogos digitais, especialmente com Unity e C#.
            </p>
            <h1>Habilidades e Competências</h1>
            <div className="details">
                <div className="profile-picture">
                    <img src={mateus} alt="Mateus"/>
                    <h2>Mateus Alves de Oliveira</h2>
                    <h3>Full stack web developer</h3>
                    <a 
                        href='https://drive.google.com/open?id=1npjs5eXFs1xyohcu9IHrn03y6AxGDopL'
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                        <FiFileText size={22} />
                        <h3>Currículo</h3>
                    </a>
                </div>
                <div className="profesional">
                    <ul>
                        <h2>Principais</h2>
                        <li>Python</li>
                        <ul>
                            <li>Django</li>
                            <li>Flask</li>
                            <li>Pyramid</li>
                        </ul>
                        <li>Javascript</li>
                        <ul>
                            <li>VueJS</li>
                            <li>ReactJS</li>
                            <li>React Native</li>
                            <li>jQuery</li>
                            <li>Express</li>
                        </ul>
                        <li>CSS</li>
                        <ul>
                            <li>Tailwind</li>
                            <li>Vuetify</li>
                        </ul>
                        <li>Database</li>
                        <ul>
                            <li>PostgreSQL</li>
                            <li>MongoDB</li>
                            <li>MySQL</li>
                        </ul>
                        <li>Game Development</li>
                        <ul>
                            <li>Unity + C#</li>
                            <li>IA para jogos</li>
                            <li>Pixel Art</li>
                        </ul>
                    </ul>

                    <ul>
                        <h2>Outras</h2>
                        <li>AWS</li>
                        <li>Git</li>
                        <li>Redis</li>
                        <li>Metodologia SCRUM</li>                          
                        <li>Firebase</li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }
}
