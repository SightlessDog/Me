import React from 'react';
import styled from 'styled-components';
import { bodyFont, typeScale } from '../utils';
import Wrapper from './Wrapper';
import NavBar from './NavBar';
import image from '../assets/pictures/myImage.jpg';
import '../index.css';

const me =
  'Hi I am Elyess, a frontend developer based in berlin. I am also an amateur documantary photographer who has come upon many different cultures.' +
  "I was born in Bizerte, Tunisia (It's a wonderful place you should check it out) in 1999.";
const experience =
  'My first experiences with photography began in 2014 when I received a camera as gift, it was the famous Canon 400D.' +
  'I started randomly shooting things until I discovered the profile a very inspiring person called Vivian Maier.' +
  'What inspired me more is a very talented guy called Skander Khlif, he has a very wonderful portfolio' +
  "And that's how I started with documantary photography." +
  'I call it documentary because I try to document every aspect of our everyday life.';

const Div = styled.div.attrs({})`
  font-family: ${bodyFont};
  color: ${(props) => props.theme.bodyTextColor};
  font-size: ${typeScale.paragraphText};
  text-align: center;
`;

const LignContainer = styled.div.attrs({
  className: 'ml-24 mr-8 mt-16',
})`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    'text pic'
    'text2 pic'
    '. pic';
`;

const ColContainer = styled.div.attrs({
  className: 'w-full flex flex-col justify-between',
})`
  grid-area: text;
`;

const FirstTextContainer = styled.div`
  grid-area: text;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'firText .';
`;

const SectextContainer = styled.div`
  grid-area: text2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    '. .'
    '. secText';
`;

const Img = styled.img`
  grid-area: pic;
  width: 60%;
`;

const About = (props) => {
  return (
    <Wrapper>
      <NavBar theme={props.theme} />
      <LignContainer>
        <ColContainer>
          <FirstTextContainer>
            <Div style={{ gridArea: 'firText' }}>{me}</Div>
          </FirstTextContainer>
          <SectextContainer>
            <Div style={{ gridArea: 'secText' }}>{experience}</Div>
          </SectextContainer>
        </ColContainer>
        <Img src={image} />
      </LignContainer>
    </Wrapper>
  );
};

export default About;
