import React, { Component } from 'react';
import Erzeugen from '../erzeugen/Erzeugen'

export default class ImportCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                "SEF_E-Verbraucherliste",
                "SEF_Messstellenliste",
                "SEF_Armaturenliste",
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
                            <Erzeugen key={item} table={item} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}