import React, { useState } from 'react'
import styled from 'styled-components';

const HeaderDiv = styled.div`
  display:flex;
  position: sticky;
  top: 0;
  border:none;
  background:white;
  margin-left:39px;
  width:913px;
  height:90px;
  z-index:1;
`;
const Line = styled.div`
  background:linear-gradient(to right,  #c0c2ce, gray, #c0c2ce);
  margin-left:39px;
  height:1px;
  width:913px;
`;
const HourZone = styled.div`
  width:40px;
  margin-left:-30px;
  background:white;
`;
const Container = styled.div`
  border-right: 1px solid  #c0c2ce;
  margin-top:75px;
  margin-left:1px;
  width:40px;
  height:20px;
`;
const Text = styled.p`
  font-size:30px;
  margin-bottom:10px;
  margin-top:0px;
  margin-left:20px;
`;
const Day = styled.p`
  font-size:17px;
  color:gray;
  margin-bottom:10px;
  margin-top:0px;
  margin-left:20px;
`;
const TextData = styled.p`
  margin-top:-25px;
  margin-left:-50px;
  font-size:14px;
  color:gray;
`;

const Div = styled.div`
  position: sticky;
  top: 0;
  z-index:1;
`;

function Header(props) {
  return (
    <Div >
      <HeaderDiv >
        <HourZone >
          <Container >
          </Container>  
          <TextData >GMT-05</TextData>
        </HourZone>
          <div> 
            <Day >Mié</Day>
            <Text >8</Text>
          </div>
        </HeaderDiv >
      <Line/>
    </Div>
  )
}

export default Header  