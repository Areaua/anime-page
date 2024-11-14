// components/ToggleContext.js
import React, { createContext, useState } from 'react';

export const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
  const [pornFilter, setPornFilter] = useState(false);

  const handleToggleChange = (checked) => {
    setPornFilter(checked);
  };

  return (
    <ToggleContext.Provider value={{ pornFilter, handleToggleChange }}>
      {children}
    </ToggleContext.Provider>
  );
};