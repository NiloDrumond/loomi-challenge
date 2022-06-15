import React from 'react';
import { Box, Heading, VStack } from '@chakra-ui/react';
import Card from 'components/Card';
import Map from 'components/Map';

const Logistics = () => {
  return (
    <VStack flex={1} h="100%" alignItems="flex-start" spacing={6}>
      <Heading fontSize="2xl">Regiões de entrega</Heading>
      <Card p={0} w="100%" flex={1}>
        <Map />
      </Card>
      <Box h={6} />
    </VStack>
  );
};

export default Logistics;
