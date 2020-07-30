import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ImportCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
            table: 'RI-TBF_SEF_Apparateliste'
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({table: event.target.value});
    }

    render() {
        const { table, items } = this.state;
        return(
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Zum Datenimport</h5>
                        <p className="card-text">Für welche Tabelle soll der Datenimport gestartet werden?</p>
                        <form>
                            <div className="form-row align-items-center">
                                <div className="col-md-8 my-1">
                                    <label className="mr-sm-2 sr-only">Preference</label>
                                    <select className="custom-select mr-sm-2" value={this.state.table} onChange={this.handleChange}>
                                        {items.map((item, i) => (
                                            <option key={i} defaultValue="{item}">{item}</option>
                                        ))}
                                    </select>
                                </div>
                                <Link to={{ pathname: "/import", state: {table: table} }} className="btn btn-primary">zum Import</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}