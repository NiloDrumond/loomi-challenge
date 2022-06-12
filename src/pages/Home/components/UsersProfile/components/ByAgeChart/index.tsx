/* eslint-disable no-useless-concat */
import React from 'react';
import { Box, useTheme } from '@chakra-ui/react';
import ApexCharts from 'apexcharts';
import ReactApexChart, { Props } from 'react-apexcharts';
import { getTickAmount } from './ByAgeChart.utils';

const MOCK_DATA = [0, 1800, 2350, 2100, 750, 1200, 200];

// The typing of react-apexcharts is still class-based
const Chart = ReactApexChart as unknown as (params: Props) => JSX.Element;

const ByAgeChart: React.FC = () => {
  const { colors } = useTheme();

  const data = MOCK_DATA;

  const options = React.useMemo<ApexCharts.ApexOptions>(() => {
    return {
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false,
        },
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        enabled: true,
        custom({ series, seriesIndex, dataPointIndex }) {
          return `${'<div class="arrow_box"><span class="text"><span class="bold">'}${
            series[seriesIndex][dataPointIndex]
          }</span> ${
            series[seriesIndex][dataPointIndex] > 1000 ? 'mil' : ''
          }<span> </div>`;
        },
      },
      xaxis: {
        categories: ['-18', '18-24', '25-34', '35-44', '45-52', '55-64', '65+'],
        tickAmount: getTickAmount(data),
        labels: {
          show: true,

          formatter: (value: string) => {
            // The type is actually number
            const str = String(value);
            if (str.length === 4) {
              return `${str[0]},${str[1]}  MIL`;
            }
            if (str.length === 5) {
              return `${str.slice(0, -2)} MIL`;
            }
            return str;
          },
        },
      },
    };
  }, [data]);

  const series = React.useMemo<ApexAxisChartSeries>(() => {
    return [
      {
        data,
        color: colors.charts.black,
      },
    ];
  }, [colors, data]);

  return (
    <Box id="chart" className="horizontal">
      <Chart
        options={options}
        series={series}
        type="bar"
        height={300}
        width={550}
      />
    </Box>
  );
};

export default ByAgeChart;
