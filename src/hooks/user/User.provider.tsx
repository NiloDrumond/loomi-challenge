import React from 'react';
import { fetchUserService } from './User.services';

import { UserContextData, UserData } from './User.types';

const USER_STORAGE_KEY = '@Loomi.Challenge:userData';

const UserContext = React.createContext<UserContextData>({} as UserContextData);

const UserProvider: React.FC = ({ children }) => {
  const [userData, setUserData] = React.useState<UserData | undefined>(
    undefined,
  );

  React.useEffect(() => {
    const raw = localStorage.getItem(USER_STORAGE_KEY);
    if (raw) {
      setUserData(JSON.parse(raw));
    } else {
      fetchUserService().then((data) => {
        setUserData(data);
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(data));
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{ userData }}>{children}</UserContext.Provider>
  );
};

export { UserProvider, UserContext };
