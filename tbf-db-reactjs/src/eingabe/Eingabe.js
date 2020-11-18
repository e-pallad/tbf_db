import React, { lazy, Component, Suspense } from 'react';
const Table = lazy(() => import('./Table'))

export default class Eingabe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table: this.props.location.state.table,
            tableData: []
        };
    }

    componentDidMount() {
        fetch("https://tbf-db-backend.ep-webdesign.de/renderTables.php?table=" + this.state.table)
        //fetch("http://localhost/renderTables.php?table=" + this.state.table)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    tableData: result
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
        const { tableData, isLoaded, error, table } = this.state
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="d-flex justify-content-center">
                <div className="spinner-border" style={{Width: 3 +'rem', Height: 3 + 'rem'}} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>;
        } else 
        return (
            <Suspense fallback={<div>Lädt...</div>}>
                <Table tableData={tableData} table={table} />
            </Suspense>
        )
    }
}