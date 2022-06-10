import React from 'react';
import { Button, HStack, Image } from '@chakra-ui/react';
import Logo from 'assets/logo-icon.svg';
import HeaderActions from './components/HeaderActions';
import HeaderNotifications from './components/HeaderNotifications';

const Header: React.FC = () => {
  return (
    <HStack
      boxShadow="0px 3px 6px #00000014"
      px={10}
      py={4}
      zIndex={1}
      justifyContent="space-between"
    >
      <Image height="12" width="auto" src={Logo} />
      <HStack spacing={4}>
        <Button variant="outline">Realizar pedido</Button>
        <HeaderNotifications />
        <HeaderActions />
      </HStack>
    </HStack>
  );
};

export default Header;
