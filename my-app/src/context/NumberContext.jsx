import React, { createContext, useState } from 'react';


const NumberContext = createContext();


const NumberProvider = ({ children }) => {
  const [number, setNumber] = useState(null);

  return (
    <NumberContext.Provider value={{ number, setNumber }}>
      {children}
    </NumberContext.Provider>
  );
};

export { NumberContext, NumberProvider };

