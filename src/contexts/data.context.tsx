import { createContext, useState } from 'react';

export const DataContext = createContext({
  setData: () => null,
  data: null
});

export const UserProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const value = { data, setData };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
