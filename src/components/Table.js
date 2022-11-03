import './table.css';

const Table = ({ data, columns}) => {
    return (
        <table>
            <thead>
                <tr>
                    { columns.map((column, index) => <TableHeadItem key={index} column={column} />)}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) =><TableRowItem key={index} row={row} columns={columns}/>)}
            </tbody>
        </table>
    )
}

const TableHeadItem = ({column}) => <th>{column.heading}</th>
const TableRowItem = ({row, columns}) => (
    <tr>
        { 
            columns.map((column, index) => 
                <td key={index}>
                    { row[`${column.value}`] }
                </td>)
        }
    </tr> 
)

export default Table;