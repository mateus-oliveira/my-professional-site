import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

import angular from '../../assets/angular.png';
import htmlcssjs from '../../assets/htmlcssjs.png';
import react from '../../assets/react.png';
import node from '../../assets/node.png';
import python from '../../assets/python.png';
import mysql from '../../assets/mysql.png';
import mongodb from '../../assets/mongodb.png';

const languages = [
    htmlcssjs,
    angular,
    react,
    node,
    python,
    mysql,
    mongodb,
];

const name_languages = [
    'Html, CSS e JS',
    'Angular',
    'ReactJS',
    'NodeJS',
    'Python',
    'MySQL',
    'MongoDB',
];

const routes = [
    '/html-css-js',
    '/angular',
    '/react',
    '/node',
    '/python',
    '/mysql',
    '/mongodb',
]

export default class Skills extends Component {
    render_skills (){
        return languages.map((item, index) => {
            return (
                <div key={index} className="languages">    
                    <Link to={routes[index]}>
                        <img 
                            src={item} 
                            className='logos' 
                            alt={name_languages[index]}
                        />
                    </Link>
                </div>
            )
        })
    }
    render() {
        return (    
            <div className='skills'>
                <h1>My skills - click any button</h1>
                <div className="images">
                    {this.render_skills()}
                </div>
            </div>
        );
    }
}
