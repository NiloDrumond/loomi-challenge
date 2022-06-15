import React from 'react';
import useSWR from 'swr';
import { API } from 'config';
import { useSWRFetcher } from 'utils/useSWRFetcher';
import { reaisLocale } from 'utils/reaisLocale';
import NumericCard from 'components/NumericCard';
import { NumericCardData } from 'components/NumericCard/NumericCard.types';

const DailyTicket = () => {
  const fetcher = useSWRFetcher<NumericCardData>();
  const { data } = useSWR(API.AVG_TICKET_DAY, fetcher);

  return (
    <NumericCard
      header="Ticket médio últimas 24h"
      footer={(value) => ({
        prefix: 'R$',
        main: `${reaisLocale.format(value)}`,
      })}
      inRelationTo="day"
      data={data}
    />
  );
};

export default DailyTicket;
