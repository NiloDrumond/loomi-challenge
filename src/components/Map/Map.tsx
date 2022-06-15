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
import { useDebouncedCallback } from 'use-debounce';
import {
  getStyles,
  INITIAL_CENTER,
  INITIAL_ZOOM,
  loadRegions,
  MAX_ZOOM,
  MIN_ZOOM,
} from './Map.utils';
import { ClickMapDataEvent, MapCoordinates, MapType } from './Map.types';
import { MapCard, useMapCard, MapCardProvider } from './components/MapCard';

// Same issue as with Apexcharts: https://github.com/vercel/next.js/issues/35986
// Turning class components into function components solve this issue
const GoogleMap = CGoogleMap as unknown as (
  params: GoogleMapProps,
) => JSX.Element;

function Map() {
  const { colors } = useTheme();
  const { setPosition, setRegion } = useMapCard();
  const [mapType, setMapType] = React.useState<MapType>('roadmap');
  const [zoom, setZoom] = React.useState(INITIAL_ZOOM);
  const [center, setCenter] = React.useState<MapCoordinates>(INITIAL_CENTER);
  const debouncedSetCenter = useDebouncedCallback(
    (value) => setCenter(value),
    50,
  );

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

  const commonMapProps: GoogleMapProps = React.useMemo(() => {
    return {
      mapContainerStyle: {
        width: '100%',
        height: '100%',
        borderRadius: 'var(--chakra-radii-xl)',
      },
      zoom,
      options: {
        styles: getStyles(),
        disableDefaultUI: true,
        maxZoom: MAX_ZOOM,
        minZoom: MIN_ZOOM,
        backgroundColor: 'white',
      },
    };
  }, [zoom]);

  const onSwapMapType = React.useCallback(() => {
    setMapType((prev) => {
      return prev === 'roadmap' ? 'satellite' : 'roadmap';
    });
  }, []);

  return isLoaded ? (
    <Box
      ref={cardContainerRef}
      w="100%"
      height="100%"
      borderRadius="xl"
      position="relative"
    >
      <Box zIndex={1} position="absolute" w="44" h="44" right={4} bottom={4}>
        <GoogleMap
          center={center}
          {...commonMapProps}
          mapContainerStyle={{
            ...commonMapProps.mapContainerStyle,
            // borderColor specifically dont work here for some reason, so I had to set it in the global styles
            borderColor: 'brand.main',
            borderWidth: 3,
            pointerEvents: 'none',
          }}
          mapTypeId={mapType === 'roadmap' ? 'roadmap' : 'satellite'}
          id="selectedMap"
        />
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
        <GoogleMap
          center={center}
          {...commonMapProps}
          options={{
            ...commonMapProps.options,
            zoomControl: false,
            panControl: false,
            gestureHandling: 'none',
            draggableCursor: 'pointer',
            mapTypeId: mapType === 'roadmap' ? 'satellite' : 'roadmap',
          }}
          id="otherMap"
        />
      </Box>
      <MapCard containerRef={cardContainerRef} />
      <VStack spacing={4} zIndex={1} position="absolute" right={6} bottom={52}>
        <IconButton
          bg="brand.light"
          color="brand.main"
          aria-label="zoom-in"
          borderRadius="50%"
          boxShadow="lg"
          onClick={handleZoomIn}
          isDisabled={zoom === MAX_ZOOM}
          icon={<Icon w={5} h={5} as={FiPlus} />}
        />
        <IconButton
          color="brand.main"
          bg="brand.light"
          borderRadius="50%"
          aria-label="zoom-out"
          boxShadow="lg"
          onClick={handleZoomOut}
          isDisabled={zoom === MIN_ZOOM}
          icon={<Icon w={5} h={5} as={FiMinus} />}
        />
      </VStack>
      <GoogleMap
        {...commonMapProps}
        onClick={() => {
          setRegion(undefined);
        }}
        onDragStart={() => {
          setRegion(undefined);
        }}
        center={INITIAL_CENTER}
        mapTypeId={mapType === 'roadmap' ? 'roadmap' : 'satellite'}
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
            const newZoom = map.getZoom();
            if (newZoom) setZoom(newZoom);
          });
          map.data.addListener('click', handleRegionClick);
          map.addListener('center_changed', () => {
            const newCenter = map.getCenter();
            if (newCenter)
              debouncedSetCenter({
                lat: newCenter.lat(),
                lng: newCenter.lng(),
              });
          });
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

export { WrappedMap as Map };
