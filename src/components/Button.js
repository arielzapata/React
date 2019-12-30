import styled from 'styled-components';

export const Button = styled.button`
  
  color: ${props => props.primary ?  "#1a73e8":"#9aa0a6" };
  font-size: 1em;
  margin: 1em;
  margin-left: -10px;
  margin-right:-20px;
  margin-bottom:0px;
  padding: 0.25em 1em;
  border: none;
  width:${props => props.width ?  props.width:"90px"}
  background-color: transparent;

`;