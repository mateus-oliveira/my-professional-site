import React, { Component } from 'react';

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
                </div>
                <div className="profesional">
                    <ul>
                        <h2>Languages and platforms</h2>
                        <li>HTML, CSS e Javascript</li>
                        <li>React</li>
                        <ul>
                            <li>ReactJS</li>
                            <li>React Native</li>
                        </ul>
                        <li>Angular</li>
                        <ul><li>Type Script</li></ul>
                        <li>NodeJS</li>
                        <ul><li>Express</li></ul>
                        <li>Python</li>
                        <ul>
                            <li>Flask</li>
                            <li>Turtle</li>
                            <li>VPython</li>
                            <li>Sphinx</li>
                            <li>MkDocs</li>
                        </ul>
                        <li>MySQL</li>
                        <ul>
                            <li>Flask-mysqldb (Python)</li>
                            <li>Sequelize (NodeJS)</li>
                        </ul>
                        <li>MongoDB</li>
                        <ul>
                            <li>PyMongo (Python)</li>
                            <li>Mongoose (NodeJS)</li>
                        </ul>
                    </ul>

                    <ul>
                        <h2>Other tools</h2>
                        <li>VSCode</li>
                        <li>PyCharm</li>
                        <li>AndroidStudio</li>
                        <li>XCode</li>
                        <li>Firebase</li>
                        <li>EXPO</li>
                        <li>Workbench</li>
                        <li>Robo 3T</li>
                        <li>Insomnia</li>                        
                    </ul>
                </div>
            </div>
        </div>
    );
  }
}
