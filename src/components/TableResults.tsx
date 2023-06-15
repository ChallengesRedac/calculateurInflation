import { Table } from '@mantine/core';

const elements = [
  { name: 'Carbon', coeff: 0.8 },
  { name: 'Carbon', coeff: 0.8 },
];

export function TableResults() {
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.name}</td>
      <td>{element.coeff}</td>
    </tr>
  ));

  return (
    <Table>
      <thead></thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
