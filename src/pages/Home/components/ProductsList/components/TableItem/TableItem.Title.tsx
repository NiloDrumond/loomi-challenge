import React from 'react';
import { Image, HStack, Text } from '@chakra-ui/react';

import Chair from 'assets/chair.png';
import { TableItemTitleProps } from './TableItem.types';

const TableItemTitle: React.FC<TableItemTitleProps> = ({ product }) => {
  return (
    <HStack
      height="100%"
      borderBottomWidth="1px"
      px={8}
      py={5}
      flex={1}
      spacing={4}
    >
      <Image src={Chair} w={20} h={20} />
      <Text fontSize="lg" color="main.500">
        {product.name}
      </Text>
    </HStack>
  );
};

export default TableItemTitle;
