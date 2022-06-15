import React from 'react';
import { Box } from '@chakra-ui/react';
import Background from 'assets/curve-patterns.svg';

const BackgroundBox = () => {
  return (
    <Box
      top={0}
      left={0}
      zIndex={-1}
      position="absolute"
      bg="#f6f6f9"
      bgImg={Background}
      w="100%"
      h="100%"
    />
  );
};

export { BackgroundBox };
