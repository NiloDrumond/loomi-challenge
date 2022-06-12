import React from 'react';
import { VStack } from '@chakra-ui/react';
import { CardProps } from './Card.types';

const Card: React.FC<CardProps> = ({ children, ...rest }) => {
  return (
    <VStack
      bg="white"
      px={4}
      py={6}
      borderRadius="xl"
      alignItems="flex-start"
      justifyContent="space-between"
      flex={1}
      {...rest}
    >
      {children}
    </VStack>
  );
};

export default Card;
