import React, { createContext, FC, useEffect, useState } from 'react';
import { authenticationObserver } from 'api/auth';

const initialState = {
  isAuthorized: false,
  email: null,
};

export interface AuthContextData {
  isAuthorized: boolean;
  email: string | null;
}

export const AuthContext = createContext<AuthContextData>(null as any);

export const AuthContextProvider: FC = ({ children }) => {
  const [state, setState] = useState<AuthContextData>(initialState);

  useEffect(() => {
    authenticationObserver(setState);
  }, []);

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};
