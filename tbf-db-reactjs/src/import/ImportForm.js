import React, { Component } from 'react';
import './ImportForm.scss';

function uploadFile( table, file ) {
    const url = 'https://tbf-db-backend.ep-webdesign.de/importTable.php';
    //const url = 'http://localhost/importTable_new.php';    
            
    const formData = new FormData();  
    formData.append('table', table)  
    formData.append('file', file);    
    const config = { 
        method: 'POST',
        body: formData
    };

    fetch(url, config)
    .then( result => result.json() )
    .then(
        (result) => {
            this.setState({ 
                data: result,
                file: null
            })
            document.querySelector(".upload").classList.add("done");
            document.querySelector(".upload").classList.remove("drop", "drag");
            setTimeout(() => document.querySelector(".upload").classList.remove("done"), 3000);
            console.log(this.state.data);
        },
        (error) => {
            this.setState({ 
                data: error,
                file: null
            })
            console.log(this.state.data);
        } 
    )
}

export default class ImportForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table: this.props.table,
            file: null,
            data: null
        }
        uploadFile = uploadFile.bind(this);
        document.getElementById('root').classList.remove('container-fluid');
    }

    componentWillUnmount() {
        document.getElementById('root').classList.add('container-fluid');
    }

    componentDidMount() {
        var fileUpload = document.querySelector(".upload");

        fileUpload.addEventListener("dragover", function() {
            this.classList.add("drag");
            this.classList.remove("drop", "done");
        });

        fileUpload.addEventListener("dragleave", function() {
            
        });

        this.setFile = (e) => {    
            this.setState({ file: e.target.files[0] }); 
            this.setState({ data: null });
            if (this.state.file) {
                fileUpload.classList.remove("drag");
                fileUpload.classList.add("drop");   
                uploadFile(this.state.table, this.state.file);      
            }
        }

        fileUpload.addEventListener("drop", this.setFile.bind(this), false);
        fileUpload.addEventListener("change", this.setFile.bind(this), false);
    }

    render() {
        const data = this.state.data;
        let message;
        if (data) {
            message.map((news) => (
                <p>{news}</p>   
            ))
        }
        return (
            <section>
                <div className="upload">
                    <input type="file" title="" accept=".csv" className="drop-here" />
                    <div className="text text-drop text-center">.csv Datei <br />hier ablegen <br />oder klicken <br />zum importieren</div>
                    <div className="text text-upload">uploading</div>
                    <svg className="progress-wrapper" width="300" height="300">
                        <circle className="progress" r="115" cx="150" cy="150"></circle>
                    </svg>
                    <svg className="check-wrapper" width="130" height="130">
                        <polyline className="check" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                    </svg>
                    <div className="shadow"></div>
                </div>
                <div className="message">
                    {message}
                </div>
            </section>
        )   
    }
}