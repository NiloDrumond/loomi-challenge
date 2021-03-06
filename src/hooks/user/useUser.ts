import { useContext } from 'react';
import { UserContext } from './User.provider';
import { UserContextData } from './User.types';

function useUser(): UserContextData {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used whithin an UserProvider');
  }

  return context;
}

export { useUser };
