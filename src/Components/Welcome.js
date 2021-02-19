import React from 'react';
import styled from 'styled-components';
import { bodyFont, typeScale, gold, neutral, black } from '../utils';
import { animated } from 'react-spring';
import Trail from '../utils/Animations/trail';
import { Icons } from '../assets';
import useBoop from '../utils/Animations/LogoHover';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Div = styled(animated.div).attrs({
  className:
    'flex w-full h-screen flex-row justify-center items-center text-center',
})`
  background-color: ${neutral[100]};
`;

const Logo = styled(animated.div).attrs({})`
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  color: ${gold[300]};
  font-family: ${bodyFont};
  text-align: center;
  grid-area: text;
  font-size: ${typeScale.header3};
`;

const ContinueContainer = styled(animated.div).attrs({
  className: 'flex items-center',
})`
  position: absolute;
  top: 90%;
  left: 90%;
  cursor: pointer;
`;

const ContinueLogo = styled(animated.img)`
  color: ${black[100]};
  width: 30px;
  height: 1%;
`;

const ContinueDiv = styled.div`
  font-family: ${bodyFont};
  color: ${black[100]};
  margin-right: 5%;
`;

const Welcome = (props) => {
  const [style, trigger] = useBoop({ x: 4 });

  return (
    <>
      <Div>
        <Trail>
          <span>Documenting</span>
          <span>Life</span>
          <span>!</span>
        </Trail>
        <Logo>Elyess</Logo>
      </Div>
      <ContinueContainer
        onMouseEnter={trigger}
        onClick={() => {
          !props.rederRest;
        }}
      >
        <Router>
          <Link to="/Home">
            <ContinueDiv>Continue</ContinueDiv>
          </Link>
        </Router>
        <ContinueLogo
          style={style}
          src={Icons.ContinueIcon}
          alt="continue logo"
        ></ContinueLogo>
      </ContinueContainer>
    </>
  );
};

export default Welcome;
