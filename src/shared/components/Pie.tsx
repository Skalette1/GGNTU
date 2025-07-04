import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import '../../pages/sustainability/sustainability.css'

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  data?: { labels?: string[]; values?: number[] };
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const defaultData = {
    labels: [
      'Образование',
      'Экология',
      'Технологии',
      'Социум',
      'Ритейл Ultra-Convenience',
      'Жесткий дискаунтер',
    ],
    values: [25, 15, 20, 10, 15, 15],
  };

  const chartData = data && data.labels && data.values
    ? {
        labels: data.labels,
        datasets: [
          {
            label: 'Распределение',
            data: data.values,
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }
    : {
        labels: defaultData.labels,
        datasets: [
          {
            label: 'Распределение',
            data: defaultData.values,
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#fff',
          font: {
            size: 14,
            family: 'Arial',
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(32, 67, 118, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#fff',
        borderWidth: 1,
      },
    },
  };

  return (
    <div className='pie' style={{ width: '100%', height: 'auto' }}>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;