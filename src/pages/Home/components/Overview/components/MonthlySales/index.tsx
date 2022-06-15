import React from 'react';
import useSWR from 'swr';
import { API } from 'config';
import { useSWRFetcher } from 'utils/useSWRFetcher';
import NumericCard from 'components/NumericCard';
import { NumericCardData } from 'components/NumericCard/NumericCard.types';

const MonthlySales: React.FC = () => {
  const fetcher = useSWRFetcher<NumericCardData>();
  const { data } = useSWR(API.SELLS_MONTH_URL, fetcher);

  return (
    <NumericCard
      header="Produtos vendidos no mês"
      footer={(value) => ({ main: value.toString(), suffix: 'produtos' })}
      inRelationTo="day"
      data={data}
    />
  );
};

export default MonthlySales;
