import React, { Component } from 'react'
import Export from '../export/Export'

export default class ExportCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
        };
    }

    render() {
        let cardsItems = Object.assign({}, this.state.items);
        cardsItems = Object.values(cardsItems);
        cardsItems.push('Gesamtdatenbank');
        return(
            <div className="col">
                <div className="card p-0">
                    <div className="card-body">
                        <h5 className="card-title">Export</h5>
                        {cardsItems.map((item) => (
                            <Export key={item} table={item} /> 
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}