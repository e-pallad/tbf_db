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
        items.push('Verfahrenstechnikangaben');
        return(
            <div className="col">
                <div className="card p-0">
                    <div className="card-body">
                        <h5 className="card-title">Bearbeiten</h5>
                        {items.map((item) => (
                            <Link key={item} to={{ pathname: "/eingabe", state: {table: item} }} className="btn btn-warning btn-block my-2">
                                {
                                    ( 
                                        item === "RI-TBF_SEF_Apparateliste" || 
                                        item === "RI-TBF_SEF_Armaturenliste" || 
                                        item === "RI-TBF_SEF_Elektroangaben" ||
                                        item === "RI-TBF_SEF_Messstellenliste"
                                    ) ? (
                                        item.replace('TBF_SEF_', '')
                                    ) : (
                                        item.replace('RI-TBF_SEF_', '').replace('_Liste', ' Liste')
                                    )
                                }
                            </Link>     
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}