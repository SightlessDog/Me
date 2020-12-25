import React from "react";
import styled from "styled-components";
import { bodyFont, typeScale } from "../utils";
import { PrimaryButton, SecondaryButton } from "./Buttons";
import NavBar from "./NavBar";
import Wrapper from "./Wrapper";
import image from "../assets/pictures/myImage.jpg";
import { useSpring, animated } from "react-spring";

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

const HomeDiv = styled(animated.div)`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 600px;
  position: absolute;
  top: 0%;
  left: 54%;
  z-index: -3;
`;

const TextButtonsContainer = styled.div`
  display: grid;
  position: absolute;
  top: 40%;
  left: 20%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 100px;
  row-gap: 100px;
  grid-template-areas:
    "text . pic pic"
    "buttons . pic pic"
    ". . pic pic";
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
  const ImageStyle = useSpring({
    to: [{ opacity: 1 }],
    from: { opacity: 0.6 },
    config: { duration: 500 },
  });

  return (
    <Wrapper>
      <HomeDiv style={ImageStyle} />
      <NavBar theme={props.theme} />
      <TextButtonsContainer>
        <BodyText>I am a visual storyteller</BodyText>
        <ButtonsContainer>
          <PrimaryButton>Discover</PrimaryButton>
          <SecondaryButton>Instagram</SecondaryButton>
        </ButtonsContainer>
      </TextButtonsContainer>
    </Wrapper>
  );
};

export default HomePage;
