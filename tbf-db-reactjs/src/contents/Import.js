import React, { Component } from 'react';

/**
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
*/
  
export default class Import extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tables: this.props.location.state.tables,
            file: null
        }

        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
    }

    onFormSubmit(e){
        e.preventDefault()
        this.fileUpload(this.state.file).then((response)=>{
            console.log(response.data);
        })
    }

    onChange(e) {
        this.setState({file:e.target.files[0]})
        console.log({file:e.target.files[0].name})
    }

    fileUpload(file) {
        const url = 'http://localhost/importTable.php';
        const formData = new FormData();

        formData.append('file',file)

        const response = fetch({url}, {
            method: 'POST',
            headers: { 'content-type': 'multipart/form-data' },
            body: formData
        })

        return response.json()
    }
     
    render() { 
        const { tables, file } = this.state;
        return (
            <section>
                <div className="row mx-1 my-4 pt-2 pb-3">
                    {tables.map((table) => (
                        <div className="col-md-3 mb-3">
                            <div className="card py-4 px-5">
                                <h5 className="card-title">Import für: {table}</h5>
                                <form className="md-form" onSubmit={this.onFormSubmit}>
                                    <div class="row">
                                        <div class="col">
                                            <div className="btn btn-sm float-left">
                                                <label className="btn btn-primary">
                                                    Datei auswählen<input type="file" onChange={this.onChange} hidden/>
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
   