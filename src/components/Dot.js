import React, { useState } from 'react'
import styled from 'styled-components'

const Circle = styled.div`
  width: 8%;
  margin-left:5px;
  border-radius: 50%;
  line-height: 0;
  background: ${props => (props.filled ? "#1a73e8":"#f1f1f1")};
  position: relative;
  cursor: pointer;
  &:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}
`;
const Text = styled.div`
  position: absolute;
  bottom: 50%;
  width: 100%;
  text-align: center;
  font-family: arial, sans-serif;
  font-size: 10px;
  font-weight: bold;
`;

function Toggle(props) {
  const [toggleState, setToggleState] = useState(false)

  function toggle() {
    setToggleState(toggleState => !toggleState)
  }

  return (
    <Circle {...props} filled={toggleState} onClick={toggle}>
      <Text >
      {props.day}
      </Text>
    </Circle>
  )
}

export default Toggle