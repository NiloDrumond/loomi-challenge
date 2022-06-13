import React from 'react';
import { Wrap, WrapItem } from '@chakra-ui/react';
import DashboardCard from 'components/DashboardCard';

const ConversionFunnelSkeleton: React.FC = () => {
  return (
    <Wrap spacing={8}>
      <WrapItem w="60">
        <DashboardCard header="Sessões" isLoading />
      </WrapItem>
      <WrapItem w="60">
        <DashboardCard header="Visualizações de produto" isLoading />
      </WrapItem>
      <WrapItem w="60">
        <DashboardCard header="Conversão para a página de produtos" isLoading />
      </WrapItem>
      <WrapItem w="60">
        <DashboardCard header="Adições ao Carrinho" isLoading />
      </WrapItem>
      <WrapItem w="60">
        <DashboardCard header="Checkout - Frete" isLoading />
      </WrapItem>
      <WrapItem w="60">
        <DashboardCard header="Checkout - E-mail" isLoading />
      </WrapItem>
      <WrapItem w="60">
        <DashboardCard header="Checkout - Cadastro" isLoading />
      </WrapItem>
    </Wrap>
  );
};

export default ConversionFunnelSkeleton;
