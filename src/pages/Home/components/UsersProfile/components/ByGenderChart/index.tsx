/* eslint-disable no-useless-concat */
import React from 'react';
import { Box, useTheme } from '@chakra-ui/react';
import ApexCharts from 'apexcharts';
import ReactApexChart, { Props } from 'react-apexcharts';

const MOCK_DATA = [123, 231];

// The typing of react-apexcharts is still class-based
const Chart = ReactApexChart as unknown as (params: Props) => JSX.Element;

const ByGenderChart: React.FC = () => {
  const { colors } = useTheme();

  const data = MOCK_DATA;

  const options = React.useMemo<ApexCharts.ApexOptions>(() => {
    return {
      labels: ['Masculino', 'Feminino'],
      chart: {
        type: 'donut',
      },
      dataLabels: {
        enabled: false,
        dropShadow: {
          enabled: false,
        },
      },
      legend: {
        markers: {
          offsetX: -4,
        },
      },
      tooltip: {
        enabled: true,
        marker: {
          show: true,
        },
        custom({ series, seriesIndex }) {
          return `<div class="v_arrow_box">
                    <span class="text">
                      <span class="bold">
                        ${series[seriesIndex]}
                      </span>
                      sessões
                    </span>
                  </div>`;
        },
      },
      colors: [colors.charts.beige, colors.charts.black],
      plotOptions: {
        pie: {
          donut: {
            expandOnClick: false,
            size: '50%',
          },
        },
      },
    };
  }, [colors]);

  const series = React.useMemo<ApexNonAxisChartSeries>(() => {
    return data;
  }, [data]);

  return (
    <Box id="chart">
      <Chart
        options={options}
        series={series}
        type="donut"
        height={350}
        width={450}
      />
    </Box>
  );
};

export default ByGenderChart;
