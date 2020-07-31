import React, { useMemo } from 'react'
import { useTable, usePagination, useGlobalFilter, useFilters } from 'react-table'

function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter
}) {
    const count = preGlobalFilteredRows.length;
  
    return (
        <div className="m-2 w-25 justify-content-start">
            Globale Suche:{" "}
            <input
                value={globalFilter || ""}
                onChange={e => {
                    setGlobalFilter(e.target.value || undefined);
                }}
                placeholder={`${count} Einträge...`}
                className="form-control mr-sm-2"
            />
        </div>
    );
}
  
function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter }
}) {
    const count = preFilteredRows.length;
  
    return (
        <input
            value={filterValue || ""}
            className="form-control"
            onChange={e => {
            setFilter(e.target.value || undefined); 
            }}
            placeholder={`Durchsuche ${count} Einträge...`}
        />
    );
}

function TableRender({ columns, data }) {
    const filterTypes = React.useMemo(
        () => ({
            text: (rows, id, filterValue) => {
                return rows.filter(row => {
                const rowValue = row.values[id];
                return rowValue !== undefined
                    ? String(rowValue)
                        .toLowerCase()
                        .startsWith(String(filterValue).toLowerCase())
                    : true;
                });
            }
        }),
        []
    );

    const defaultColumn = React.useMemo(
        () => ({
          Filter: DefaultColumnFilter
        }),
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize, globalFilter },
        preGlobalFilteredRows,
        setGlobalFilter
    } = useTable(
        {
            columns,
            data,
            initialState: { pageindex: 2 },
            defaultColumn,
            filterTypes
        },
        useFilters,
        useGlobalFilter,
        usePagination,
        
    );

    return (
        <React.Fragment>
        <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
        />
        <table {...getTableProps()} className="table table-striped">
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                    <th
                    {...column.getHeaderProps()}
                    style={{ verticalAlign: "middle" }}
                    scope="col"
                    >
                        {column.render("Header")}
                        <div>{column.canFilter ? column.render("Filter") : null}</div>
                    </th>
                ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
                prepareRow(row);
                return (
                <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                    return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                    })}
                </tr>
                );
            })}
            </tbody>
        </table>
        <div className="justify-content-center mb-3">
            <select
                style={{
                    padding: "7px",
                    borderRadius: "3px",
                    border: "1px solid #007bff"
                }}
                value={pageSize}
                onChange={e => {
                    setPageSize(Number(e.target.value));
                }}
            >
                {[10, 20, 30, 40, 50].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                    Zeige {pageSize}
                    </option>
                ))}
            </select>{" "}
            <button
                className="btn btn-outline-primary"
                style={{ marginTop: "-4px" }}
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
            >
            {"<<"}
            </button>{" "}
            <button
                className="btn btn-outline-primary"
                style={{ marginTop: "-4px" }}
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
            >
            {"<"}
            </button>{" "}
            <span>
                Seite{" "}
                <strong>
                    {pageIndex + 1} von {pageOptions.length}
                </strong>{" "}
            </span>
            <button
                className="btn btn-outline-primary"
                style={{ marginTop: "-4px" }}
                onClick={() => nextPage()}
                disabled={!canNextPage}
            >
            {">"}
            </button>{" "}
            <button
                className="btn btn-outline-primary"
                style={{ marginTop: "-4px" }}
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
            >
            {">>"}
            </button>
        </div>
    </React.Fragment>
    )
}


export default function Table(props) {
    const tableData = props.tableData
    const columns = useMemo(() => tableData[0].map(( item ) => {
        return(
            {
                Header: item,
                accessor: item
            }
        )
    })) 
    
    const data = useMemo(() => tableData.slice(1))
    
    return(
        <React.Fragment>
            <TableRender columns={columns} data={data} />
        </React.Fragment>
    )
}