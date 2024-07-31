import React, { useContext, useState } from 'react';
import { NumberContext } from '../context/NumberContext';

const NumberInput = () => {
  const { setNumber } = useContext(NumberContext); // Acceder al método para actualizar el número
  const [inputValue, setInputValue] = useState(''); // Estado local para manejar el valor del input

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Actualizar el valor del input
  };

  const handleSubmit = () => {
    const parsedNumber = parseFloat(inputValue); // Convertir el valor del input a número
    if (!isNaN(parsedNumber)) {
      setNumber(parsedNumber); // Actualizar el número en el contexto
    }
  };

  return (
    <div>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Guardar Número</button>
    </div>
  );
};

export { NumberInput };
