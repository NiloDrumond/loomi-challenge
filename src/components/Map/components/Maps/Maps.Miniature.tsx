import React from 'react';
import {
  GoogleMap as CGoogleMap,
  GoogleMapProps,
} from '@react-google-maps/api';
import { useMap } from 'components/Map/Map.provider';

// Same issue as with Apexcharts: https://github.com/vercel/next.js/issues/35986
// Turning class components into function components solve this issue
const GoogleMap = CGoogleMap as unknown as (
  params: GoogleMapProps,
) => JSX.Element;

const MiniatureMap = () => {
  const { center, mapCommonProps, mapType } = useMap();

  return (
    <GoogleMap
      center={center}
      {...mapCommonProps}
      mapContainerStyle={{
        ...mapCommonProps.mapContainerStyle,
        // borderColor specifically dont work here for some reason, so I had to set it in the global styles
        borderColor: 'brand.main',
        borderWidth: 3,
        pointerEvents: 'none',
      }}
      mapTypeId={mapType === 'roadmap' ? 'roadmap' : 'satellite'}
      id="selectedMap"
    />
  );
};

export { MiniatureMap };
