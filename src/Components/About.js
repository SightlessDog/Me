import React from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import image from '../assets/pictures/myImage.jpg';
import '../index.css';
import Navigation from './Navigation';
import { black, bodyFont, typeScale } from '../utils';

const MyPicture = styled(animated.img).attrs({})`
  background-repeat: no-repeat;
  background-position: center;
  height: 600px;
`;

const MyPictureContainer = styled(animated.div)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InsidePictureContainer = styled.div`
  margin-top: -2%;
  margin-left: 10%;
  z-index: -1;
`;

const MyTextContainer = styled(animated.div)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const TheActualText = styled.div`
  margin: 1% 0;
  color: ${black[100]};
  font-family: ${bodyFont};
  font-size: ${typeScale.header5};
  letter-spacing: -1px;
  line-height: 98%;
  width: 45%;
`;

const WhatUp = styled.div`
  color: ${black[100]};
  font-family: ${bodyFont};
  font-size: ${typeScale.header2};
`;

const FinalThoughtsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
`;

const InsideFinalThoughtsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const About = () => {
  // const imageAnimation = useSpring({
  //   transform: 'translateY(-200%)',
  //   opacity: 0,
  //   from: { opacity: 1, transform: 'translateY(0px)' },
  //   config: { duration: 10000, mass: 5 },
  // });

  // const textAnimation = useSpring({
  //   transform: 'translateY(-100%)',
  //   opacity: 1,
  //   from: { opacity: 0, transform: 'translateY(-300%)' },
  //   config: { duration: 3500 },
  //   delay: 3000,
  // });

  return (
    <>
      <Navigation />
      <MyPictureContainer>
        <WhatUp>Hey What up</WhatUp>
        <InsidePictureContainer>
          <MyPicture src={image} />
          <WhatUp>Want to chit chat?</WhatUp>
        </InsidePictureContainer>
      </MyPictureContainer>
      <MyTextContainer>
        <TheActualText>
          I am Elyess, an amateur documantary photographer who has come upon
          many different cultures.
        </TheActualText>
        <TheActualText>
          I was born in Bizerte, Tunisia in 1999. My first experiences with
          photography began in 2014 when I received a camera as gift, it was the
          famous Canon 400D.
        </TheActualText>
        <TheActualText>
          I started randomly shooting things until I discovered the profile a
          very inspiring person called Vivian Maier.
        </TheActualText>
        <TheActualText>
          What inspired me more is a very talented guy called Skander Khlif,
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          he has a very wonderful portfolio and that's how I started with
          documantary photography
        </TheActualText>
        <TheActualText>
          I call it documentary because I try to document every aspect of our
          everyday life.
        </TheActualText>
      </MyTextContainer>
      <FinalThoughtsContainer>
        <TheActualText>
          I am Elyess, an amateur documantary photographer who has come upon
          many different cultures.
        </TheActualText>
        <InsideFinalThoughtsContainer>
          <TheActualText>
            I was born in Bizerte, Tunisia in 1999. My first experiences with
            photography began in 2014 when I received a camera as gift, it was
            the famous Canon 400D.
          </TheActualText>
        </InsideFinalThoughtsContainer>
      </FinalThoughtsContainer>
    </>
  );
};

export default About;
