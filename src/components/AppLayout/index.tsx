import React from 'react';
import { Flex, HStack } from '@chakra-ui/react';

import BackgroundBox from 'components/BackgroundBox';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const AppLayout: React.FC = ({ children }) => {
  return (
    <Flex flexDirection="column" flex={1}>
      <Header />
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
