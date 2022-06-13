import React from 'react';
import { Wrap, WrapItem } from '@chakra-ui/react';
import useSWR from 'swr';
import { API } from 'config';
import { useSWRFetcher } from 'utils/useSWRFetcher';
import { parseResponse } from './ConversionFunnel.utils';
import { ConversionFunnelData } from './ConversionFunnel.types';
import NumericCard from '../NumericCard';
import ConversionFunnelSkeleton from './ConversionFunnel.Skeleton';

const ConversionFunnel: React.FC = () => {
  const fetcher = useSWRFetcher<ConversionFunnelData>();
  const { data } = useSWR(API.CONVERSIONS_RESUME_URL, url =>
    fetcher({ url, parser: parseResponse }),
  );

  return !data ? (
    <ConversionFunnelSkeleton />
  ) : (
    <Wrap spacing={8}>
      <WrapItem w="60">
        <NumericCard
          header="Sessões"
          data={data.totalPerDay}
          inRelationTo="day"
          footer={value => ({
            main: value.toString(),
            suffix: 'visualizações',
          })}
        />
      </WrapItem>
      <WrapItem w="60">
        <NumericCard
          header="Visualizações de produto"
          data={data.productsViewPerMonth}
          footer={value => ({
            main: value.toString(),
            suffix: 'visualizações',
          })}
        />
      </WrapItem>
      <WrapItem w="60">
        <NumericCard
          header="Conversão para a página de produtos"
          data={data.productPageConversionPerMonth}
          footer={value => ({
            main: value.toString(),
            suffix: '%',
          })}
        />
      </WrapItem>
      <WrapItem w="60">
        <NumericCard
          header="Adições ao Carrinho"
          data={data.addToCartPerMonth}
          footer={value => ({
            main: value.toString(),
            suffix: 'produtos',
          })}
        />
      </WrapItem>
      <WrapItem w="60">
        <NumericCard
          header="Checkout - Frete"
          data={data.checkoutShippingPerMonth}
          footer={value => ({
            main: value.toString(),
            suffix: 'usuários',
          })}
        />
      </WrapItem>
      <WrapItem w="60">
        <NumericCard
          header="Checkout - E-mail"
          data={data.checkoutEmailPerMonth}
          footer={value => ({
            main: value.toString(),
            suffix: 'usuários',
          })}
        />
      </WrapItem>
      <WrapItem w="60">
        <NumericCard
          header="Checkout - Cadastro"
          data={data.checkoutEmailPerMonth}
          footer={value => ({
            main: value.toString(),
            suffix: 'usuários',
          })}
        />
      </WrapItem>
    </Wrap>
  );
};

export default ConversionFunnel;
