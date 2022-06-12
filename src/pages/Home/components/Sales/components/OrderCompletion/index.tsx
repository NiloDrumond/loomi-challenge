import React from 'react';
import { Box, HStack, Select, Text, useTheme } from '@chakra-ui/react';
import Card from 'components/Card';
import ReactApexChart, { Props } from 'react-apexcharts';

const MOCK_DATA = [10, 1, 3, 4, 2, 5, 6, 4, 5, 6, 12, 1];
const MOCK_DATA_2 = [8, 4, 2, 2, 7, 5, 3, 5, 1, 7, 11, 4];

// The typing of react-apexcharts is still class-based
const Chart = ReactApexChart as unknown as (params: Props) => JSX.Element;

const OrderCompletion: React.FC = () => {
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
      xaxis: {
        categories: [
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
        ],
        axisTicks: {
          show: false,
        },
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
        custom({ series, dataPointIndex }) {
          return `
                <div class="h_stack">
                  <span class="text">
                    <span class="bold">
                      ${series[0][dataPointIndex]}
                    </span>
                    realizados
                  </span>
                </div>
                <div class="h_stack">
                  <span class="text">
                    <span class="bold">
                      ${series[1][dataPointIndex]}
                    </span>
                  cancelados
                  </span>
                </div>
              `;
        },
      },
    };
  }, []);

  const series = React.useMemo<ApexAxisChartSeries>(() => {
    return [
      {
        data: MOCK_DATA,
        color: colors.charts.darkGreen,
        type: 'column',
        name: 'Realizados',
      },
      {
        data: MOCK_DATA_2,
        color: colors.charts.orange,
        type: 'column',
        name: 'Cancelados',
      },
    ];
  }, [colors]);

  return (
    <Card>
      <HStack w="100%" justifyContent="space-between">
        <Text fontWeight={700} color="main.500">
          Pedidos realizados x pedidos cancelados
        </Text>
        <Select maxW="48">
          <option value="year">Ano</option>
        </Select>
      </HStack>
      <Box id="chart" className="overlap">
        <Chart
          options={options}
          series={series}
          type="bar"
          width={550}
          height={350}
        />
      </Box>
    </Card>
  );
};

export default OrderCompletion;
