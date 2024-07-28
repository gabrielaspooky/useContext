// src/context/UserDataContext.js
import React, { createContext, useState } from 'react';

// Crear el contexto
const UserDataContext = createContext();

// Crear el proveedor
const UserDataProvider = ({ children }) => {
  // Estado para almacenar las preferencias del usuario
  const [data, setData] = useState({
    favoritePet: '',
    favoriteFood: '',
    favoriteDrink: '',
    isAdult: false,
    isDrunk: false,
  });

  // Función para actualizar las preferencias
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

