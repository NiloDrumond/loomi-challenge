/* eslint-disable no-useless-concat */
import React from 'react';
import { Box, useTheme } from '@chakra-ui/react';
import ApexCharts from 'apexcharts';
import ReactApexChart, { Props } from 'react-apexcharts';

const MOCK_DATA = [70999, 83421];

// The typing of react-apexcharts is still class-based
const Chart = ReactApexChart as unknown as (params: Props) => JSX.Element;

const ByGenderChart: React.FC = () => {
  const { colors } = useTheme();

  const data = MOCK_DATA;

  const options = React.useMemo<ApexCharts.ApexOptions>(() => {
    return {
      labels: ['Cliente retornando', 'Novo cliente'],
      chart: {
        type: 'donut',
      },
      dataLabels: {
        enabled: false,
        dropShadow: {
          enabled: false,
        },
      },
      tooltip: {
        enabled: true,
        custom({ series, seriesIndex }) {
          const percent = (
            (series[seriesIndex] /
              (series as number[]).reduce((v, acc) => acc + v)) *
            100
          ).toFixed(0);
          return `<div class="v_arrow_box">
                    <div class="h_stack">
                      <span class="text">
                        <span class="bold">
                          ${percent}
                        </span>
                        %
                      </span>
                    </div>
                    <div class="h_stack">
                      <span class="text">
                        <span class="bold">
                          ${series[seriesIndex]}
                        </span>
                      transações
                      </span>
                    </div>
                  </div>`;
        },
      },
      legend: {
        markers: {
          offsetX: -4,
        },
      },
      colors: [colors.charts.green, colors.charts.teal],
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
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
        height={400}
        width={500}
      />
    </Box>
  );
};

export default ByGenderChart;
