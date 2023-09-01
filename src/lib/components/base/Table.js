import React from 'react';

const Table = ({classTable, children}) => {
    const style = classTable !== undefined ? classTable + " table" : "table"

    return (
        <>
            <table className={style}>
                {
                    children
                }
            </table>
        </>
    );
}

Table.Head = ({ classHeading, children }) => {
    return(
        <tr className={"heading_table " + classHeading}>{children}</tr>
    )
}

Table.HeadCell = ({ children }) => {
    return(
        <th>{children}</th>
    )
}

Table.Row = ({classRow, children }) => {
    return(
        <tr className={"row_table " + classRow}>{children}</tr>
    )
}

Table.Cell = ({ children }) => {
    return (
        <td>{children}</td>
    )
}

export default Table;