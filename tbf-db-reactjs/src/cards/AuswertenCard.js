import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ImportCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                "RI-TBF_SEF_Allplan_Liste", 
                "RI-TBF_SEF_Apparateliste", 
                "RI-TBF_SEF_Armaturenliste", 
                "RI-TBF_SEF_Elektroangaben", 
                "RI-TBF_SEF_Elektrokomponentenliste", 
                "RI-TBF_SEF_Messstellenliste", 
                "RI-TBF_SEF_PlancalNova_Liste", 
                "RI-TBF_SEF_Revit_Liste", 
                "RI-TBF_SEF_Rohrleitungsliste", 
                "RI-TBF_SEF_Stoffstromliste"
            ],
        };
    }

    render() {
        const { items } = this.state;
        return(
            <div className="col">
                <div className="card p-0">
                    <div className="card-body">
                        <h5 className="card-title">Auswerten</h5>
                        {items.map((item) => (
                            <Link key={item} to={{ pathname: "/import", state: {table: item} }} className="btn btn-primary btn-block my-2">
                                {item.replace('RI-TBF_SEF_', '').replace('_Liste', ' Liste')}
                            </Link>     
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}