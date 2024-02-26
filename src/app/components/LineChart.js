'use client'
import React, { useState, useEffect } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const LineChart = () => {
  const [chartOptions, setChartOptions] = useState(null);
  const [hoverData, setHoverData] = useState(null);

  const handleHover = (e) => {
    setHoverData(e.target.category);
  };

  useEffect(() => {
    fetchData();
  },[])

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/getWeights');
      const data = await response.json();
      debugger;

      setChartOptions({
        xAxis: {
          categories: data.map(data => data.date),
        },
        series: [{
          data: data.map(data => data.value),
        }],
        plotOptions: {
          series: {
            point:{
              events:{
                mouseOver: handleHover
              }
            }
          }
        }
      })
    } catch (err) {
      console.log("Something went wrong",err)
    }
  };

  return (
    <div style={{width:'100%'}}>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
        style={{ width:'100%', height: '80%'}}
      />
      <h3>Hovering over {hoverData}</h3>
    </div>
  );
};

export default LineChart;
