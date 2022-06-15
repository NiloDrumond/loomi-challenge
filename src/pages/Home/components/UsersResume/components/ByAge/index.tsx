/* eslint-disable no-useless-concat */
import React from 'react';
import { Box, Center, Spinner, useTheme } from '@chakra-ui/react';
import ApexCharts from 'apexcharts';
import ReactApexChart, { Props } from 'react-apexcharts';
import { ByAgeProps } from './ByAge.types';

// The typing of react-apexcharts is still class-based
const Chart = ReactApexChart as unknown as (params: Props) => JSX.Element;

const ByAge = ({ data }: ByAgeProps) => {
  const { colors } = useTheme();

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
  }, []);

  const series = React.useMemo<ApexAxisChartSeries>(() => {
    return [
      {
        // The api is sending float numbers as sessions, which don't make sense so I'm truncating
        data: data ? data.map((d) => Math.trunc(d)) : [],
        color: colors.charts.black,
      },
    ];
  }, [colors, data]);

  return data ? (
    <Box id="chart" className="horizontal">
      <Chart
        options={options}
        series={series}
        type="bar"
        height={300}
        width={550}
      />
    </Box>
  ) : (
    <Center height={300} width={550}>
      <Spinner />
    </Center>
  );
};

export default ByAge;
