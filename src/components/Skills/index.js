import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

import htmlcssjs from '../../assets/htmlcssjs.png';
import react from '../../assets/react.png';
import node from '../../assets/node.png';
import python from '../../assets/python.png';
import database from '../../assets/database.png';
import unity from '../../assets/unity.png';


const languages = [
    {
        image: python,
        name: 'Python',
        route: '/python',
    },
    {
        image: react,
        name: 'ReactJS',
        route: '/react',
    },
    {
        image: node,
        name: 'NodeJS',
        route: '/node',
    },
    {
        image: database,
        name: 'Database',
        route: '/database',
    },
    {
        image: htmlcssjs,
        name: 'HTML, CSS e JS',
        route: '/html-css-js',
    },
    {
        image: unity,
        name: 'Unity',
        route: '/unity',
        cssClass: 'unity',
    },
]

export default class Skills extends Component {
    render_skills (){
        return languages.map((item, index) => {
            return (
                <div key={index} className="languages">    
                    <Link to={item.route}>
                        <img 
                            src={item.image} 
                            className={`logos ${item.cssClass}`} 
                            alt={item.name}
                        />
                    </Link>
                    <strong>{item.name}</strong>
                </div>
            )
        })
    }
    render() {
        return (    
            <div className='skills'>
                <h1>Projetos pessoais - clique para ver</h1>
                <div className="images">
                    {this.render_skills()}
                </div>
            </div>
        );
    }
}
