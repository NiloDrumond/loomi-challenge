import React from 'react';
import {
  GoogleMap as CGoogleMap,
  GoogleMapProps,
  useJsApiLoader,
} from '@react-google-maps/api';
import {
  Box,
  Center,
  Icon,
  IconButton,
  Spinner,
  useTheme,
  VStack,
} from '@chakra-ui/react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import {
  getStyles,
  INITIAL_ZOOM,
  loadRegions,
  MAX_ZOOM,
  MIN_ZOOM,
} from './Map.utils';
import { ClickMapDataEvent } from './Map.types';
import { useMapCard } from './components/MapCard/hooks/useMapCard';
import MapCard from './components/MapCard';
import MapCardProvider from './components/MapCard/hooks/MapCard.provider';

const SAGeoCenter = {
  lat: -15.6006,
  lng: -56.1004,
};
// Same issue as with Apexcharts: https://github.com/vercel/next.js/issues/35986
// Turning class components into function components solve this issue
const GoogleMap = CGoogleMap as unknown as (
  params: GoogleMapProps,
) => JSX.Element;

function Map() {
  const { colors } = useTheme();
  const { setPosition, setRegion } = useMapCard();
  const [zoom, setZoom] = React.useState(INITIAL_ZOOM);

  const cardContainerRef = React.useRef<HTMLDivElement>(null);

  const { isLoaded } = useJsApiLoader({
    id: 'map',
    // This won't work because @react-google-maps/api is having problems applying cloud-based themes
    // https://github.com/JustFly1984/react-google-maps-api/issues/1616
    mapIds: ['40bee3962510aeb7'],
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '',
  });

  const handleRegionClick = React.useCallback(
    (e: ClickMapDataEvent) => {
      if (cardContainerRef.current) {
        const bounds = cardContainerRef.current.getBoundingClientRect();
        const left = e.domEvent.clientX - bounds.left;
        const top = e.domEvent.clientY - bounds.top;
        setPosition({ left, top });
        setRegion(e.feature.j.admin);
      }
    },
    [setRegion, setPosition],
  );

  const handleZoomOut = React.useCallback(() => {
    setZoom((prev) => Math.max(MIN_ZOOM, prev - 1));
  }, []);

  const handleZoomIn = React.useCallback(() => {
    setZoom((prev) => Math.min(MAX_ZOOM, prev + 1));
  }, []);

  return isLoaded ? (
    <Box
      ref={cardContainerRef}
      w="100%"
      height="100%"
      borderRadius="xl"
      position="relative"
    >
      <MapCard containerRef={cardContainerRef} />
      <VStack spacing={4} zIndex={1} position="absolute" right={6} bottom={10}>
        <IconButton
          size="lg"
          bg="brand.light"
          color="brand.main"
          aria-label="zoom-in"
          borderRadius="50%"
          boxShadow="lg"
          onClick={handleZoomIn}
          isDisabled={zoom === MAX_ZOOM}
          icon={<Icon w={6} h={6} as={FiPlus} />}
        />
        <IconButton
          size="lg"
          color="brand.main"
          bg="brand.light"
          borderRadius="50%"
          aria-label="zoom-out"
          boxShadow="lg"
          onClick={handleZoomOut}
          isDisabled={zoom === MIN_ZOOM}
          icon={<Icon w={6} h={6} as={FiMinus} />}
        />
      </VStack>
      <GoogleMap
        onClick={() => {
          setRegion(undefined);
        }}
        onDragStart={() => {
          setRegion(undefined);
        }}
        mapContainerStyle={{
          width: '100%',
          height: '100%',
          borderRadius: 'var(--chakra-radii-xl)',
        }}
        center={SAGeoCenter}
        zoom={zoom}
        options={{
          styles: getStyles(),
          disableDefaultUI: true,
          maxZoom: MAX_ZOOM,
          minZoom: MIN_ZOOM,
          backgroundColor: 'white',
        }}
        onLoad={(map) => {
          loadRegions(map);
          map.data.setStyle({
            strokeWeight: 2,
            fillColor: colors.brand.main,
            fillOpacity: 0.4,
            strokeColor: colors.brand.main,
            strokeOpacity: 1,
            clickable: true,
            cursor: 'help',
          });
          // "zoom_changed" listener for if the user scrolls with the mouse wheel
          map.addListener('zoom_changed', () => {
            setZoom(map.getZoom() || INITIAL_ZOOM);
          });
          map.data.addListener('click', handleRegionClick);
        }}
        id="map"
      />
    </Box>
  ) : (
    <Center bg="white" w="100%" height="100%">
      <Spinner />
    </Center>
  );
}

function WrappedMap() {
  return (
    <MapCardProvider>
      <Map />
    </MapCardProvider>
  );
}

export default WrappedMap;
