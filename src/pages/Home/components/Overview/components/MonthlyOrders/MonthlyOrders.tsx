import React from 'react';
import useSWR from 'swr';
import { API } from 'config';
import { useSWRFetcher } from 'utils/useSWRFetcher';
import { NumericCard } from 'components/NumericCard';
import { NumericCardData } from 'components/NumericCard/NumericCard.types';

const MonthlyOrders = () => {
  const fetcher = useSWRFetcher<NumericCardData>();
  const { data } = useSWR(API.ORDERS_MONTH_URL, fetcher);

  return (
    <NumericCard
      header="Pedidos realizados no mês"
      footer={(value) => ({ main: value.toString(), suffix: 'pedidos' })}
      inRelationTo="day"
      data={data}
    />
  );
};

export { MonthlyOrders };
