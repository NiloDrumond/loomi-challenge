import { GoogleMapProps } from '@react-google-maps/api';

export type MapCoordinates = {
  lat: number;
  lng: number;
};

export type MapType = 'satellite' | 'roadmap';

export type MapContextData = {
  mapType: MapType;
  onSwapMapType: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  setZoom: (value: number) => void;
  setCenter: (value: MapCoordinates) => void;
  center: MapCoordinates;
  zoom: number;
  mapCommonProps: GoogleMapProps;
};
