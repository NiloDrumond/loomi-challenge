import React from 'react';
import { useMap } from 'components/Map/Map.provider';

import {
  GoogleMap as CGoogleMap,
  GoogleMapProps,
} from '@react-google-maps/api';

// Same issue as with Apexcharts: https://github.com/vercel/next.js/issues/35986
// Turning class components into function components solve this issue
const GoogleMap = CGoogleMap as unknown as (
  params: GoogleMapProps,
) => JSX.Element;

const OtherMap = () => {
  const { center, mapCommonProps, mapType } = useMap();

  return (
    <GoogleMap
      center={center}
      {...mapCommonProps}
      options={{
        ...mapCommonProps.options,
        zoomControl: false,
        panControl: false,
        gestureHandling: 'none',
        draggableCursor: 'pointer',
        mapTypeId: mapType === 'roadmap' ? 'satellite' : 'roadmap',
      }}
      id="otherMap"
    />
  );
};

export { OtherMap };
