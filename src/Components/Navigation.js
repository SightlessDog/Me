import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { typeScale } from '../utils';
import { InstagramIcon } from '../assets/icons';

const Nav = styled(Link)`
  color: ${(props) => props.theme.bodyTextColor};
  font-size: ${typeScale.header5};
  font-weight: bold;
  font-family: ${(props) => props.theme.bodyFont};
  cursor: none;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
`;

const NavContainer = styled.div`
  width: 100%;
  padding: 10px 10%;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${(p) => p.theme.bodyFont};
  color: ${(p) => p.theme.headersColor};
`;

const Navigation = () => {
  return (
    <NavContainer>
      <InstagramIcon fillColor="white" height="35px" width="25px" />
      <Logo>
        <div>Elyess</div>
        <div>Eleuch</div>
      </Logo>
      <Flex>
        <Nav to="/about">About</Nav>
        <Nav to="/Gallery">Photos</Nav>
      </Flex>
    </NavContainer>
  );
};

export default Navigation;
