import React from 'react';
import { Text, HStack, VStack, chakra, Box } from '@chakra-ui/react';
import moment from 'moment';
import { NotificationsItemProps } from './Notifications.types';

const NotificationsItem = ({ unseen }: NotificationsItemProps) => {
  return (
    <VStack
      p={4}
      borderRadius="md"
      bg={unseen ? 'main.400' : undefined}
      w="100%"
      cursor="pointer"
    >
      <HStack alignItems="center" w="100%">
        <Text color="gray.300">{moment().fromNow()}</Text>
        {unseen && <Box w={2} h={2} borderRadius="50%" bg="orange.400" />}
      </HStack>
      <HStack w="100%">
        <Text>
          Um <chakra.span fontWeight={700}>novo pedido</chakra.span> acabou de
          ser realizado por{' '}
          <chakra.span fontWeight={700}>Camila Azevedo</chakra.span> no valor de
          R$50,00 mensal.
        </Text>
      </HStack>
    </VStack>
  );
};

export { NotificationsItem };
