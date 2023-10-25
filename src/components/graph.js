import React from 'react';
import { Chart as ChartJS, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';
import jsonData from './plot.json';

ChartJS.register(LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

export default function Lines({ userData }) {
  const { xValues, yValues } = jsonData;
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
      tooltip: {
        enabled: true,
        usePointStyle: true,
        cornerRadius: 0,
        titleAlign: 'center',
        titleSpacing: 3,
        TitleFont: {
          weight: 'bold',
        },
        backgroundColor: 'black',
        bodyAlign: 'center',
        callbacks: {
          label: (context) => {
            if (context.datasetIndex === 1) {
              return 'This is your Percentile';
            }
            return '';
          },
        },
      },
    },
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        ticks: {
          stepSize: 20,
        },
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
  };

  const labels = xValues;

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: yValues,
        borderColor: 'rgb(53, 162, 235)',
        pointRadius: 0,
      },
      {
        label: 'Marked Point',
        data:  [{ x: userData.labels, y: yValues[userData.labels] }],
        borderColor: 'red',
        pointBackgroundColor: 'red',
        pointRadius: 5,
      },
      {
        type: 'line',
        fill: true,
        backgroundColor: 'rgba(0,0,0,0)',
        data: [
          { x: 72, y: 0 },
          { x: 72, y: 100 },
        ],
        borderColor: 'red',
        borderWidth: 1,
        borderDash: [5, 5],
        pointRadius: 0,
      },
      {
        type: 'line',
        fill: true,
        backgroundColor: 'rgba(0,0,0,0)',
        data: [
          { x: userData.labels, y: 0 },
          { x: userData.labels, y: 100 },
        ],
        borderColor: 'blue',
        borderWidth: 1,
        borderDash: [5, 5],
        pointRadius: 0,
      },
    ],
  };

  return (
    <Line options={options} data={data} />
  );
}
