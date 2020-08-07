import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ImportCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({table: event.target.value});
    }

    render() {
        const { items } = this.state;
        return(
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Zum Datenimport</h5>
                        <p className="card-text">Für welche Tabelle soll der Datenimport gestartet werden?</p>
                        <div className="form-row align-items-center">
                            <div className="col-md-8 my-1">
                                <Link to={{ pathname: "/import", state: {tables: items} }} className="btn btn-primary">zum Import</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}