import React from 'react';
import { WrapItem } from '@chakra-ui/react';
import DashboardCard from 'components/DashboardCard';
import { API } from 'config';
import useSWR from 'swr';
import { useSWRFetcher } from 'utils/useSWRFetcher';
import moment from 'moment';
import { AlertData } from './Alerts.types';
import AlertsSkeleton from './Alerts.Skeleton';

const Alerts = () => {
  const fetcher = useSWRFetcher<AlertData[]>();
  const { data } = useSWR(API.ALERTS_URL, fetcher);

  const { maintenance, lowStock } = React.useMemo<
    Record<string, AlertData | undefined>
  >(() => {
    if (!data) return {};
    return {
      maintenance: data.find((d) => d.type === 'Produtos em manutenção'),
      lowStock: data.find((d) => d.type === 'Acabando o estoque'),
    };
  }, [data]);

  return maintenance && lowStock ? (
    <>
      <WrapItem w="60">
        <DashboardCard
          header="Produtos em manutenção"
          colorScheme={maintenance.value === 0 ? 'teal' : 'pink'}
          extraInfo={moment(maintenance.since).fromNow()}
          footer={{ main: maintenance.value.toString(), suffix: 'produtos' }}
        />
      </WrapItem>
      <WrapItem w="60">
        <DashboardCard
          header="Acabando o estoque"
          colorScheme={lowStock.value === 0 ? 'teal' : 'pink'}
          extraInfo={moment(maintenance.since).fromNow()}
          description={lowStock.value !== 0 ? 'repor o quanto antes' : ''}
          footer={{ main: lowStock.value.toString(), suffix: 'produtos' }}
        />
      </WrapItem>
    </>
  ) : (
    <AlertsSkeleton />
  );
};

export default Alerts;
