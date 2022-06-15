import { GoogleMapProps } from '@react-google-maps/api';
import React from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { INITIAL_ZOOM, INITIAL_CENTER, MAX_ZOOM, MIN_ZOOM, getStyles } from '.';

import { MapContextData, MapCoordinates, MapType } from './Map.types';

const MapContext = React.createContext<MapContextData>({} as MapContextData);

const MapProvider: React.FC = ({ children }) => {
  const [mapType, setMapType] = React.useState<MapType>('roadmap');
  const [zoom, setZoom] = React.useState(INITIAL_ZOOM);
  const [center, setCenter] = React.useState<MapCoordinates>(INITIAL_CENTER);
  const debouncedSetCenter = useDebouncedCallback(
    (value) => setCenter(value),
    50,
  );

  const onZoomOut = React.useCallback(() => {
    setZoom((prev) => Math.max(MIN_ZOOM, prev - 1));
  }, []);

  const onZoomIn = React.useCallback(() => {
    setZoom((prev) => Math.min(MAX_ZOOM, prev + 1));
  }, []);

  const onSwapMapType = React.useCallback(() => {
    setMapType((prev) => {
      return prev === 'roadmap' ? 'satellite' : 'roadmap';
    });
  }, []);

  const mapCommonProps: GoogleMapProps = React.useMemo(() => {
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

  return (
    <MapContext.Provider
      value={{
        center,
        mapType,
        onSwapMapType,
        onZoomIn,
        onZoomOut,
        setCenter: debouncedSetCenter,
        zoom,
        setZoom,
        mapCommonProps,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

function useMap(): MapContextData {
  const context = React.useContext(MapContext);

  if (!context) {
    throw new Error('useMap must be used whithin an MapProvider');
  }

  return context;
}

export { MapContext, MapProvider, useMap };
