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
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };

    }

    componentDidMount() {
        fetch("https://tbf-db-backend.ep-webdesign.de/fetchTables.php")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.tables
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }   
        )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Lädt...</div>;
        } else 
          return (
            <div className="d-flex justify-content-center flex-column align-items-stretch w-75">
              <div className="row justify-content-around">
                <ImportCard items={items} />
                <EingabeCard setRedirect={this.renderTable} items={items} />
                <ErzeugenCard setRedirect={this.renderTable} items={items} />
                <AuswertenCard items={items} />
                <ExportCard items={items} />
              </div>
            </div>
          )
  }
}
