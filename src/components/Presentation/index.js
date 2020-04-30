import React, { Component } from 'react';
import {FiFileText} from 'react-icons/fi';

import './styles.css';

import mateus from '../../assets/mateus.jpg';

export default class Presentation extends Component {
  render() {
    return (
        <div className="presentation">
            <h1>Presentation</h1>
            <p>
                Mateus Alves de Oliveira is currently a student in the Chemical Engineering 
                course at UFRN. He is also a Computer Technician trained at the IFRN campus 
                Parnamirim. At the moment, he works as a programmer at startup Hubbi as a 
                full stack developer in Javascript. At IFRN, he was a monitor of the 
                Chemistry disciplines, and with that, he developed a small package with 
                2D animations with Python turtle.
            </p>
            <h1>Professional experiences</h1>
            <div className="details">
                <div className="profile-picture">
                    <img src={mateus} alt="Mateus"/>
                    <h2>Mateus Alves de Oliveira</h2>
                    <h3>Full stack developer</h3>
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
                        <h2>Languages and platforms</h2>
                        <li>HTML5, CSS3 e Javascript</li>
                        <li>ReactJS</li>
                        <li>React Native</li>
                        <ul><li>EXPO</li></ul>
                        <li>Angular</li>
                        <ul><li>Type Script</li></ul>
                        <li>NodeJS</li>
                        <ul><li>Express</li></ul>
                        <li>Python</li>
                        <ul>
                            <li>Flask</li>
                            <li>Turtle</li>
                            <li>VPython</li>
                            <li>MkDocs</li>
                            <li>Sphinx</li>
                        </ul>
                        <li>MySQL</li>
                        <ul>
                            <li>SQL</li>
                            <li>mysql-connector-python (Python)</li>
                            <li>flask-mysqldb (Python)</li>
                            <li>sequelize (NodeJS)</li>
                        </ul>
                        <li>MongoDB</li>
                        <ul>
                            <li>pymongo (Python)</li>
                            <li>mongoose (NodeJS)</li>
                        </ul>
                    </ul>

                    <ul>
                        <h2>Other tools</h2>
                        <li>VSCode</li>
                        <li>PyCharm</li>
                        <li>Android Studio</li>
                        <li>XCode</li>
                        <li>Sublime Text</li>
                        <li>Git</li>
                        <li>Firebase</li>
                        <li>Workbench</li>
                        <li>Robo 3T</li>
                        <li>Insomnia</li>  
                        <li>Bitbucket</li>  
                        <li>Trello</li>
                        <li>SCRUM</li>                          
                    </ul>
                </div>
            </div>
        </div>
    );
  }
}
