import React from 'react';
import { Box, HStack, Text, Wrap, WrapItem, Icon } from '@chakra-ui/react';
import { FiCheck, FiSlash } from 'react-icons/fi';

import { TableItemDetailsProps } from './TableItem.types';

const MOCK_SPECIFICATIONS = ['banco', 'sem braço', 'sem braço', 'de madeira'];

const TableItemDetails: React.FC<TableItemDetailsProps> = ({ product }) => {
  const enabled = Math.random() > 0.5;

  return (
    <HStack
      height="100%"
      borderBottomWidth="1px"
      px={8}
      py={5}
      flex={2}
      spacing={4}
      alignItems="center"
    >
      <Box flex={2} px={4}>
        <Text fontSize="lg" color="main.500">
          {product.color.charAt(0).toUpperCase() + product.color.slice(1)}
        </Text>
      </Box>
      <Wrap flex={2}>
        {MOCK_SPECIFICATIONS.map(s => {
          return (
            <WrapItem key={s}>
              <Box
                px={3}
                py={1}
                borderRadius="3xl"
                bg="main.100"
                color="main.500"
              >
                {s}
              </Box>
            </WrapItem>
          );
        })}
      </Wrap>
      <HStack flex={1} justifyContent="center">
        {enabled ? (
          <>
            <Text fontSize="lg">Ativo</Text>
            <Icon w={6} h={6} color="brand.500" as={FiCheck} />
          </>
        ) : (
          <>
            <Text fontSize="lg">Inativo</Text>
            <Icon w={5} h={5} color="red.800" as={FiSlash} />
          </>
        )}
      </HStack>
    </HStack>
  );
};

export default TableItemDetails;