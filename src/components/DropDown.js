import React, { useState } from 'react'
import styled from "styled-components";

const InputDrop = styled.input` 
  background-color: #f1f1f1;
  color: gray;
 
  width:70px;
  height:29px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  text-align:left;
  border-radius:3px;
  padding-right:20px;
  padding-left:5px;
  padding-right: 4px;

`;
const Link = styled.a`  
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align:left;
  font-size:14px;
  padding-left:5px;
  &:hover  {
    background-color:  #f1f1f1;
  }
`;

const DropDownContent = styled.div`  
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 80px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  text-align:left;
  padding-left:0px;
 
`;

const DropDown = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${DropDownContent} {
    display: block;
  }
`;

function DropDowns(props) {
  const {
    style,
    ...restProps
  } = props;
  const [getState, setState] = useState("semana")
  const [getPosition, setPosition] = useState(2)
  
  function Link1() {
      setState(getState => "Dia")
      setPosition(getPosition => 1)
  }
  function Link2() {
      setState(getState => "Semana")
      setPosition(getPosition => 2)
  }
  function Link3() {
      setState(getState => "Mes")
      setPosition(getPosition => 3)
  }
  function Link4() {
      setState(getState => "Año")
      setPosition(getPosition => 4)
  }
  return (
    <DropDown>
      <InputDrop value={getState+" "+"▼"}/>
        <DropDownContent
          style={Object.assign({},  style, { marginTop: getPosition==2 ? "-75px": getPosition==1 ? "-35px": getPosition==3 ? "-115px": getPosition==4 ? "-155px": 'transparent' })}  >   
          <Link href="#"onClick={Link1}>Dia</Link>
          <Link href="#"onClick={Link2}>Semana</Link>
          <Link href="#"onClick={Link3}>Mes</Link>
          <Link href="#"onClick={Link4}>Año</Link>
        </DropDownContent>
    </DropDown>
  )
}
  export default DropDowns;


