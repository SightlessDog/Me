import React from 'react';
import styled from 'styled-components';
import { bodyFont, typeScale } from '../utils';
import { animated } from 'react-spring';
import image from '../assets/pictures/nature.jpg';

const BodyText = styled(animated.div)`
  color: ${(props) => props.theme.headersColor};
  font-family: ${bodyFont};
  text-align: center;
  font-size: 6rem;
  letter-spacing: 0.39em;
`;
const UnderText = styled.div`
  color: ${(props) => props.theme.bodyTextColor};
  font-family: ${bodyFont};
  text-align: center;
  font-size: ${typeScale.header4};
  letter-spacing: 0.085em;
`;

const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const BackgroundImage = styled.img`
  position: absolute;
  z-index: -1;
  top: 15%;
`;

const HomePage = () => {
  return (
    <FlexContainer>
      <HomeContainer>
        <BodyText>Elyess Eleuch</BodyText>
        <UnderText>Let me tell you some honest stories</UnderText>
      </HomeContainer>
      <BackgroundImage src={image} />
    </FlexContainer>
  );
};

export default HomePage;
