// NumberDisplay.js
import React, { useContext } from 'react';
import { NumberContext } from '../context/NumberContext';

const NumberDisplay = () => {
  const { number } = useContext(NumberContext); // Acceder al número del contexto

  return (
    <div>
      <p>El número almacenado es: {number}</p>
    </div>
  );
};

export { NumberDisplay };
