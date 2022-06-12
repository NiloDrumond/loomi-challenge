import React from 'react';
import { HStack } from '@chakra-ui/react';
import TableItemTitle from './TableItem.Title';
import { TableItemProps } from './TableItem.types';
import TableItemDetails from './TableItem.Details';

const TableItem: React.FC<TableItemProps> = ({ product }) => {
  return (
    <HStack h="fit-content" w="100%" spacing={10}>
      <TableItemTitle product={product} />
      <TableItemDetails product={product} />
    </HStack>
  );
};

export default TableItem;
