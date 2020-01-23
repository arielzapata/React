import React from 'react';
import Styled from 'styled-components';

const Div = Styled.div`
  display: inline-block;
  margin: 2px;
  margin-bottom: 70px;
  margin-left: ${props => props.left};
  margin-right: ${props => props.separation};
  padding: 10px;
	width: ${props => props.width};
  background-color: #f1f1f1;
  position: relative;
  text-align: right;
  background: ${props => props.color};
  box-sizing: border-box; 
  height: 250px;
  transform: ${props => props.scale} ;
  z-index: 0;

  &:after{
    content: '';
    display: block;
    position: absolute;
    background: inherit; 
    width: 100%;
    left: 0;
    top: 100%;
    height: ${props => props.height};
    z-index: 0;
    transform: 
      skewY(35deg)
      translateY(-50%);
      }
  }
`;

const CustomDiv = (props) => {
  return (
    <div>
      <Div color={props.color} 
      scale={props.scale} 
      width={props.width} 
      height={props.height} 
      separation={props.separation} 
      left={props.left} />
    </div>
  );
};

export default CustomDiv;