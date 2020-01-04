import React, { useState } from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  padding: 0px 16px 24px 16px;
  box-sizing: border-box;
  display:flex;
  margin-bottom:-27px;
  font-size:14px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  border:solid 1px #EEEEEE;
  background:${props => (props.filled ? "#8D7AFF":"white")};
  margin-bottom:10px;
  width:300px;
  color:#474747;
    &:hover  {
    background-color:  #8D7AFF;
    color:white;
  }
`;
const RadioButtonLabel = styled.label`
  position: absolute; 
  width: 300px;
  height: 47px;
  background: white;
  border: 1px solid #bebebe;
`;
const RadioButton = styled.input`
  opacity: 0;
  z-index:1;
  width: 300px;
  height: 55px;
  &:hover ~ ${RadioButtonLabel} {
    background: #8D7AFF;
  }
  &:checked + ${RadioButtonLabel} {
    background: #8D7AFF;
    border: 1px solid #bebebe;
    color:white;
  }
`;
const Texts = styled.div`
  z-index:2;
  margin-left:15px;
  margin-top:14px;
  text-align:left;
  font-weight: 500;
`;
function CustomRadio(props) {
  return (
    <Wrapper>
      <Item >
        <RadioButton
          type="radio"
          name="radio"
      /> 
        <RadioButtonLabel >
          <Texts>
            {props.label}
          </Texts>
        </RadioButtonLabel >
      </Item>
    </Wrapper> 
  )
}
export default CustomRadio