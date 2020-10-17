import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ImportCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                "SEF_E-Verbraucherliste",
                "SEF_Messstellenliste",
                "SEF_Amaturenlsite",
                "SEF_Ausrüstungsliste"
            ],
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
                            <Link key={item} to={{ pathname: "/create", state: {table: item} }} className="btn btn-secondary btn-block my-2">
                                {item.replace('_', ' ')}
                            </Link>     
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}