import React, { Component } from 'react';
import './App.css';

import ImportCard from './cards/ImportCard';
import EingabeCard from './cards/EingabeCard';
import ErzeugenCard from './cards/ErzeugenCard';
import AuswertenCard from './cards/AuswertenCard';
import ExportCard from './cards/ExportCard';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="d-flex justify-content-around">
                <div className="row">
                    <ImportCard />
                    <EingabeCard setRedirect={this.renderTable} />
                    <AuswertenCard />
                    <ExportCard />
                    <ErzeugenCard />
                </div>
            </div>
        )
    }
}
