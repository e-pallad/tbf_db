import React, { Component } from 'react'

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
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Export</h5>
                        <form>
                            <div className="form-row align-items-center">
                                <div className="col-md-8 my-1">
                                    <label className="mr-sm-2 sr-only">Preference</label>
                                    <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                        {items.map((item, i) => (
                                            <option key={i} defaultValue="{item}">{item}</option>
                                        ))}
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary">Go somewhere</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}