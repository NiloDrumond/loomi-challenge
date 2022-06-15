import React from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import { Box, Center, Spinner } from '@chakra-ui/react';
import { MapCard, MapCardProvider, useMapCard } from './components/MapCard';
import { MapProvider, useMap } from './Map.provider';
import { ZoomControl } from './components/ZoomControl';
import { MainMap, MiniatureMap, OtherMap } from './components/Maps';

function Map() {
  const { onSwapMapType } = useMap();
  const { cardContainerRef } = useMapCard();
  const { isLoaded } = useJsApiLoader({
    id: 'map',
    // This won't work because @react-google-maps/api is having problems applying cloud-based themes
    // https://github.com/JustFly1984/react-google-maps-api/issues/1616
    mapIds: ['40bee3962510aeb7'],
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '',
  });

  return isLoaded ? (
    <Box
      ref={cardContainerRef}
      w="100%"
      height="100%"
      borderRadius="xl"
      position="relative"
    >
      <Box zIndex={1} position="absolute" w="44" h="44" right={4} bottom={4}>
        <MiniatureMap />
      </Box>
      <Box
        zIndex={1}
        onClick={onSwapMapType}
        position="absolute"
        w="32"
        h="28"
        right={52}
        bottom={4}
      >
        <OtherMap />
      </Box>
      <MapCard containerRef={cardContainerRef} />
      <ZoomControl />
      <MainMap />
    </Box>
  ) : (
    <Center bg="white" w="100%" height="100%">
      <Spinner />
    </Center>
  );
}

function WrappedMap() {
  return (
    <MapProvider>
      <MapCardProvider>
        <Map />
      </MapCardProvider>
    </MapProvider>
  );
}

export { WrappedMap as Map };
