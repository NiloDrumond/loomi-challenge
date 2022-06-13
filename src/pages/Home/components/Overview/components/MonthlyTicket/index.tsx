import React from 'react';
import useSWR from 'swr';
import { API } from 'config';
import { useSWRFetcher } from 'utils/useSWRFetcher';
import { reaisLocale } from 'utils/reaisLocale';
import NumericCard from 'pages/Home/components/NumericCard';
import { NumericCardData } from 'pages/Home/components/NumericCard/NumericCard.types';

const MonthlyTicket: React.FC = () => {
  const fetcher = useSWRFetcher<NumericCardData>();
  const { data } = useSWR(API.AVG_TICKET_MONTH, url => fetcher({ url }));

  return (
    <NumericCard
      header="Ticket médio mensal"
      footer={value => ({
        prefix: 'R$',
        main: `${reaisLocale.format(value)}`,
      })}
      inRelationTo="day"
      data={data}
    />
  );
};

export default MonthlyTicket;
