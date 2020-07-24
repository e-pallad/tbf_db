import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <div className="row row-cols-2">
                    <div className="col-sm-6">
                        <div className="card">
                            <div class="card-body">
                                <h5 class="card-title">Zum Datenimport</h5>
                                <p class="card-text">Für welche Tabelle soll der Datenimport gestartet werden?</p>
                                <form>
                                    <div class="form-row align-items-center">
                                        <div class="col-md-8 my-1">
                                        <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
                                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                            <option selected>Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Go somewhere</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div class="card-body">
                                <h5 class="card-title">Zum Datenexport</h5>
                                <p class="card-text">Welcher Export wird benötigt?</p>
                                <form>
                                    <div class="form-row align-items-center">
                                        <div class="col-md-8 my-1">
                                        <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
                                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                            <option selected>Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Go somewhere</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div class="card-body">
                                <h5 class="card-title">Zur Eingabe</h5>
                                <p class="card-text">In welcher Tabelle sollen Daten geändert werden?</p>
                                <form>
                                    <div class="form-row align-items-center">
                                        <div class="col-md-8 my-1">
                                        <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
                                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                            <option selected>Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Go somewhere</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}