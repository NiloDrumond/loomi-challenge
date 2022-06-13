import React from 'react';
import {
  Box,
  Center,
  HStack,
  Select,
  Spinner,
  Text,
  useTheme,
} from '@chakra-ui/react';
import Card from 'components/Card';
import ReactApexChart, { Props } from 'react-apexcharts';
import { API } from 'config';
import useSWR from 'swr';
import { useSWRFetcher } from 'utils/useSWRFetcher';
import { mapToValue } from 'utils/mapToValue';

// The typing of react-apexcharts is still class-based
const Chart = ReactApexChart as unknown as (params: Props) => JSX.Element;

const OrderCompletion: React.FC = () => {
  const { colors } = useTheme();

  const fetcher = useSWRFetcher<number[]>({
    parser: mapToValue,
  });
  const { data: completed } = useSWR(API.ORDERS_CHART_URL, fetcher);
  const { data: canceled } = useSWR(API.CANCELED_ORDERS_CHART_URL, fetcher);

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
        data: completed || [],
        color: colors.charts.darkGreen,
        type: 'column',
        name: 'Realizados',
      },
      {
        data: canceled || [],
        color: colors.charts.orange,
        type: 'column',
        name: 'Cancelados',
      },
    ];
  }, [colors, completed, canceled]);

  const hasLoaded = React.useMemo(
    () => completed && canceled,
    [completed, canceled],
  );

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
      {hasLoaded ? (
        <Box id="chart" className="overlap">
          <Chart
            options={options}
            series={series}
            type="bar"
            width={550}
            height={350}
          />
        </Box>
      ) : (
        <Center width={550} height={350}>
          <Spinner />
        </Center>
      )}
    </Card>
  );
};

export default OrderCompletion;
