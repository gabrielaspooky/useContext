// src/App.js
import React from 'react';
import { UserDataProvider } from './context/DataContext';
import UserDataForm from './components/Form';
import UserDataCard from './components/Card';
import { NumberProvider } from './context/NumberContext';
import { NumberInput } from './components/InputButton';
import { NumberDisplay } from './components/Paragraph';

const App = () => {
  return (
    <div className="App">
      <UserDataProvider>
        <div>
          <h1>Formulario de datos de usuario</h1>
          <UserDataForm />
          <UserDataCard />
        </div>
      </UserDataProvider>
      <NumberProvider>
        <div> 
          <h1>Números</h1>
          <NumberInput />
          <NumberDisplay />
        </div>
      </NumberProvider>
    </div>
  );
};

export default App;


