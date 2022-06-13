import React from 'react';
import useSWR from 'swr';
import { API } from 'config';
import { useSWRFetcher } from 'utils/useSWRFetcher';
import NumericCard from 'pages/Home/components/NumericCard';
import { NumericCardData } from 'pages/Home/components/NumericCard/NumericCard.types';

const MonthlyOrders: React.FC = () => {
  const fetcher = useSWRFetcher<NumericCardData>();
  const { data } = useSWR(API.ORDERS_MONTH_URL, url => fetcher({ url }));

  return (
    <NumericCard
      header="Pedidos realizados no mês"
      footer={value => ({ main: value.toString(), suffix: 'pedidos' })}
      inRelationTo="day"
      data={data}
    />
  );
};

export default MonthlyOrders;
