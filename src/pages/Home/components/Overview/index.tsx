import React from 'react';
import { Wrap, WrapItem } from '@chakra-ui/react';
import DashboardCard from 'components/DashboardCard';

const Overview: React.FC = () => {
  return (
    <Wrap spacing={8}>
      <WrapItem w="60">
        <DashboardCard
          header="Ticket médio últimas 24h"
          colorScheme="teal"
          extraInfo="+ 15 %"
          description="em relação a ontem"
          footer={{ prefix: 'R$', main: '9.292,00' }}
        />
      </WrapItem>
      <WrapItem w="60">
        <DashboardCard
          header="Ticket médio mensal"
          colorScheme="teal"
          extraInfo="+ 15 %"
          description="em relação a ontem"
          footer={{ prefix: 'R$', main: '129.292,00' }}
        />
      </WrapItem>
      <WrapItem w="60">
        <DashboardCard
          header="Produtos em manutenção"
          colorScheme="pink"
          extraInfo="há 5 dias"
          footer={{ main: '8', suffix: 'produtos' }}
        />
      </WrapItem>
      <WrapItem w="60">
        <DashboardCard
          header="Acabando o estoque"
          colorScheme="pink"
          extraInfo="há 5 dias"
          description="repor o quanto antes"
          footer={{ main: '10', suffix: 'produtos' }}
        />
      </WrapItem>
      <WrapItem w="60">
        <DashboardCard
          header="Pedidos realizados no mês"
          colorScheme="teal"
          extraInfo="+ 15 %"
          description="em relação a julho"
          footer={{ main: '10', suffix: 'pedidos' }}
        />
      </WrapItem>
      <WrapItem w="60">
        <DashboardCard
          header="Produtos vendidos no mês"
          colorScheme="teal"
          extraInfo="+ 15 %"
          description="em relação a julho"
          footer={{ main: '23', suffix: 'produtos' }}
        />
      </WrapItem>
    </Wrap>
  );
};

export default Overview;
