import React from 'react';
import { Pie } from 'react-chartjs-2';

import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);

export default function ProgressPieChart({ userMarks }) {
  const progress = userMarks;

  const data = {
    labels: ['Your Percentile', ''],
    datasets: [
      {
        data: [progress, 15 - progress],
        backgroundColor: ['#438AF6', '#eefdff' ],
        borderColor: ['#438AF6','#eefdff']
      },
    ],
  };

  const options = {
    plugins: {
        legend: {
          display: false, 
        },
      },
      
    cutout:'60%',
    responsive: true,
    maintainAspectRatio: false,
  };

  const containerStyle = {
    width: '200px',
    height: '200px',
    position: 'relative',
  };

  const textCenterStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

  };

  return (
    <div style={containerStyle}>
      <Pie data={data} options={options} />
      <div style={textCenterStyle}><h1>🎯</h1></div>
    </div>
  );
}
