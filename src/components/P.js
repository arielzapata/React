import styled from 'styled-components';
import React from 'react';

const Parraph = styled.p`
font-size: ${props => (props.emphasis ? "20px":"16px")};
color: ${props => props.emphasis ? "#8D7AFF":props.color ? "#8D7AFF": "gray" };
font-weight:  ${props => (props.emphasis ? "bolder":"normal")};
margin-bottom:32px;
`;

function P(props) {

    return (
      <Parraph {...props}>
        
        {props.name}
        {props.emphasis}
        
      </Parraph>
    )
  }
  
  export default P
