import React, { useState } from 'react';
import styled from 'styled-components';
import { bodyFont, typeScale } from '../utils';
import { PrimaryButton, SecondaryButton } from './Buttons';
import Wrapper from './Wrapper';
import image from '../assets/pictures/myImage.jpg';
import streetImage from '../assets/pictures/meLaughing.jpg';
import { animated, useSpring, useTransition } from 'react-spring';
import Navigation from './Navigation';

const BodyText = styled(animated.div)`
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  color: ${(props) => props.theme.bodyTextColor};
  font-family: ${bodyFont};
  text-align: center;
  grid-area: text;
  font-size: ${typeScale.header3};
`;

const MyPicture = styled(animated.img).attrs({})`
  background-repeat: no-repeat;
  background-position: center;
  z-index: -3;

  @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
    position: absolute;
  }
  @media screen and (min-width: 768px) {
    height: 600px;
    width: auto;
    position: absolute;
    top: 30%;
    left: 62%;
  }
`;

const StreetPicture = styled(animated.img).attrs()`
  z-index: -3;
  @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
    position: absolute;
  }
  @media screen and (min-width: 768px) {
    height: 600px;
    width: auto;
    position: absolute;
    left: 20%;
  }
`;

const TextButtonsContainer = styled.div`
  display: grid;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 100px;
  row-gap: 100px;
  grid-template-areas:
    'text'
    'buttons';
`;

const ButtonsContainer = styled.div`
  width: 600px;
  grid-area: buttons;
  justify-content: center;
  align-items: start;
  display: flex;
  justify-content: space-around;
`;

const HomePage = (props) => {
  const StoryTellerStyle = useSpring({
    opacity: 1,
    height: 20,
    x: 20,
    from: { opacity: 0, height: 0, x: 0 },
  });

  const ImageStyle = useTransition(null, null, {
    from: {
      position: 'absolute',
      opacity: 0,
      transform: 'translateY(-500px)',
    },
    enter: { opacity: 1, transform: 'translateY(30px)' },
    leave: { opacity: 0, transform: 'translateY(-250px)' },
    config: { duration: 2000 },
  });

  const SecondImageStyle = useTransition(null, null, {
    from: {
      position: 'absolute',
      opacity: 0,
      transform: 'translateY(-300px)',
    },
    enter: { opacity: 1, transform: 'translateY(100px)' },
    leave: { opacity: 0, transform: 'translateY(-250px)' },
    config: { duration: 2500 },
  });

  return (
    <Wrapper>
      {ImageStyle.map(({ item, key, props }) => (
        <MyPicture src={image} key={key} style={props} />
      ))}
      {SecondImageStyle.map(({ item, key, props }) => (
        <StreetPicture src={streetImage} key={key} style={props} />
      ))}
      <Navigation theme={props.theme} />
      <TextButtonsContainer>
        <BodyText style={StoryTellerStyle}>I am a visual</BodyText>
        <ButtonsContainer>
          <PrimaryButton>Discover</PrimaryButton>
          <SecondaryButton>Instagram</SecondaryButton>
        </ButtonsContainer>
      </TextButtonsContainer>
    </Wrapper>
  );
};

export default HomePage;
