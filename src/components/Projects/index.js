import React, { Component } from 'react';

import './styles.css';

import {FiExternalLink} from 'react-icons/fi';

export default class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {
            projects: this.props.projects,
        }
    }

    renderProjects = () => {
        const {projects} = this.state;
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
                        >
                            <span>Acessar link</span>
                            <FiExternalLink size={20}/>
                        </a>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="projects">
                <div className="header_projects">
                    <div id="num">
                        <span><b>#</b></span>
                    </div>
                    <div id="title">
                        <span><b>Title</b></span>
                    </div>
                    <div id="description">
                        <span><b>Description</b></span>
                    </div>
                    <div id="link">
                        <span><b>Link</b></span>
                    </div>
                </div>
                {this.renderProjects()}
            </div>
        );
    }
}
