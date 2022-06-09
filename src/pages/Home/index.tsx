/* eslint-disable react/no-unescaped-entities */
import { Center, Text } from '@chakra-ui/react';
import React from 'react';
import ApexTest from '../../components/ApexTest';

const Home = () => {
  return (
    <Center flex={1} h="100vh" w="100vw">
      <ApexTest />
    </Center>
  );
};

export default Home;
