import React, { Component } from 'react'
import Export from '../export/Export'

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

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
            <Grid item xs={2}>
                <Card>
                    <CardContent>
                        <Typography variant="h5">Export</Typography>
                        {items.map((item) => (
                            <Export key={item} table={item} /> 
                        ))}  
                    </CardContent>
                </Card>
            </Grid>
        )
    }
}