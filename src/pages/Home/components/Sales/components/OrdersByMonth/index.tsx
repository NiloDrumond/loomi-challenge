import React from 'react';
import { Box, HStack, Select, Text, useTheme } from '@chakra-ui/react';
import Card from 'components/Card';
import ReactApexChart, { Props } from 'react-apexcharts';

const MOCK_DATA = [10, 1, 3, 4, 2, 5, 6, 4, 5, 6, 12, 1];

// The typing of react-apexcharts is still class-based
const Chart = ReactApexChart as unknown as (params: Props) => JSX.Element;

const OrdersByMonth: React.FC = () => {
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
            show: false,
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
          horizontal: false,
          columnWidth: '45%',
          borderRadius: 4,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
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
        custom({ series, seriesIndex, dataPointIndex }) {
          return `
                    <span class="text">
                      <span class="bold">
                        ${series[seriesIndex][dataPointIndex]}
                      </span>
                      pedidos
                    </span>
                  `;
        },
      },
    };
  }, []);

  const series = React.useMemo<ApexAxisChartSeries>(() => {
    return [
      {
        data,
        color: colors.charts.black,
      },
    ];
  }, [colors, data]);

  return (
    <Card>
      <HStack w="100%" justifyContent="space-between">
        <Text fontWeight={700} color="main.500">
          Pedidos por mês
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
          width={500}
          height={350}
        />
      </Box>
    </Card>
  );
};

export default OrdersByMonth;
