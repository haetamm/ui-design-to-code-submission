import React from 'react';
import ReactECharts from 'echarts-for-react';

const ChartLoanApprov = () => {
  const data = [
    { value: 2, name: 'Disetujui' },
    { value: 3, name: 'Belum Disetujui' },
  ];

  const options = {
    title: {
      text: 'Pinjaman Disetujui',
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
        name: 'Status Pinjaman',
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
          text: '40%',
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
          text: '2/5 pinjaman telah disetujui',
          textAlign: 'center',
          fill: '#888',
          fontSize: 14,
        },
      },
    ],
  };

  return <ReactECharts option={options} />;
};

export default ChartLoanApprov;
