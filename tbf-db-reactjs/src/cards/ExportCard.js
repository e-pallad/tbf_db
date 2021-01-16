import React, { Component } from 'react'
import Export from '../export/Export'

export default class ExportCard extends Component {
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
                "RI-TBF_SEF_Stoffstromliste", 
                "Gesamtdatenbank", 
                "SEF_E-Verbraucherliste", 
                "SEF_Messstellenliste", 
                "SEF_Armaturenliste", 
                "SEF_Ausrüstungsliste"
            ],
        };
    }

    render() {
        let cardsItems = this.state.items;
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