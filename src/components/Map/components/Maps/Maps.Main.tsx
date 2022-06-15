import React from 'react';
import { useTheme } from '@chakra-ui/react';
import { useMap } from 'components/Map/Map.provider';
import {
  GoogleMap as CGoogleMap,
  GoogleMapProps,
} from '@react-google-maps/api';
import { INITIAL_CENTER, loadRegions } from 'components/Map';
import { useMapCard } from '../MapCard';

// Same issue as with Apexcharts: https://github.com/vercel/next.js/issues/35986
// Turning class components into function components solve this issue
const GoogleMap = CGoogleMap as unknown as (
  params: GoogleMapProps,
) => JSX.Element;

const MainMap = () => {
  const { mapCommonProps, mapType, setZoom, setCenter } = useMap();
  const { setRegion, handleRegionClick } = useMapCard();
  const { colors } = useTheme();

  return (
    <GoogleMap
      {...mapCommonProps}
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
          cursor: 'pointer',
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
            setCenter({
              lat: newCenter.lat(),
              lng: newCenter.lng(),
            });
        });
      }}
      id="map"
    />
  );
};

export { MainMap };
