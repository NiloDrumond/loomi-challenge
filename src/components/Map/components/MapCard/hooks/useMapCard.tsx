import { useContext } from 'react';
import { MapCardContext } from './MapCard.provider';
import { MapCardContextData } from '../MapCard.types';

export function useMapCard(): MapCardContextData {
  const context = useContext(MapCardContext);

  if (!context) {
    throw new Error('useMapCard must be used whithin an MapCardProvider');
  }

  return context;
}
