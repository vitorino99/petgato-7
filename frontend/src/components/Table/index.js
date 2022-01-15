
import { TableContainer } from './styles';

const Table = ({ columns, linesData, ...props }) => {

  return (
    <TableContainer {...props}>
      <thead>
        <tr>
          {columns.map((column, i) =>
            <td key={column + i}>{column.slice(0, 5) !== 'empty' && column}</td>)}
        </tr>
      </thead>
      <tbody>
        {linesData.map((lineData, i) =>
          <tr key={i}>
            {columns.map((column, j) =>
              <td key={i + j}>
                {lineData[column]}
              </td>)}
          </tr>)}
      </tbody>
    </TableContainer>
  )
}

export default Table