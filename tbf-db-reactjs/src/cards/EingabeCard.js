import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ExportCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
        };
    }

    render() {
        const { items } = this.state;
        return(
            <div className="col-sm-2">
                <div className="card p-0">
                    <div className="card-body">
                        <h5 className="card-title">Bearbeiten</h5>
                        {items.map((item) => (
                            <Link key={item} to={{ pathname: "/eingabe", state: {table: item} }} className="btn btn-warning btn-block my-2">
                                {item.replace('RI-TBF_SEF_', '').replace('_Liste', ' Liste')}
                            </Link>     
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}