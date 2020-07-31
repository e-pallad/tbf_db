import React, { Component } from 'react'
import { useTable } from 'react-table'

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: this.props.tableData
        };
    }

    render() {
        const { tableData } = this.state
        
        const columns = tableData[0].map(( item ) => {
            return(
                {
                    Header: item,
                    accessor: item
                }
            )
        });

        const data = tableData.slice(1)

        console.log(columns)
        console.log(data)
        return(
            <div></div>
        )   
    }
}