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
            return <div>Loading...</div>;
        } else 
          return (
            <div className="condiv home">
              <div className="row justify-content-center">
                <ImportCard items={items} />
                <EingabeCard setRedirect={this.renderTable} items={items} />
                <ErzeugenCard items={items} />
                <AuswertenCard items={items} />
                <ExportCard items={items} />
              </div>
            </div>
          )
  }
}
