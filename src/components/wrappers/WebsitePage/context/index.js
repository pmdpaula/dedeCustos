/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createContext, useState } from 'react';

import { AuthProvider } from './AuthContext';

export const WebsitePageContext = createContext();

export function WrapperProvider({ children }) {
  const [isDark, setIsDark] = useState(true);

  return (
    <AuthProvider>
      <WebsitePageContext.Provider value={{ isDark, setIsDark }}>
        {children}
      </WebsitePageContext.Provider>
    </AuthProvider>
  );
}
