import { Box, Stack, Typography } from '@mui/material';
import books from '../../assets/Books.png';
import run from '../../assets/Run.png';
import chronometer from '../../assets/chronometer.png';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import ResultsChartStyles from './ResultsChartStyles';

// establish custom plugin to register with chart
const highlightHighestIndexPlugin = {
  id: 'highlightHighestIndex',
  beforeDraw: (chart: ChartJS) => {
    highlightRow(chart);
  },
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels,
  highlightHighestIndexPlugin
);

// Find the row with the highest value and highlight grey
// For use in the custom plugin
function highlightRow(chart: ChartJS) {
  const { ctx, scales } = chart;
  const dataValues = chart.data.datasets[0].data as number[];
  const highestIndex = dataValues.indexOf(Math.max(...dataValues));

  if (highestIndex !== -1) {
    const yAxis = scales.y;
    const barHeight = yAxis.height / yAxis.ticks.length;
    const top = yAxis.getPixelForValue(highestIndex) - barHeight / 2;
    const bottom = yAxis.getPixelForValue(highestIndex) + barHeight / 2;

    ctx.save();
    ctx.fillStyle = 'rgba(211, 211, 211, 0.3)';
    ctx.fillRect(yAxis.left, top, chart.width - yAxis.left, bottom - top);
    ctx.restore();
  }
}

export default function ResultsChart() {
  const styles = ResultsChartStyles();

  // Chart customization options
  const options: ChartOptions<'bar'> = {
    responsive: true,
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 25,
        },
        grid: {
          display: true,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
        formatter: (value) => `${value}%`,
        color: 'white',
        font: {
          weight: 'bold',
          size: 14,
        },
        offset: -38,
      },
    },
  };

  // Data used to render chart
  const data = {
    labels: [
      'Homeschool',
      'Virtual Private School',
      'Virtual Public School',
      'Virtual Charter School',
      'Virtual Hybrid School',
      'Local Private School',
      'Local Charter School',
      'Public School',
    ],
    datasets: [
      {
        label: 'Percentage',
        data: [56, 28, 19, 21, 45, 22, 22, 16],
        backgroundColor: ['#1659CB'],
      },
    ],
  };

  // Find the data point with the highest value
  const dataValues = data.datasets[0].data;
  const highestIndex = dataValues.indexOf(Math.max(...dataValues));

  // Update the data with a different background color for the highest value
  const updatedData: ChartData<'bar'> = {
    ...data,
    datasets: [
      {
        ...data.datasets[0],
        backgroundColor: data.datasets[0].data.map((_, index) =>
          index === highestIndex ? '#23ADA4' : '#1659CB'
        ),
      },
    ],
  };

  return (
    <Box sx={styles.chartContainer}>
      <Bar options={options} data={updatedData} />
      <Box sx={styles.horizontalRule} />
      <Stack direction={'row'} sx={styles.detailsContainer}>
        <Box sx={styles.scoreDetail}>
          <Box component={'img'} src={books} sx={styles.scoreImg} />
          <Box sx={styles.scoreTypeContainer}>
            <Typography sx={styles.scoreType}>Teaching Style</Typography>
            <Typography sx={styles.scoreTypeAnswer}>Flexible</Typography>
          </Box>
        </Box>
        <Box sx={styles.scoreDetail}>
          <Box component={'img'} src={run} sx={styles.scoreImg} />
          <Box sx={styles.scoreTypeContainer}>
            <Typography sx={styles.scoreType}>Lifestyle</Typography>
            <Typography sx={styles.scoreTypeAnswer}>Busy</Typography>
          </Box>
        </Box>
        <Box sx={styles.scoreDetail}>
          <Box component={'img'} src={chronometer} sx={styles.scoreImg} />
          <Box sx={styles.scoreTypeContainer}>
            <Typography sx={styles.scoreType}>Time Constraints</Typography>
            <Typography sx={styles.scoreTypeAnswer}>
              Career Obligations
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
