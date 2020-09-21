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
        color: '#fff',
        background: '#6c757d',
        margin: '.5rem 0',
        fontWeight: 400,
        fontSize: '1rem',
        '&:hover': {
            background: '#5a6268',
            borderColor: '#545b62',
        }
    },
    label: {
        textTransform: 'none',
    }
})(Button);

export default class ImportCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                "SEF E-Verbraucherliste",
                "SEF Messstellenliste",
                "SEF Amaturenlsite",
                "SEF Ausrüstungsliste"
            ],
        };
    }

    render() {
        const { items } = this.state;
        return(
            <Grid item xs={2}>
                <Card>
                    <CardContent>
                        <Typography variant="h5">Erzeugen</Typography>
                        {items.map((item) => (
                            <Link key={item} to={{ pathname: "/import", state: {table: item} }} className="btn btn-secondary btn-block my-2">
                                <ClassicButton variant="contained" disableElevation fullWidth>
                                {item.replace('RI-TBF_SEF_', '').replace('_Liste', ' Liste')}
                                </ClassicButton>
                            </Link>     
                        ))}
                    </CardContent>
                </Card>
            </Grid>
        )
    }
}