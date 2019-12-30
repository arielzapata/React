import React from 'react';
import {Button} from './components/Button';
import {Form} from './contains/RadioContainer';
import Text from './components/InputText';
import Dot from './components/Dot';
import {MainContainer} from './contains/MainContainer';
import {DaysContainer} from './contains/DaysContainer';
import {TextContainer} from './contains/TextContainer';
import {FinishContainer} from './components/FinishContainer';
import {ButtonContainer} from './contains/ButtonContainer';
import {SelectContainer} from './contains/SelectContainer';
import InputNumber from './components/InputNumber';
import CustomRadio from './components/CustomRadio';
import DropDowns from './components/DropDown';
import './App.css';

function App() {  
return (   
  <div className="App">
  <MainContainer>
    <p class="title">Periocidad personalizada</p>
    <SelectContainer>   
      <p>Repetir cada</p>
      <InputNumber/>
      <DropDowns/> 
    </SelectContainer>
    <p>Se repite el</p>
    <DaysContainer>
      <Dot day="D"/>
      <Dot day="L"/>
      <Dot day="M"/>
      <Dot day="X"/>
      <Dot day="J"/>
      <Dot day="V"/>
      <Dot day="S"/>     
    </DaysContainer>
    <p>Termina</p>
    <FinishContainer> 
      <Form>
        <CustomRadio label="Despues de" />
        <CustomRadio label="el"  />
        <CustomRadio label="Nunca" />  
      </Form>
      <TextContainer>
        <Text value="27 de mar de 2020" state="true"/>
        <Text value="   13    repeticiones" state="true"/>
      </TextContainer>
    </FinishContainer>
    <ButtonContainer>
      <Button >Cancelar</Button>
      <Button primary>listo</Button>
    </ButtonContainer>      
  </MainContainer>
</div>
  );
}
export default App;
