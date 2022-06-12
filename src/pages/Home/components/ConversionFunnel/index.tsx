import React from 'react';
import { Wrap, WrapItem } from '@chakra-ui/react';
import DashboardCard from 'components/DashboardCard';

const ConversionFunnel: React.FC = () => {
  return (
    <Wrap spacing={8}>
      <WrapItem w="60">
        <DashboardCard
          header="Sessões"
          colorScheme="teal"
          extraInfo="+ 15 %"
          description="em relação a ontem"
          footer={{ main: '2.053', suffix: 'visualizações' }}
        />
      </WrapItem>
      <WrapItem w="60">
        <DashboardCard
          header="Visualizações de produto"
          colorScheme="teal"
          extraInfo="+ 15 %"
          description="em relação a julho"
          footer={{ main: '838', suffix: 'visualizações' }}
        />
      </WrapItem>
      <WrapItem w="60">
        <DashboardCard
          header="Conversão para a página de produtos"
          colorScheme="teal"
          extraInfo="+ 15 %"
          description="em relação a julho"
          footer={{ main: '40', suffix: '%' }}
        />
      </WrapItem>
      <WrapItem w="60">
        <DashboardCard
          header="Adições ao Carrinho"
          colorScheme="teal"
          extraInfo="+ 15 %"
          description="em relação a julho"
          footer={{ main: '8', suffix: 'produtos' }}
        />
      </WrapItem>
      <WrapItem w="60">
        <DashboardCard
          header="Checkout - Frete"
          colorScheme="teal"
          extraInfo="+ 15 %"
          description="em relação a julho"
          footer={{ main: '10', suffix: 'usuários' }}
        />
      </WrapItem>
      <WrapItem w="60">
        <DashboardCard
          header="Checkout - E-mail"
          colorScheme="teal"
          extraInfo="+ 15 %"
          description="em relação a julho"
          footer={{ main: '10', suffix: 'usuários' }}
        />
      </WrapItem>
      <WrapItem w="60">
        <DashboardCard
          header="Checkout - Cadastro"
          colorScheme="teal"
          extraInfo="+ 15 %"
          description="em relação a julho"
          footer={{ main: '10', suffix: 'usuários' }}
        />
      </WrapItem>
    </Wrap>
  );
};

export default ConversionFunnel;
