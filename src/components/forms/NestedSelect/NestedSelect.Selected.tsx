import React from 'react';
import { Text, HStack, Tag, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import { NestedSelectSelectedProps } from './NestedSelect.types';

const NestedSelectSelected = ({
  selected,
  options,
}: NestedSelectSelectedProps) => {
  return (
    <VStack spacing={5} w="100%">
      {Object.entries(selected).map(([key, items]) => {
        const parent = options.find(o => o.value === key);
        if (!items || !parent) return;
        return (
          <HStack alignItems="flex-start" spacing={4} w="100%" key={key}>
            <Text>{parent.label}</Text>
            <Wrap spacing={3}>
              {items.map(item => {
                const child = parent.items.find(i => i.value === item);
                if (!child) return;
                return (
                  <WrapItem key={item}>
                    <Tag
                      px={4}
                      py={1}
                      bg="main.100"
                      color="main.500"
                      borderRadius="full"
                    >
                      {child.label}
                    </Tag>
                  </WrapItem>
                );
              })}
            </Wrap>
          </HStack>
        );
      })}
    </VStack>
  );
};

export default NestedSelectSelected;
