import { useState } from 'react';

function NumbersTable(props) {
  const [rows, setRows] = useState(Array.from(Array(props.limit).keys()));

  return (
    <tbody>
      {rows.map((item, i) => {
        return (
          <tr key={i}>
            <td style={{ backgroundColor: i % 2 ? 'red' : 'white' }}>
              {i + 1}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default NumbersTable;
