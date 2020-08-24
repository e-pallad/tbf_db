import React, { Component } from 'react';
import Table from '../eingabe/Table';

export default class Eingabe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table: this.props.location.state.table,
            tableData: []
        };
    }

    componentDidMount() {
        fetch("https://tbf-db-backend.ep-webdesign.de/renderTables.php?table=" + this.state.table)
        //fetch("http://localhost/renderTables.php?table=" + this.state.table)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    tableData: result
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
        const { tableData, isLoaded, error, table } = this.state
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else 
        return (
            <Table tableData={tableData} table={table} />
        )
    }
}