import React, { Component } from 'react';
import './App.css';

import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';

import ImportCard from './cards/ImportCard';
import EingabeCard from './cards/EingabeCard';
import ErzeugenCard from './cards/ErzeugenCard';
import AuswertenCard from './cards/AuswertenCard';
import ExportCard from './cards/ExportCard';



export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };

    }

    componentDidMount() {
        fetch("https://tbf-db-backend.ep-webdesign.de/fetchTables.php")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.tables
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }   
        )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Lädt...</div>;
        } else 
          return (
            <Container>
                <AppBar>
                    <Tabs>
                        <Tab label="Active" />
                        <Tab label="Link" />
                        <Tab label="Link" />
                        <Tab label="Disabled" />
                    </Tabs>
                </AppBar>
                <Grid container direction="row" justify="space-around">
                    <ImportCard items={items} />
                    <EingabeCard setRedirect={this.renderTable} items={items} />
                    <ErzeugenCard />
                    <AuswertenCard items={items} />
                    <ExportCard items={items} />
                </Grid>
            </Container>
          )
  }
}
