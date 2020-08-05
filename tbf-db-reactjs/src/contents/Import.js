import React, { Component } from 'react';
import axios from 'axios';

export default class Import extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tables: this.props.location.state.tables,
            file: null
        }
    }

    async submit(e, table) {    
        e.preventDefault();    
        const url = 'http://localhost/importTable.php';    
        const formData = new FormData();  
        formData.append('table', {table})  
        formData.append('file', this.state.file);    
        const config = {    
            headers: {    
                'content-type': 'multipart/form-data'            
            },
        };
        const HTTP = axios.create({
            withCredentials: false
        });
        
        return HTTP.post(url, formData, config);
    }
    setFile(e) {    
        this.setState({ file: e.target.files[0] });    
    }
     
    render() { 
        const { tables } = this.state;
        return (
            <section>
                <div className="row mx-1 my-4 pt-2 pb-3">
                    {tables.map((table) => (
                        <div className="col-md-3 mb-3">
                            <div className="card py-4 px-5">
                                <h5 className="card-title">Import für: {table}</h5>
                                <form className="md-form" onSubmit={e => this.submit(e, table)}>
                                    <div class="row">
                                        <div class="col">
                                            <div className="btn btn-sm float-left">
                                                <label className="btn btn-primary">
                                                    Datei auswählen<input type="file" onChange={e => this.setFile(e)} hidden/>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <button type="submit" className="btn btn-primary">Hochladen</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    ))}
                </div>
            </section> 
    
        ); 
    } 
} 
   