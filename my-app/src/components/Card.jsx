// UserDataCard.js
import React, { useContext } from 'react';
import { UserDataContext } from '../context/DataContext';

const UserDataCard = () => {
  const { data } = useContext(UserDataContext);

  return (
    <div className="card">
      <h2>Respuestas</h2>
      <p><strong>Mascota favorita:</strong> {data.favoritePet || "No especificada"}</p>
      <p><strong>Comida favorita:</strong> {data.favoriteFood || "No especificada"}</p>
      <p><strong>Bebida favorita:</strong> {data.favoriteDrink || "No especificada"}</p>
      <p><strong>Mayor de edad:</strong> {data.isAdult ? 'Sí' : 'No'}</p>
      <p><strong>Borracho:</strong> {data.isDrunk ? 'Sí' : 'No'}</p>
    </div>
  );
};

export default UserDataCard;


