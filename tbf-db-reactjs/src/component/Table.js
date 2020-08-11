import React, { useMemo, useState, useEffect } from 'react'
import { useTable, usePagination, useGlobalFilter, useFilters } from 'react-table'

const EditableCell = ({
    value: initialValue,
    row: { index },
    column: { id },
    updateMyData, 
}) => {
    const [value, setValue] = useState(initialValue)
  
    const onChange = e => {
        setValue(e.target.value)
    }
  
    const onBlur = () => {
        updateMyData(index, id, value)
    }
  
    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])
  
    return <input value={value} onChange={onChange} onBlur={onBlur} />
}

async function pushDataToDb(pushData, table) {

    const url = 'https://tbf-db-backend.ep-webdesign.de/updateTable.php';
    //const url = 'http://localhost/updateTable.php';

    const formData = new FormData();  
    formData.append('table', table); 
    formData.append('data', JSON.stringify(pushData));  

    const config = { 
        method: 'POST',
        body: formData
    };
    try {
        const result = await fetch(url, config)
        if (!result.ok) {
            throw Error(result.statusText);
        } else {
            console.log(result)
        }
    } catch (error) {
        console.log(error)
    }
    
}

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

function TableRender({ columns, data, updateMyData, skipPageReset }) {
    const filterTypes = useMemo(
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

    const defaultColumn = {
          Filter: DefaultColumnFilter,
          Cell: EditableCell,
    };

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
            filterTypes,
            autoResetPage: !skipPageReset,
            updateMyData,
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
    
    const [data, setData] = useState(() => tableData.slice(1))
    const [originalData] = useState(data)
    const [skipPageReset, setSkipPageReset] = useState(false)

    const updateMyData = (rowIndex, columnId, value) => {
        setSkipPageReset(true)
        setData(old =>
            old.map((row, index) => {
                if (index === rowIndex) {

                    const pushData = row
                    const table = props.table
                    pushData[columnId] = value
                    console.log(pushData)
                    
                    pushDataToDb(pushData, table)

                    return {
                        ...old[rowIndex],
                        [columnId]: value,
                    }
                }
                return row
            })
        )
    }

    useEffect(() => {
        setSkipPageReset(false)
    }, [data])
    
    return(
        <React.Fragment>
            <TableRender 
                columns={columns}
                data={data}
                updateMyData={updateMyData}
                skipPageReset={skipPageReset} 
            />
        </React.Fragment>
    )
}