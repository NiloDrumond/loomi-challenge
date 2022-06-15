import React from 'react';

import {
  CardPosition,
  ClickMapDataEvent,
  MapCardContextData,
} from './MapCard.types';

const MapCardContext = React.createContext<MapCardContextData>(
  {} as MapCardContextData,
);

const MapCardProvider: React.FC = ({ children }) => {
  const cardContainerRef = React.useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState<CardPosition>({
    left: 0,
    top: 0,
  });
  const [region, setRegion] = React.useState<string | undefined>(undefined);

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

  return (
    <MapCardContext.Provider
      value={{
        region,
        setRegion,
        position,
        handleRegionClick,
        cardContainerRef,
      }}
    >
      {children}
    </MapCardContext.Provider>
  );
};

function useMapCard(): MapCardContextData {
  const context = React.useContext(MapCardContext);

  if (!context) {
    throw new Error('useMapCard must be used whithin an MapCardProvider');
  }

  return context;
}

export { MapCardContext, MapCardProvider, useMapCard };
