import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ImportCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
        };
    }

    render() {
        const { items } = this.state;
        return(
            <div className="col">
                <div className="card p-0">
                    <div className="card-body">
                        <h5 className="card-title">Erzeugen</h5>
                        {items.map((item) => (
                            <Link key={item} to={{ pathname: "/import", state: {table: item} }} className="btn btn-secondary btn-block my-2">
                                {item.replace('RI-TBF_SEF_', '').replace('_Liste', ' Liste')}
                            </Link>     
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}