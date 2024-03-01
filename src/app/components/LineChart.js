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
      const response = await fetch('/api/Weights', {cache: "no-store"});
      const data = await response.json();

      console.log(data, "HERE");

      setChartOptions({
        title: {
          text: "Total Weight Chart"
        },
        xAxis: {
          categories: data.map(data => new Date(data.date).toLocaleDateString()),
        },
        yAxis:{
          max: 240,
          title: {
            text: "Weight"
          }
        },
        series: [{
          data: data.map(data => parseInt(data.weight)),
        }],
        legend: {
          enabled: false,
        },
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
      console.log("Something went wrong with the line chart",err)
    }
  };

  return (
    <div style={{width:'100%'}}>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
        style={{ width:'100%', height: '80%'}}
      />
    </div>
  );
};

export default LineChart;
