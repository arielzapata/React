import styled from 'styled-components';
import React from 'react';

export const Texts = styled('input')`
  width:125px;
  margin-bottom:5px
`;
const Text = props => (   
  <Texts type="text" disabled={props.state=="true"} placeholder={props.value}/>      
);

export default Text;