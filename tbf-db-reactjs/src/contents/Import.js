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
        e.preventDefault() // Stop form submit
        this.fileUpload(this.state.file).then((response)=>{
            console.log(response.data);
        })
    }

    onChange(e) {
        this.setState({file:e.target.files[0]})
    }

    fileUpload(file) {
        const url = 'http://example.com/file-upload';
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
        const { tables } = this.state;
        return (
            <section>
                <div className="row mx-1 my-4 pt-2 pb-3">
                    {tables.map((table) => (

                        <div className="col-md-6 mb-3">
                            <div className="card py-4 px-5">
                                <h5 className="card-title">Import für: {table}</h5>
                                <form className="md-form" onSubmit={this.onFormSubmit}>
                                    <div className="file-field">
                                        <div className="btn btn-sm float-left">
                                            <span>Choose file<i className="fas fa-cloud-upload-alt ml-3" aria-hidden="true"></i></span>
                                            <input type="file" onChange={this.onChange} />
                                        </div>
                                        <div className="file-path-wrapper">
                                            <input className="file-path validate text-white" type="text" placeholder="Upload your file" />
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
   