import React from 'react';
import CustomRadio from './components/CustomRadio';
import {RadioContainer} from './components/RadioContainer';
import {MainContainer} from './components/MainContainer';
import {LabelContainer} from './components/LabelContainer';
import P from './components/P';
import './App.css';

function App() {
  return (
    <div className="App">
      <MainContainer>      
        <LabelContainer >
          <P name ="Identidad" color/>
          <P name ="Propietario" color/>
          <P name ="Características básicas" emphasis/>
          <P name ="Espacios"/>
          <P name ="Foto y anuncio"/>
          <P name ="Precio"/>
          <P name ="Disponibilidad"/>
        </LabelContainer>
        <RadioContainer>
          <p class="title">Tipo de propiedad</p>
            <CustomRadio label="Departamento"/>
            <CustomRadio label="Estudio"/>
            <CustomRadio label="Loft"/>
            <CustomRadio label="Case"/>
            <CustomRadio label="Duplex"/>
          <p class="footer">Dirección</p>  
        </RadioContainer>
      </MainContainer>  
    </div>
  );
}

export default App;
