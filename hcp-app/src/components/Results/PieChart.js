import React, { PureComponent } from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Pie} from 'react-chartjs-2';
import './Results.css';
ChartJS.register (ArcElement, Tooltip, Legend);


function PieChart({ selectedStates }) {
  const data = {
    labels: selectedStates.length > 0 ? selectedStates : ['No states selected'],
    datasets: [
      {
        data: selectedStates.length > 0 ? selectedStates.map(() => 1) : [1],
        backgroundColor: selectedStates.length > 0
          ? [
              'aqua',
              'orangered',
              'purple',
              'blue',
              'green',
              'yellow',
              'red',
              'gray',
              'brown',
              'pink',
              // Add more colors if needed
            ]
          : ['#ddd'],
      },
    ],
  };

  return (
    <div className="piechart" style={{ padding: '20px', width: '50%'}}>
      <div style={{ width: '500px', height: '500px' }}>
        <Pie data={data} />
      </div>
    </div>
  );
}

export default PieChart;