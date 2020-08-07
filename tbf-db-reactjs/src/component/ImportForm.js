import React, { Component } from 'react';

export default class ImportForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table: this.props.table,
            file: null,
            responseReady: false,
            data: null
        }
    }

    submit(e, table) {    
        e.preventDefault();    
        const url = 'http://localhost/importTable.php';    
        
        const formData = new FormData();  
        formData.append('table', table)  
        formData.append('file', this.state.file);    
        const config = { 
            method: 'POST',
            body: formData
        };

        fetch(url, config)
        .then( this.setState({ responseReady: 'loading' }) )
        .then( result => result.json() )
        .then(result => {
            this.setState({ responseReady: true })
            this.setState({ data: result })
        })
    }

    setFile(e) {    
        this.setState({ file: e.target.files[0] }); 
        this.setState({ data: null });
        e.target.value = ''
    }

    render() {
        const { table, responseReady, data, file } = this.state;
        console.log(data)
        return (
            <div>
                <form className="md-form" onSubmit={e => this.submit(e, table)}>
                    <div className="row">
                        <div className="col">
                            <label className="btn btn-primary">
                                Datei auswählen<input type="file" onChange={e => this.setFile(e)} hidden/>
                            </label>
                        </div>
                        <div className="col">
                            {file && 
                            <button type="submit" className="btn btn-primary">
                                {responseReady === 'loading' && <span className="spinner-border spinner-border-sm" role="status" /> }
                                Hochladen
                            </button>
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {data ? <span>{data}</span> : null}
                        </div>
                    </div>
                </form>
            </div>
        )   
    }
}