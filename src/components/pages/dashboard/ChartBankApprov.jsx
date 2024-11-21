import React from 'react';
import ReactECharts from 'echarts-for-react';

const ChartBankApprov = () => {
  const data = [
    { value: 1048, name: 'BRI' },
    { value: 300, name: 'Artha Graha' },
    { value: 484, name: 'BTN' },
    { value: 580, name: 'Mandiri' },
    { value: 735, name: 'KEB Hana Bank' },
  ];

  const options = {
    title: {
      text: 'Top 5 Bank Approval Tertinggi',
      left: 'center',
      top: '0px',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      show: false,
    },
    color: ['#28004b', '#65ebeb', '#1cabe6', '#3d30ce', '#7e22ce'],
    series: [
      {
        name: 'Banks',
        type: 'pie',
        radius: ['40%', '75%'],
        center: ['50%', '53%'],
        data: data,
        emphasis: {
          fontWeight: 'bold',
          itemStyle: {
            shadowBlur: 20,
            shadowOffsetX: 0,
            shadowOffsetY: 5,
            shadowColor: 'rgba(0, 0, 0, 0.3)',
          },
          label: {
            show: true,
            position: 'outside',
            formatter: '{b}',
          },
          labelLine: {
            show: true,
            length: 15,
            length2: 10,
            smooth: true,
          },
        },
      },
    ],
  };

  return <ReactECharts option={options} />;
};

export default ChartBankApprov;
