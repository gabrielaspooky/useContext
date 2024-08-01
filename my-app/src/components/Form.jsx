import React, { useContext, useState } from 'react';
import { UserDataContext } from '../context/DataContext';

const UserDataForm = () => {
  const { updateData } = useContext(UserDataContext);
  const [formState, setFormState] = useState({
    favoritePet: '',
    favoriteFood: '',
    favoriteDrink: '',
    isAdult: false,
    isDrunk: false,
  });

  const handleChange = (e) => { 
    const { name, value, type, checked } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault(); 
    updateData(formState); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Tu mascota favorita:
          <input
            type="text"
            name="favoritePet"
            value={formState.favoritePet}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Tu comida favorita:
          <input
            type="text"
            name="favoriteFood"
            value={formState.favoriteFood}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Tu bebida favorita:
          <input
            type="text"
            name="favoriteDrink"
            value={formState.favoriteDrink}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          ¿Eres mayor de edad?
          <input
            type="checkbox"
            name="isAdult"
            checked={formState.isAdult}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          ¿Eres un borracho?
          <input
            type="checkbox"
            name="isDrunk"
            checked={formState.isDrunk}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default UserDataForm;
