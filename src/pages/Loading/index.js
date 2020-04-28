import React, { Component } from 'react';

import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import './styles.css';

import Header from '../../components/Header';

export default class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <Header />
                <div className="loader">
                    <Loader
                        type="Rings"
                        color="#000"
                        height={300}
                        width={300}
                        timeout={30000} 
                    />
                </div>
            </div>
        );
    }
}
