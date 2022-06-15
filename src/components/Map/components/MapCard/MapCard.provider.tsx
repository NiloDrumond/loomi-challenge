import React from 'react';

import { CardPosition, MapCardContextData } from './MapCard.types';

const MapCardContext = React.createContext<MapCardContextData>(
  {} as MapCardContextData,
);

const MapCardProvider: React.FC = ({ children }) => {
  const [position, setPosition] = React.useState<CardPosition>({
    left: 0,
    top: 0,
  });
  const [region, setRegion] = React.useState<string | undefined>(undefined);

  return (
    <MapCardContext.Provider
      value={{ region, setRegion, position, setPosition }}
    >
      {children}
    </MapCardContext.Provider>
  );
};

export { MapCardContext, MapCardProvider };
