import React, { Component } from 'react'

export default class Export extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
            table: 'RI-TBF_SEF_Apparateliste'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleEingabe = this.handleEingabe.bind(this);
    }

    handleChange(event) {
        this.setState({table: event.target.value});
    }

    handleEingabe(event) {
        event.preventDefault();
        fetch("http://localhost/renderTables.php?table=" + this.state.table)
        .then(res => res.json())
        .then((result) => {
            this.props.setRedirect(true, result.content);
        });
        
    }

    render() {
        const { table, items } = this.state;
        return(
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Zur Eingabe</h5>
                        <p className="card-text">In welcher Tabelle sollen Daten geändert werden?</p>
                        <form onSubmit={this.handleEingabe}>
                            <div className="form-row align-items-center">
                                <div className="col-md-8 my-1">
                                    <label className="mr-sm-2 sr-only">Preference</label>
                                    <select className="custom-select mr-sm-2" value={this.state.table} onChange={this.handleChange}>
                                        {items.map((item, i) => (
                                            <option key={i} value={item}>{item}</option>
                                        ))}
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary">Tabelle laden</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}