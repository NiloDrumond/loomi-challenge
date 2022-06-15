import React from 'react';
import { Button, Text, HStack, Icon, VStack } from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';
import { useFieldArray } from 'react-hook-form';
import { ItemsListProps } from './ItemsList.types';
import ItemsListItem from './ItemsList.Item';

const ItemsList = ({ control }: ItemsListProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });

  return (
    <VStack bg="white" p={8} borderRadius="xl" spacing={12} w="100%">
      <HStack w="100%" justifyContent="space-between">
        <Text>Itens</Text>
        <Button
          variant="ghost"
          onClick={() => append({})}
          leftIcon={<Icon as={FiPlus} />}
        >
          Adicionar
        </Button>
      </HStack>
      {fields.map((item, index) => (
        <ItemsListItem
          key={item.id}
          index={index}
          remove={remove}
          control={control}
        />
      ))}
    </VStack>
  );
};

export default ItemsList;
