import React, { createContext, useState, useContext, SetStateAction } from 'react';

interface AppContextProps {
  token: string;
  setToken: React.Dispatch<SetStateAction<string>>;
  userId: string;
  setUserId: React.Dispatch<SetStateAction<string>>;
}

type AppProviderProps = {
  children: React.ReactNode;
}

export const AquariumContext = createContext<AppContextProps>({} as AppContextProps);

export function AquariumProvider({ children }: AppProviderProps) {
  const [token, setToken] = useState<string>('');
  const [userId, setUserId] = useState<string>('');

  return (
    <AquariumContext.Provider value={{ 
      token, 
      setToken,
      userId,
      setUserId,
    }}>
      {children}
    </AquariumContext.Provider>
  );
}

export const useAquarium = () => useContext(AquariumContext);
