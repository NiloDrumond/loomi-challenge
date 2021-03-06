import React from 'react';
import { Flex, HStack } from '@chakra-ui/react';

import { BackgroundBox } from 'components/BackgroundBox';
import { useLocation } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';

const AppLayout: React.FC = ({ children }) => {
  const { pathname } = useLocation();

  const screenContainerRef = React.useRef<HTMLDivElement>(null);

  // Reset scroll on navigation
  React.useEffect(() => {
    if (screenContainerRef.current) screenContainerRef.current.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Flex
      maxW="100vw"
      overflow="hidden"
      maxH="100vh"
      flexDirection="column"
      flex={1}
    >
      <Header />
      <Flex overflow="hidden" position="relative" flex={1}>
        <BackgroundBox />
        <HStack flex={1} alignItems="flex-start" pl={8} spacing={8}>
          <Sidebar />
          <Flex
            ref={screenContainerRef}
            flex={1}
            py={8}
            h="100%"
            overflowY="scroll"
            overflowX="hidden"
            maxH="100%"
            pr={8}
          >
            {children}
          </Flex>
        </HStack>
      </Flex>
    </Flex>
  );
};

export { AppLayout };
