import React, { Component } from 'react';

export default class Export extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table: this.props.table,
        };
    }

    exportTable = () => {
		//fetch("https://tbf-db-backend.ep-webdesign.de/exportTables.php?table=" + this.state.table)
        fetch("http://localhost/exportTables.php?table=" + this.state.table)
			.then(response => {
				response.blob().then(blob => {
					let url = window.URL.createObjectURL(blob);
					let a = document.createElement('a');
					a.href = url;
					a.download = 'employees.json';
					a.click();
				});
				//window.location.href = response.url;
		});
	}

    render() {
        const { table } = this.state
        return (
            <button onClick={this.exportTable} className="btn btn-danger btn-block my-2">
                {table.replace('RI-TBF_SEF_', '').replace('_Liste', ' Liste')}
            </button>
        )
    }
}