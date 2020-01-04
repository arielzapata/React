import React, { useState } from 'react'
import styled from 'styled-components';

const Button = styled.button`
  
  color: ${props => (props.filled ? "white":"black")};
  text-align:left;
  font-size: 1em;
  margin: 1em;
  margin-left: -10px;
  margin-right:-20px;
  margin-bottom:0px;
  padding: 0.25em 1em;
  padding-left:20px;
  border: solid 1px gray;
  background-color: ${props => (props.filled ? "#8D7AFF":"white")};
  width:300px;
  height: 38px;
  &:hover  {
    background-color:  #8D7AFF;
    color:white;
  }
`;

function Toggle(props) {
    const [toggleState, setToggleState] = useState(false)
  
    function toggle() {
      setToggleState(toggleState => !toggleState)
    }
  
    return (
      <Button {...props} filled={toggleState} onClick={toggle}>
        
        {props.name}
        
      </Button>
    )
  }
  
  export default Toggle