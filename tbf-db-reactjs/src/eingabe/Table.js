import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react';
import './table.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

async function pushDataToDb(pushData, table) {

    const url = 'https://tbf-db-backend.ep-webdesign.de/updateTable.php';

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
            return result
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
        this.getMaxTBFID = this.getMaxTBFID.bind(this);
        this.onAddRow = this.onAddRow.bind(this);
    }

    async getMaxTBFID() {
        return fetch('https://tbf-db-backend.ep-webdesign.de/getMaxTBFID.php')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    maxTBFID: parseInt(result),
                });
            },
            (error) => {
                this.setState({
                    error
                });
            }   
        )
    }

    async onAddRow() {
        if (!this.state.maxTBFID) {
            await this.getMaxTBFID()
            console.log('If got fired')
        } 
        
        this.setState({ maxTBFID: this.state.maxTBFID + 1}, () => {
            console.log(this.state.maxTBFID)
            this.gridApi.applyTransaction({
                add: [{TBF_ID: this.state.maxTBFID}],
            })
        })
        
    }

    onGridReady = params => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;

        var allColumnIds = [];
        this.gridColumnApi.getAllColumns().forEach(function(column) {
            allColumnIds.push(column.colId);
        });
        //params.columnApi.autoSizeColumns(allColumnIds, true)
        params.columnApi.autoSizeColumns(allColumnIds)
        //params.api.sizeColumnsToFit();
        //params.gridApi.autoSizeColumns(true)
    };

    dataChanged(data) {
        pushDataToDb(data.data, this.state.table)
    }

    render() {
        const { tableData } = this.props
        const { table } = this.state
        let button;

        const columns = tableData.slice(0,1).map(( header ) => {
            return(
                header.map(( column ) => {
                    return({
                        headerName: column.headerName,
                        field: column.field,
                        editable: column.editable,
                    })
                })
            )
        })  
        
        const data = tableData.slice(1)

        if (table == 'RI-TBF_SEF_Elektrokomponentenliste') {
            button = <button className="btn btn-outline-success mb-2" onClick={this.onAddRow}>Zeile hinzufügen</button>
        } else {
            button = null
        }
        
        return (
            <div id="grid" className="p-0 overflow-hidden w-100 h-100">
                <nav className="navbar navbar-light bg-light">
                    <h2 className="navbar-brand">{table}</h2>
                    {button}
                </nav>
                <div className="ag-theme-alpine" style={ { height: 'calc(100% - 60px)', width: '100%'} }>
                    <AgGridReact
                        columnDefs={columns[0]}
                        defaultColDef={this.state.defaultColDef}
                        rowData={data}

                        editType={this.state.editType}
                        pagination={true}
                        //stopEditingWhenGridLosesFocus={true}
                        suppressFieldDotNotation={true}
                        
                        onRowValueChanged={this.dataChanged}
                        onGridReady={this.onGridReady}
                        />
                </div>
            </div>
        );
    }
  }