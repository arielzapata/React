import React from 'react';
import Styled from 'styled-components';

const Div = Styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.4);
  position: relative;
  margin-top: ${props => props.topSpace};
  z-index: 2;
  border-radius: 7px;
  width: 200px;
  height: 50px;
  align-items: center;
  justify-content: center;
  justify-items: center;
  align-content: center;
  color: white;
`;

const Title = (props) => {
  return (
    <Div topSpace={props.topSpace}>
      {props.text}
    </Div>
  );
};

export default Title;