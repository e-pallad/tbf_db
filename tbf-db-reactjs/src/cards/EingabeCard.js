import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const ClassicButton = withStyles({
    root: {
        background: '#ffc107',
        margin: '.5rem 0',
        fontWeight: 400,
        fontSize: '1rem',
    },
    label: {
        textTransform: 'none',
    }
})(Button);

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
            <Grid item xs={3}>
                <Card className="card p-0">
                    <CardContent className="card-body">
                        <Typography variant="h5">Bearbeiten</Typography>
                        {items.map((item) => (
                            <ClassicButton key={item} to={{ pathname: "/eingabe", state: {table: item} }} variant="contained" disableElevation fullWidth>
                                {item.replace('RI-TBF_SEF_', '').replace('_Liste', ' Liste')}
                            </ClassicButton>     
                        ))}
                    </CardContent>
                </Card>
            </Grid>
        )
    }
}