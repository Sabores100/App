import React, { Component } from 'react';
import logoSabores from '../../assets/logoSabores.png';


export default class HomeComponent extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logoSabores} className="App-logo" alt="logo" />
                </header>
            </div>
        );
    }
}