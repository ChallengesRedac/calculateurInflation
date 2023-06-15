import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const yAxisFormatter = (value: string) => `${value}%`;
const xAxisFormatter = (value: string) => {
  const date = new Date(value);
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${month.toString().padStart(2, '0')}/${year}`;
};

const tooltipFormatter = (value: string, name: string) => [`${value}%`, name];

const InflationChart = ({ data }: { data: any[] }) => {
  const filteredData = data.filter(({ name }) => new Date(name).getFullYear() >= 2022);

  return (
    <LineChart width={400} height={300} data={filteredData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" tickFormatter={xAxisFormatter} />
      <YAxis tickFormatter={yAxisFormatter} domain={[2, 'auto']} />
      <Tooltip formatter={tooltipFormatter} />
      <Legend />
      <Line
        type="monotone"
        dataKey="inflation"
        stroke="#ac2c24"
        name="Votre inflation"
        activeDot={{ r: 5 }}
        strokeWidth={2}
      />
      <Line type="monotone" dataKey="mean" name="Inflation en France" stroke="#a9a9a9" />
    </LineChart>
  );
};

export default InflationChart;
