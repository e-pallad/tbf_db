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
        let cardsItems = Object.assign({}, this.state.items);
        cardsItems = Object.values(cardsItems);
        cardsItems.push('Masterliste');
        cardsItems.push('SEF_E-Verbraucherliste');
        cardsItems.push('SEF_Messstellenliste');
        cardsItems.push('SEF_Armaturenliste');
        cardsItems.push('SEF_Ausrüstungsliste');
        return(
            <div className="col">
                <div className="card p-0">
                    <div className="card-body">
                        <h5 className="card-title">Importieren</h5>
                        {cardsItems.map((item) => (
                            <Link key={item} to={{ pathname: "/import", state: {table: item} }} className="btn btn-success btn-block my-2">
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