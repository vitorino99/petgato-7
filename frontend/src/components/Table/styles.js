import styled from 'styled-components'

export const TableContainer = styled.table`
  width: 100%;
  font-size: 18px;
  margin: 30px 0;

  thead {
    tr {
      font-weight: bold;
    }
  }

  tbody tr:nth-of-type(2n+1) {
    background-color: #eee;
  }

  td {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;

    padding: 10px 20px;

    a, a:not([href]):not([class]), button {
      font-weight: 600;
      color: #C882B4;
      cursor: pointer;
      border: 0;
      background-color: transparent;

      :hover {
        text-decoration: underline;
      }
    }
  }
`
