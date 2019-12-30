import React from "react";
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
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  border: 1px solid blue;
`;
const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #bebebe;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      margin: 5px;
      background: #eeeeee;
    }
  }
  &:checked + ${RadioButtonLabel} {
    background: white;
    border: 1px solid blue;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      margin: 5px;
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
      background: blue;
    }
  }
`;
const CustomRadio = props => (
  <Wrapper>
    <Item>
      <RadioButton
        type="radio"
        name="radio"
        value="betterPriceOnly"
        checked
      />
      <RadioButtonLabel />
      <div>
        {props.label}
      </div>
    </Item>
  </Wrapper> 
);
  
export default CustomRadio;


