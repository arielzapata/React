import React, { useState } from 'react'
import styled from 'styled-components';

const Rows = styled.div`
  display:flex;
  border: solid 1px #c0c2ce;
  height:50px;
  width:900px;
  margin-left:50px;
  border-bottom:none; 
  border-top:none;
  align-items:flex-end; 
  border-right:none;
`;
const Line = styled.div`
  width:913px;
  position:relative;
  left:39px;
  margin-top:-12px;
  border-bottom: 1px solid #c0c2ce;
`;
const Text = styled.p`
  margin-right:-45px;
  margin-top:50px;
  position:relative;
  top:-7px;
  margin-bottom:0px;
  font-size:10px;
`;
const TextDate = styled.p`
  color:white;
  font-size:14px;
  text-align:left;
  margin-top:3px;
  margin-left:5px;
`;
const RowContainer = styled.div`
  display:flex;
`;
const Date = styled.div`
  background:${props => (props.value=="true" ? "#5DBCD2":"none")}; 
  width:900px;
  height:25px;
  border-radius:3px;
`;

function Row(props) {

  return (
    <div >
      <RowContainer >
        <div >
          <Text >{props.label}</Text>  
        </div>
        <Rows >
          <Date value={props.show} >
          <TextDate >{props.data}</TextDate>      
          </Date>
        </Rows>
      </RowContainer >
      <Line/>
    </div>
  )
}

export default Row   