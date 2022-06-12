import React from 'react';
import { Box, HStack, Select, Text, useTheme } from '@chakra-ui/react';
import Card from 'components/Card';
import ReactApexChart, { Props } from 'react-apexcharts';

const MOCK_DATA = [10, 1, 3, 4, 2, 5, 6, 4, 5, 6, 12, 1];
const MOCK_DATA_2 = [8, 4, 2, 2, 7, 5, 3, 5, 1, 7, 11, 4];
const MOCK_DATA_3 = [6, 4, 7, 10, 7, 5, 7, 5, 1, 7, 11, 4];
const MOCK_DATA_4 = [1, 2, 7, 2, 2, 5, 3, 5, 13, 7, 11, 8];

const months = [
  'JAN',
  'FEV',
  'MAR',
  'ABR',
  'MAI',
  'JUN',
  'JUL',
  'AGO',
  'SET',
  'OUT',
  'NOV',
  'DEZ',
];
// The typing of react-apexcharts is still class-based
const Chart = ReactApexChart as unknown as (params: Props) => JSX.Element;

const ProfitExpectation: React.FC = () => {
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
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      legend: {
        horizontalAlign: 'left',
        position: 'top',
        itemMargin: {
          horizontal: 6,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '70%',
          endingShape: 'rounded',
          borderRadius: 4,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2.5,
        curve: 'straight',
        colors: ['transparent'],
      },
      xaxis: {
        categories: months,
        axisTicks: {
          show: false,
        },
      },
      markers: {
        size: 4,
        colors: ['white', 'white', 'white', 'white'],
        strokeColors: [
          colors.charts.black,
          colors.charts.black,
          colors.charts.black,
          colors.charts.pink,
        ],
        strokeWidth: 2.5,
        fillOpacity: 1,
      },
      yaxis: {
        show: true,
        labels: {
          show: false,
        },
        axisBorder: {
          show: true,
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        enabled: true,
        marker: {
          show: true,
        },
        custom({ series, seriesIndex, dataPointIndex }) {
          const lastYear = seriesIndex % 2;
          return `
              <div class="compare_box">
                <div class="float">
                  ${months[dataPointIndex]}
                </div>
                <div class="v_stack">
                  <span class="text">Mês atual</span>
                  <div class="h_stack">
                    <span class="text">
                      R$
                      <span class="bold">
                        ${series[0 + lastYear][dataPointIndex]}
                      </span>
                    </span>
                  </div>
                </div>

                <div class="divider"></div>

                <div class="v_stack">
                  <span class="text">Mês do ano anterior</span>
                  <div class="h_stack">
                    <span class="text">
                      R$
                      <span class="bold">
                        ${series[2 + lastYear][dataPointIndex]}
                      </span>
                    </span>
                  </div>
                </div>
              </div>`;
        },
      },
    };
  }, [colors]);

  const series = React.useMemo<ApexAxisChartSeries>(() => {
    return [
      {
        data: MOCK_DATA,
        color: colors.charts.teal,
        type: 'column',
        name: 'Real',
      },
      {
        data: MOCK_DATA_2,
        color: colors.charts.lightPink,
        type: 'column',
        name: 'Expectativa',
      },
      {
        data: MOCK_DATA_3,
        color: colors.charts.black,
        type: 'line',
        name: 'Real do ano anterior',
      },
      {
        data: MOCK_DATA_4,
        color: colors.charts.pink,
        type: 'line',
        name: 'Expectativa do ano anterior',
      },
    ];
  }, [colors]);

  return (
    <Card>
      <HStack w="100%" justifyContent="space-between">
        <Text fontWeight={700} color="main.500">
          Expectativa de lucro x lucro real
        </Text>
        <Select maxW="48">
          <option value="year">Ano</option>
        </Select>
      </HStack>
      <Box id="chart">
        <Chart
          options={options}
          series={series}
          type="bar"
          width={650}
          height={350}
        />
      </Box>
    </Card>
  );
};

export default ProfitExpectation;
