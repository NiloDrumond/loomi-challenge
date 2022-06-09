import React, { PropsWithChildren } from 'react';
import { Avatar, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react';

import Logo from 'assets/logo-icon.svg';
import BackgroundBox from 'components/BackgroundBox';
import UserProfile from 'components/UserProfile';
import Sidebar from './components/Sidebar';

const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex flexDirection="column" flex={1}>
      <HStack
        boxShadow="0px 3px 6px #00000014"
        px={10}
        py={4}
        zIndex={1}
        justifyContent="space-between"
      >
        <Image height="12" width="auto" src={Logo} />
        <UserProfile name="Eduardo" />
      </HStack>
      <Flex position="relative" flex={1}>
        <BackgroundBox />
        <HStack flex={1} alignItems="flex-start" p={8} spacing={8}>
          <Sidebar />
          <Flex flex={1} h="100%">
            {children}
          </Flex>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default AppLayout;
