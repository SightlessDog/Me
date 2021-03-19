import React, { useState } from 'react';
import { useSprings, animated, interpolate } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import styled from 'styled-components';
import useBoop from '../utils/Animations/LogoHover';
import { Icons } from '../assets';
import { bodyFont, typeScale } from '../utils';

const CardsContainer = styled(animated.div)`
  position: absolute;
  will-change: transform;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Cards = styled(animated.div)`
  background-color: white;
  background-size: auto 85%;
  background-repeat: no-repeat;
  background-position: center center;
  width: 45vh;
  max-width: 300px;
  height: 85vh;
  max-height: 570px;
  will-change: transform;
  border-radius: 10px;
  box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4),
    0 10px 10px -10px rgba(50, 50, 73, 0.3);
`;

const Next = styled(animated.img)`
  width: 30px;
  height: 10%;
`;

const FlexContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const DirectionContainer = styled(animated.div)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const DirectionLabel = styled(animated.div)`
  color: ${(props) => props.theme.bodyTextColor};
  font-family: ${bodyFont};
  font-size: ${typeScale.header5};
`;

const cards = [
  'https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg',
  'https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg',
];

const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

const trans = (r, s) =>
  `perspective(0px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

const Deck = () => {
  const [nextStyle, nextTrigger] = useBoop({ x: 4 });
  const [previousStyle, previousTrigger] = useBoop({ x: -4, scale: -1 });
  const [props, set] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  }));
  return (
    <FlexContainer>
      <DirectionContainer onMouseEnter={previousTrigger}>
        <Next
          src={Icons.ContinueIcon}
          style={previousStyle}
          alt="previous sign"
        />
        <DirectionLabel>Previous</DirectionLabel>
      </DirectionContainer>
      {props.map(({ x, y, rot, scale }, i) => (
        <CardsContainer
          key={i}
          style={{
            transform: interpolate(
              [x, y],
              (x, y) => `translate3d(${x}px,${y}px,0)`
            ),
          }}
        >
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <Cards
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[i]})`,
            }}
          />
        </CardsContainer>
      ))}
      <DirectionContainer onMouseEnter={nextTrigger}>
        <DirectionLabel>Next</DirectionLabel>
        <Next style={nextStyle} src={Icons.ContinueIcon} alt="next sign" />
      </DirectionContainer>
    </FlexContainer>
  );
};

export default Deck;
