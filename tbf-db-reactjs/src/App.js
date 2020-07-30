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
        fetch("http://localhost/fetchTables.php")
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
                      <h5 className="card-title">Special title treatment</h5>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
  }
}
