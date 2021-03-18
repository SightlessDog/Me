import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import image from '../assets/pictures/myImage.jpg';
import '../index.css';
import Navigation from './Navigation';
import MeTrail from '../utils/Animations/meTrail';

const MyPicture = styled(animated.img).attrs({})`
  background-repeat: no-repeat;
  background-position: center;
  z-index: -3;

  @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
    /* position: absolute; */
  }
  @media screen and (min-width: 768px) {
    height: 600px;
    width: auto;
    /* position: absolute;
    top: 10%;
    left: 20%; */
  }
`;

const BiggestContainer = styled.div.attrs({
  className: 'flex flex-col',
})``;

const About = () => {
  return (
    <BiggestContainer>
      <div>
        <Navigation />
        <MyPicture src={image} />
        <MeTrail left={'50%'} top={'50%'}>
          <span>Hi I am Elyess</span>
          <span>
            I am also an amateur documantary photographer who has come upon many
            different cultures.
          </span>
          <span>
            I was born in Bizerte, Tunisia in 1999. My first experiences with
            photography began in 2014 when I received a camera as gift, it was
            the famous Canon 400D.
          </span>
        </MeTrail>
      </div>
      <div>
        <MeTrail left={'20%'} top={'50%'}>
          <span>
            I started randomly shooting things until I discovered the profile a
            very inspiring person called Vivian Maier.
          </span>
          <span>
            What inspired me more is a very talented guy called Skander Khlif,
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            he has a very wonderful portfolio and that's how I started with
            documantary photography
          </span>
          <span>
            I call it documentary because I try to document every aspect of our
            everyday life.
          </span>
        </MeTrail>
      </div>
    </BiggestContainer>
  );
};

export default About;
