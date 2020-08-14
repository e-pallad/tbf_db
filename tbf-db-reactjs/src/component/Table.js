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
                sortable: true,
                editable: true,
                filter: true,
                resizable: true,
            },
            table: this.props.table
        }
        this.onGridReady = this.onGridReady.bind(this);
        this.dataChanged = this.dataChanged.bind(this);
    }

    onGridReady = params => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;

        /*
        var allColumnIds = [];
        this.gridColumnApi.getAllColumns().forEach(function(column) {
            allColumnIds.push(column.colId);
        });
        params.columnApi.autoSizeColumns(allColumnIds, true)
        */
        //params.api.sizeColumnsToFit();
        //this.gridApi.autoSizeColumns(true)
    };

    dataChanged(data) {
        pushDataToDb(data.data, this.state.table)
    }

    render() {
        const { tableData } = this.props
        const { table } = this.state
        const columns = tableData[0].map(( item ) => {
            if (item === 'PnPID') {
                return(
                    {
                        headerName: item,
                        field: item,
                        editable: false,
                    }
                )
            } else {
                return(
                    {
                        headerName: item,
                        field: item,
                    }
                )
            }
        })
        
        const data = tableData.slice(1)

        return (
            <div id="grid" className="container-fluid p-0 overflow-hidden">
                <h2>{table}</h2>
                <div className="ag-theme-alpine" style={ { height: '800px', width: '100%'} }>
                    <AgGridReact
                        columnDefs={columns}
                        defaultColDef={this.state.defaultColDef}
                        rowData={data}

                        editType={this.state.editType}
                        pagination={true}
                        //stopEditingWhenGridLosesFocus={true}
                        suppressFieldDotNotation={true}
                        
                        onRowValueChanged={this.dataChanged}
                        onGridReady={this.onGridReady}>
                    </AgGridReact>
                </div>
            </div>
        );
    }
  }