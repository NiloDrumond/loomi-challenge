import React from 'react';
import useSWR from 'swr';
import { API } from 'config';
import { useSWRFetcher } from 'utils/useSWRFetcher';
import { NumericCardData } from 'components/NumericCard/NumericCard.types';
import { NumericCard } from 'components/NumericCard';
import { Box, useOutsideClick } from '@chakra-ui/react';
import { MapCardProps } from './MapCard.types';
import { useMapCard } from './useMapCard';

const MapCard = ({ containerRef }: MapCardProps) => {
  const { position, region, setRegion } = useMapCard();
  useOutsideClick({
    ref: containerRef,
    handler: () => setRegion(undefined),
  });
  const fetcher = useSWRFetcher<NumericCardData>();
  const { data } = useSWR(region ? API.ORDERS_MONTH_URL : null, fetcher);

  return (
    <Box
      visibility={region ? 'visible' : 'hidden'}
      zIndex={1}
      left={`calc(${position.left}px - 7.5rem)`}
      top={`calc(${position.top}px - 11.5rem)`}
      position="absolute"
      boxShadow="strongFloat"
    >
      <NumericCard
        cardProps={{ px: 4, py: 4, minH: '11rem', h: '11rem', w: '15rem' }}
        header="Pedidos realizados no mês"
        data={data}
        footer={(value) => ({ main: value.toString(), suffix: 'pedidos' })}
      />
    </Box>
  );
};

export { MapCard };
