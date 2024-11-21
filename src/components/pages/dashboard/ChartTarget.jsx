import React from 'react';
import ReactECharts from 'echarts-for-react';

const ChartTarget = () => {
  const data = [{ value: 2, name: 'Target' }];

  const options = {
    title: {
      text: 'Target',
      left: 'center',
      top: '0px',
    },
    tooltip: {
      show: false,
    },
    legend: {
      show: false,
    },
    series: [
      {
        name: 'Target',
        type: 'pie',
        radius: ['50%', '70%'],
        center: ['50%', '50%'],
        data: data,
        color: ['#1cabe6', '#ccc'],
        label: {
          show: false,
        },
        emphasis: {
          scale: false,
          scaleSize: 10,
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
    graphic: [
      {
        type: 'text',
        left: 'center',
        top: '46%',
        style: {
          text: '280%',
          textAlign: 'center',
          fill: '#1cabe6',
          fontSize: 30,
          fontWeight: 'bold',
        },
      },
      {
        type: 'text',
        left: 'center',
        bottom: '15px',
        style: {
          text: 'Rp14.000.000.000 / Rp5.000.000.000',
          textAlign: 'center',
          fill: '#888',
          fontSize: 14,
        },
      },
    ],
  };

  return <ReactECharts option={options} />;
};

export default ChartTarget;
