import React from 'react';
import { WrapItem } from '@chakra-ui/react';
import { DashboardCard } from 'components/DashboardCard';

const AlertsSkeleton = () => {
  return (
    <>
      <WrapItem w="60">
        <DashboardCard header="Produtos em manutenção" isLoading />
      </WrapItem>
      <WrapItem w="60">
        <DashboardCard header="Acabando o estoque" isLoading />
      </WrapItem>
    </>
  );
};

export { AlertsSkeleton };
