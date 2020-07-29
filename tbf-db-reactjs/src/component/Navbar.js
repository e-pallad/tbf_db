import React, { Component } from 'react';
import Navitem from './Navitem';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NavItemActive: ''
        }
    }
    activeitem = (x) => {
        if(this.state.NavItemActive.length>0) {
          document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x},() => {
          document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    render() {
        return (
            <nav>
                <ul>
                    <Navitem item="Home" tolink="/" activec={this.activeitem}></Navitem>
                    <Navitem item="Import" tolink="/import" activec={this.activeitem}></Navitem>
                    <Navitem item="Export" tolink="/export" activec={this.activeitem}></Navitem>
                    <Navitem item="Eingabe" tolink="/eingabe" activec={this.activeitem}></Navitem>
                </ul>
            </nav>
        )
    }
}