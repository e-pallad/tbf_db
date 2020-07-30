import React, { Component } from 'react'
import Fields from './Fields'

export default class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tableData: this.props.tableData,
            search: null
        };
    }

    searchSpace = (e) => {
        let keyword = e.target.value;
        this.setState({search: keyword})
    }

    render() {
        const { tableData, search } = this.state
        return(
            <div className="">
                <form className="form-inline my-2 my-lg-0 justify-content-start">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" onChange={(e)=>this.searchSpace(e)} />
                </form>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            {tableData[0].map((item, i) => (
                                <th scope="col" key={i}>{item}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData[1].map((row) => {
                            if(search == null) {
                                return(
                                    <Fields rowData={row}/>
                                );
                            } else if (
                                row[0].toLowerCase().includes(search.toLowerCase()) || 
                                row[6].toLowerCase().includes(search.toLowerCase())
                            )   
                                return(
                                    <Fields rowData={row}/>
                                );
                        })}
                    </tbody>
                </table>
            </div>
        )   
    }
}