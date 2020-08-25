import React, { Component } from 'react';
import './ImportForm.scss';

export default class ImportForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table: this.props.table,
            file: null,
            data: null
        }
        this.uploadFile = this.uploadFile.bind(this);
        document.getElementById('root').classList.remove('container-fluid');
    }

    uploadFile() {
        const { table, file } = this.state;
        const url = 'https://tbf-db-backend.ep-webdesign.de/importTable.php';
        //const url = 'http://localhost/importTable.php';    
                
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
                console.log(this.state.file);
            },
            (error) => {
                this.setState({ 
                    data: error,
                    file: null
                })
            } 
        )
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
                this.uploadFile();      
            }
        }

        fileUpload.addEventListener("drop", this.setFile.bind(this), false);
        fileUpload.addEventListener("change", this.setFile.bind(this), false);
    }

    render() {
        return (
            <div className="upload">
                <input type="file" title="" className="drop-here" />
                <div className="text text-drop text-center">Datei hier <br />ablegen</div>
                <div className="text text-upload">uploading</div>
                <svg className="progress-wrapper" width="300" height="300">
                    <circle className="progress" r="115" cx="150" cy="150"></circle>
                </svg>
                <svg className="check-wrapper" width="130" height="130">
                    <polyline className="check" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                </svg>
                <div className="shadow"></div>
            </div>
        )   
    }
}