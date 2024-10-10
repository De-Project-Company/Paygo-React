import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip
);

const LineChart = ({ price }: { price: number[] }) => {
  const data = {
    labels: [
      'JAN',
      'FEB',
      'MAR',
      'APR',
      'MAY',
      'JUN',
      'JUL',
      'AUG',
      'SEP',
      'OCT',
      'NOV',
      'DEC',
    ],
    datasets: [
      {
        data: price,
        fill: true,
        backgroundColor: 'rgba(66, 98,235, 0.2)',
        borderColor: 'rgb(66, 99, 235)',
        borderWidth: 1,
        lineTension: 0.4,
        pointRadius: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: true,
        title: {
          display: false,
          text: 'Time',
        },
        ticks: {
          display: true,
        },
      },
      y: {
        display: true,
        title: {
          display: false,
          text: 'Time',
        },
        ticks: {
          display: true,
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
