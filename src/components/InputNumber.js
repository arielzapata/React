import React, { useState } from 'react';
import styled from 'styled-components';

const SelectNumber = styled.input`
  
  background:#f1f1f1;
  border:none;
  border-bottom: solid 3px; 
  font-size: 14px;
  padding: 0.25em ;
  border-radius: 3px;
  width:50px;
  margin-left:5px;
  margin-right:5px;
  height:20px;
  text-align:center;
  padding-top:5px;
  -moz-appearance: ${props => props.arrow ?  props.arrow:props.arrow};
`;
function InputNumber(props) {
  const {
    style,
    onFocus,
    onBlur,
    ...restProps
  } = props;
  const [changeBottomColor, handleBottomColor] = useState(false);
  
  const onFocusHandler = () => {
    handleBottomColor(true);
    if (onFocus) {
      onFocus();
    }
  };
  const onBlurHandler = () => {
    handleBottomColor(false);
    if (onBlur) {
      onBlur();
    }
  };

  return (
    <SelectNumber
      type="number"
      style={Object.assign({}, style, { borderColor: changeBottomColor ? "#1a73e8": 'transparent' })}
      arrow={changeBottomColor ? "numberfield":"textfield"} 
      onFocus={onFocusHandler}
      onBlur={onBlurHandler}
      placeholder="1"
      {...restProps}
    />
  );
}

export default InputNumber;