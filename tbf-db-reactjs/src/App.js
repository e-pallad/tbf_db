import React, { Component } from 'react';
import './App.css';

import ImportCard from './component/ImportCard';
import ExportCard from './component/ExportCard';
import EingabeCard from './component/EingabeCard';

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
              <div className="row row-cols-2">

                <ImportCard items={items} />
                <ExportCard items={items} />
                <EingabeCard setRedirect={this.renderTable} items={items} />

                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Platzhalter</h5>
                      <p className="card-text">Platzhalter Text</p>
                      <a href="https://www.reactjs.org" className="btn btn-primary">Hier könnte ihr Button stehen</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
  }
}
