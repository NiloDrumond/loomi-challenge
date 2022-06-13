import React from 'react';
import { Heading, VStack } from '@chakra-ui/react';
import Overview from './components/Overview';
import ConversionFunnel from './components/ConversionFunnel';
import UsersResume from './components/UsersResume';
import Sales from './components/Sales';
import ProductsList from './components/ProductsList';

const Home: React.FC = () => {
  return (
    <VStack mb={10} flex={1} alignItems="flex-start" spacing={6}>
      <Heading fontSize="2xl">Início</Heading>
      <Overview />
      <Heading color="brand.main" fontSize="xl">
        Dashboard de vendas
      </Heading>
      <Sales />
      <Heading color="brand.main" fontSize="xl">
        Funil de conversão
      </Heading>
      <ConversionFunnel />
      <Heading color="brand.main" fontSize="xl">
        Perfil do usuário
      </Heading>
      <UsersResume />
      <ProductsList />
    </VStack>
  );
};

export default Home;
