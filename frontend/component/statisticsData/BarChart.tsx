import React from 'react';
import {Chart} from 'react-google-charts';

export const data = [
  ['Year', 'Income', 'Expense'],
  ['Mar 2022', 1000, 400],
  ['Apr 2022', 1170, 460],
  ['May 2022', 660, 1120],
  ['Jun 2022', 1030, 540],
];

export const options = {
  chart: {
    title: 'Company Performance',
    subtitle: 'Sales, Expenses, and Profit: 2014-2017',
  },
};

export function BarChartComponent() {
  return (
    <Chart
      chartType='Bar'
      width='100%'
      height='300px'
      data={data}
      // options={options}
    />
  );
}
