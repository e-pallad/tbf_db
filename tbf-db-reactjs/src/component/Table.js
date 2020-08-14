import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

async function pushDataToDb(pushData, table) {

    const url = 'https://tbf-db-backend.ep-webdesign.de/updateTable.php';
    //const url = 'http://localhost/updateTable.php';

    const formData = new FormData();  
    formData.append('table', table); 
    formData.append('data', JSON.stringify(pushData));  

    const config = { 
        method: 'POST',
        body: formData
    };
    try {
        const result = await fetch(url, config)
        if (!result.ok) {
            throw Error(result.statusText);
        } else {
            //console.log(result)
        }
    } catch (error) {
        console.log(error)
    }
    
}

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editType: 'fullRow',
            defaultColDef: {
                flex: 1,
                sortable: true,
                editable: true,
                filter: true,
                resizable: true,
            },
            table: this.props.table
        }
        this.dataChanged = this.dataChanged.bind(this);
    }

    dataChanged(data) {
        //console.log(JSON.stringify(data.data))
        pushDataToDb(data.data, this.state.table)
    }

    render() {
        const { tableData } = this.props
        const columns = tableData[0].map(( item ) => {
            return(
                {
                    headerName: item,
                    field: item,
                }
            )
        })
        
        const data = tableData.slice(1)

        return (
            <div className="ag-theme-alpine" style={ {height: '600px', width: '100%'} }>
                <AgGridReact
                    //columnDefs={this.state.columnDefs}
                    columnDefs={columns}
                    defaultColDef={this.state.defaultColDef}
                    //rowData={this.state.rowData}
                    rowData={data}
                    pagination={true}
                    stopEditingWhenGridLosesFocus={true}
                    editType={this.state.editType}
                    onRowValueChanged={this.dataChanged}
                    suppressFieldDotNotation={true}>
                </AgGridReact>
            </div>
        );
    }
  }