import React from 'react';
import { Button, HStack, Image } from '@chakra-ui/react';
import Logo from 'assets/logo-icon.svg';
import { HeaderActions } from './components/HeaderActions';
import { Notifications } from './components/Notifications';

const Header = () => {
  return (
    <HStack
      boxShadow="md"
      px={10}
      py={4}
      zIndex={1}
      justifyContent="space-between"
    >
      <Image height="12" width="auto" src={Logo} />
      <HStack spacing={4}>
        <Button variant="outline">Realizar pedido</Button>
        <Notifications />
        <HeaderActions />
      </HStack>
    </HStack>
  );
};

export { Header };
