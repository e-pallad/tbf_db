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
            return <div class="d-flex justify-content-center">
                <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                    <span class="sr-only">Loading...</span>
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