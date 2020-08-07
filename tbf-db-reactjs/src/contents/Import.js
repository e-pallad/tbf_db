import React, { Component } from 'react';
import ImportForm from '../component/ImportForm'

export default class Import extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tables: this.props.location.state.tables
        }
    }
     
    render() { 
        const { tables } = this.state;
        return (
            <section>
                <div className="row mx-1 my-4 pt-2 pb-3">
                    {tables.map((table, i) => (
                        <div className="col-md-3 mb-3" key={i}>
                            <div className="card py-4 px-5">
                                <h5 className="card-title">Import für: {table}</h5>
                                <ImportForm table={table} />
                            </div>
                        </div>
                    ))}
                </div>
            </section> 
        ); 
    } 
} 
   