import React, { Component } from 'react';

export default class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            table: this.props.table,
            data: this.props.data
        }
    }
     
    render() { 
        const { table, data } = this.state;
        return (
            <div className="modal fade" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{table}</h5>
                            <button type="button" className="close" data-dismiss="modal">
                            </button>
                        </div>
                        <div className="modal-body">
                            Import für {table} ist abgeschlossen.
                            Mit diesem Ergebnis:
                            {data}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        ); 
    } 
} 