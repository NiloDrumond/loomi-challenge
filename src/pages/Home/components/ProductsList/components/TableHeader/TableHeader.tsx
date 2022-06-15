import React from 'react';
import { Divider, HStack, Text, Box } from '@chakra-ui/react';

const TableHeader = () => {
  return (
    <HStack w="100%" color="white" spacing={10} fontWeight={700}>
      <HStack px={8} py={2} bg="main.300" borderRadius="md" flex={1}>
        <Text>PRODUTO</Text>
      </HStack>
      <HStack h="100%" px={8} py={2} bg="main.300" borderRadius="md" flex={2}>
        <Box flex={2} px={4}>
          <Text>CORES</Text>
        </Box>
        <Divider borderColor="white" orientation="vertical" />
        <Box flex={2} px={4}>
          <Text>ESPECIFICAÇÕES</Text>
        </Box>
        <Divider borderColor="white" orientation="vertical" />
        <Box flex={1} px={4}>
          <Text>STATUS</Text>
        </Box>
      </HStack>
    </HStack>
  );
};

export { TableHeader };
