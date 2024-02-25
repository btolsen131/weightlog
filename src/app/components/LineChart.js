'use client'
import React, { useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const LineChart = () => {
  const [hoverData, setHoverData] = useState(null);

  const handleHover = (e) => {
    setHoverData(e.target.category);
  };

  const [chartOptions, setChartOptions] = useState({
    xAxis: {
      categories: ['A', 'B', 'C'],
    },
    series: [{ data: [1, 2, 3] }],
    plotOptions: {
      series: {
        point: {
          events: {
            mouseOver: handleHover
          }
        }
      }
    }
  });

  const updateSeries = () => {
    setChartOptions({
      ...chartOptions,
      series: [{ data: [Math.random() * 5, 2, 1] }]
    });
  };

  return (
    <div style={{width:'100%'}}>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
        style={{ width:'100%', height: '80%'}}
      />
      <h3>Hovering over {hoverData}</h3>
      <button onClick={updateSeries}>Update Series</button>
    </div>
  );
};

export default LineChart;
