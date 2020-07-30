import React, { Component } from 'react';

export default class Import extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table: this.props.location.state.table
        };
    }

    render() {
        const { table } = this.state
        return(
            <div>
                <h1>It worked!</h1>
                <h2>ausgewählte Tabelle: {table}</h2>
            </div>
        )
    }
}