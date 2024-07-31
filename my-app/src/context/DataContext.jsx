import React, { createContext, useState } from 'react';


const UserDataContext = createContext();


const UserDataProvider = ({ children }) => {

  const [data, setData] = useState({
    favoritePet: '',
    favoriteFood: '',
    favoriteDrink: '',
    isAdult: false,
    isDrunk: false,
  });


  const updateData = (newData) => {
    setData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  return (
    <UserDataContext.Provider value={{ data, updateData }}>
      {children}
    </UserDataContext.Provider>
  );
};

export { UserDataContext, UserDataProvider };

