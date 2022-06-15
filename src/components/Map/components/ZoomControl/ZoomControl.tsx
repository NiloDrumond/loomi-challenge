import React from 'react';
import { Icon, IconButton, VStack } from '@chakra-ui/react';
import { useMap } from 'components/Map/Map.provider';
import { MAX_ZOOM, MIN_ZOOM } from 'components/Map';
import { FiPlus, FiMinus } from 'react-icons/fi';

const ZoomControl = () => {
  const { zoom, onZoomIn, onZoomOut } = useMap();

  return (
    <VStack spacing={4} zIndex={1} position="absolute" right={6} bottom={52}>
      <IconButton
        bg="brand.light"
        color="brand.main"
        aria-label="zoom-in"
        borderRadius="50%"
        boxShadow="lg"
        onClick={onZoomIn}
        isDisabled={zoom === MAX_ZOOM}
        icon={<Icon w={5} h={5} as={FiPlus} />}
      />
      <IconButton
        color="brand.main"
        bg="brand.light"
        borderRadius="50%"
        aria-label="zoom-out"
        boxShadow="lg"
        onClick={onZoomOut}
        isDisabled={zoom === MIN_ZOOM}
        icon={<Icon w={5} h={5} as={FiMinus} />}
      />
    </VStack>
  );
};

export { ZoomControl };
