import React, { Component } from 'react';
import Import from '../component/Import';
import Export from '../component/Export';
import Eingabe from '../component/Eingabe';
import Table from './Table';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            redirect: false,
            tableData: ''
        };

    }

    renderTable = (redirectChild, tableDataChild) => {
        this.setState({
            redirect: redirectChild,
            tableData: tableDataChild
        })
    }

    componentDidMount() {
        fetch("http://localhost/fetchTables.php")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.tables
                });
                
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }   
        )
    }

    render() {
        const { error, isLoaded, items, redirect } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            console.log(this.state.redirect)
            console.log(this.state.tableData)
            if (redirect) {
                return (
                    <Table />
                )
            } else {
                return (
                    <div className="condiv home">
                        <div className="row row-cols-2">

                            <Import items={items} />
                            <Export items={items} />
                            <Eingabe setRedirect={this.renderTable} items={items} />

                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    }
}