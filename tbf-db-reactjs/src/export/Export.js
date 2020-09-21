import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const ClassicButton = withStyles({
    root: {
        color: '#fff',
        background: '#dc3545',
        margin: '.5rem 0',
        fontWeight: 400,
        fontSize: '1rem',
        '&:hover': {
            background: '#c82333',
            borderColor: '#bd2130',
        }
    },
    label: {
        textTransform: 'none',
    }
})(Button);

export default class Export extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table: this.props.table,
        };
    }

    exportTable = () => {
		fetch("https://tbf-db-backend.ep-webdesign.de/exportTables.php?table=" + this.state.table)
        //fetch("http://localhost/exportTables.php?table=" + this.state.table)
		.then(response => {
			response.blob().then(blob => {
				let url = window.URL.createObjectURL(blob);
				let a = document.createElement('a');
				a.href = url;
				a.download = this.state.table + '_' + Date.now() + '.csv';
				a.click();
			});
                //window.location.href = response.url;
            
        });
	}

    render() {
        const { table } = this.state
        return (
            <ClassicButton variant="contained" disableElevation fullWidth onClick={this.exportTable}>
                {
                    ( 
                        table === "RI-TBF_SEF_Apparateliste" || 
                        table === "RI-TBF_SEF_Armaturenliste" || 
                        table === "RI-TBF_SEF_Elektroangaben"
                    ) ? (
                        table.replace('TBF_SEF_', '')
                    ) : (
                        table.replace('RI-TBF_SEF_', '').replace('_Liste', ' Liste')
                    )
                }
            </ClassicButton>
        )
    }
}