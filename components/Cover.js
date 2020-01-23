import React from 'react';
import CustomDiv from './CustomDiv'
import Styled from 'styled-components';
import book from '../assets/book.png'
import logo from '../assets/logo.png'
import Title from './Title'

const Div = Styled.div`
  display: flex;
  margin-top: -10px;
`;

const DivFooter = Styled.div`
  display: flex;
  margin-top: 295px;
  margin-left: 6px;
`;

const DivImage = Styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.4);
  width: 265px;
  height: 265px;
  border-radius: 50%;
  margin-top: -650px;
  margin-left: 170px;
  z-index: 1;
  position: relative;
`;

const Image = Styled.img`
  width: 200px;
  height: 300px;
  z-index: 1;
  position: relative;
  margin-left: 30px;
  margin-top: -20px;
`;

const MainContainer = Styled.div`
  margin-top: 20px;
  margin-left: 100px;
  margin-right: 425px;
  border: solid 4px gray;
  height: 820px;
  width: 570px;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
`;

const LeftSide = Styled.div`
  margin-top: ${props => props.topPosition};
  margin-left: ${props => props.leftPosition};
  z-index: 3;
  position: relative;
  width: ${props => props.width};
  text-align: justify;  
`;

const P = Styled.p`
  width: ${props => props.width};
  margin-top: ${props => props.top};
  margin-bottom: ${props => props.bottom};
  margin-left: ${props => props.left};
  text-align: ${props => props.textAlign};
  z-index: 3;
  position: relative;
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
`;

const Emphasis = Styled.p`
  line-height: 8px;
  margin-left: 0px;
  font-weight: bolder;
  font-size: 21px;
  text-align: ${props => props.textAlign};
`;

const FooterContainer = Styled.div`
  display: flex;
  margin-top: ${props => props.topSpace};
  margin-left: ${props => props.leftSpace};
  width: ${props => props.width};
  z-index: 3;
  position: relative;
`;

const InfoContainer = Styled.div`
  margin-right: 40px;
`;

const LogoFooter = Styled.img`
  display: flex;
  width: 180px;
  height: 60px; 
  margin-top: -60px;
  margin-left: 360px;
`;

const ImagesFooter = Styled.div`
  margin-top: 200px;
  margin-left: 30px;
  z-index: 3;
  position: relative;
`;

const Cover = (props) => {
  return (
    <MainContainer>
      <Div>   
        <CustomDiv
          color={'#c64a3e'}
          scale={'scale(-1, 1)'} 
          height={'470px'} 
          width={'270px'} 
          left={'0px'} />
        <CustomDiv 
          color={'#81be57'} 
          scale={'scale(1, 1)'} 
          height={'470px'} 
          width={'270px'} 
          left={'30px'} />
      </Div> 
      <DivFooter>
        <CustomDiv 
          color={'#e3a252'} 
          scale={'scale(1, -1)'} 
          height={'205px'} 
          separation={'-25px'} 
          width={'290px'} 
          left={'-10px'}/>
        <CustomDiv 
          color={'#e3a252'} 
          scale={'scale(-1, -1)'} 
          height={'205px'} 
          width={'290px'} 
          left={'25px'} />
      </DivFooter>
      <DivImage>
        <Image src={book}></Image>
      </DivImage>
      <LeftSide 
        leftPosition={'35px'} 
        topPosition={'-530px'} 
        width={'210px'} >
        <Title text={'Creacionales'}/>
        <P bottom={'50px'} top={'15px'}>
          Restringen o controlan la forma en que creamos los objetos evitando que el 
          usuario utilice la instruccion new para crear nuevas instancias  
        </P >
        <Emphasis>Abstract Factory</Emphasis>
        <Emphasis>Factory Method</Emphasis>
        <Emphasis>Object Pool</Emphasis>
        <Emphasis>Prototype</Emphasis>
        <Emphasis>Singleton</Emphasis>
        <Emphasis>Builder</Emphasis>
      </LeftSide>
      <LeftSide 
        leftPosition={'350px'} 
        topPosition={'-410px'}  
        width={'195px'} >
        <Title text={'Estructurales'}/>
        <P bottom={'65px'}>
          Describen como los objetos y clases se pueden combinar para 
          formar estructuras mas grandes y complejas 
        </P>
        <Emphasis textAlign={'right'}>Composite</Emphasis>
        <Emphasis textAlign={'right'}>Decorator</Emphasis>
        <Emphasis textAlign={'right'}>Flyweight</Emphasis>
        <Emphasis textAlign={'right'}>Adapter</Emphasis>
        <Emphasis textAlign={'right'}>Facade</Emphasis>
        <Emphasis textAlign={'right'}>Bridge</Emphasis>
        <Emphasis textAlign={'right'}>Proxy</Emphasis>
      </LeftSide>
      <P top={'150px'} width={'450px'} textAlign={'left'} left={'70px'}>
        Colaboracion, relaciones y delegacion de responsabilidades entre otras clases 
        logrando con esto simplificar la forma en que los objetos se comunican e 
        interactuan entre si
      </P>
      <FooterContainer topSpace={'-15px'} leftSpace={'65px'}> 
        <InfoContainer>
          <Emphasis textAlign={'center'}>Iterator</Emphasis>
          <Emphasis textAlign={'center'}>Mediator</Emphasis>
          <Emphasis textAlign={'center'}>Memento</Emphasis>
        </InfoContainer>
        <InfoContainer>
          <Emphasis textAlign={'center'}>Templete Method</Emphasis>
          <Emphasis textAlign={'center'}>Strategy</Emphasis>
          <Emphasis textAlign={'center'}>Chain of Resp</Emphasis>        
        </InfoContainer>
        <InfoContainer>        
        <Emphasis textAlign={'center'}>Iterator</Emphasis>
          <Emphasis textAlign={'center'}>Command</Emphasis>
          <Emphasis textAlign={'center'}>Observer</Emphasis>
        </InfoContainer>
      </FooterContainer>
      <P 
        top={'-215px'} 
        color={'white'} 
        fontSize={'22px'} 
        left={'35px'}>patronesdediseno.com
      </P>
      <ImagesFooter>
        <Title topSpace={'2px'} text={'Comportamiento'}/>
        <LogoFooter src={logo}></LogoFooter>
      </ImagesFooter>  
    </MainContainer>
  );
};

export default Cover;
