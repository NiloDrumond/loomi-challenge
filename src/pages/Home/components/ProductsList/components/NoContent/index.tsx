import React from 'react';
import { Center, Text } from '@chakra-ui/react';

const NoContent: React.FC = () => {
  return (
    <Center pt={10}>
      <Text fontSize="xl">Nenhum item encontrado</Text>
    </Center>
  );
};

export default NoContent;
