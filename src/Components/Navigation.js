import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';
import { typeScale } from '../utils';

const Nav = styled(Link)`
  color: ${(props) => props.theme.headersColor};
  font-size: ${typeScale.header4};
  font-weight: bold;
  cursor: none;
`;

const NavContainer = styled.div`
  position: fixed;
  height: 95%;
  width: 98%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const AboutGalleryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const Navigation = (props) => {
  const [hover, setHover] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [menu, setMenu] = useState([
    { name: 'Home' },
    { name: 'About' },
    { name: 'Gallery' },
  ]);
  const handleMouseOver = (key) => {
    setHover(!hover);
    console.log(key);
    let otherState = menu.filter((menuItem) => menuItem != menu[key]);
    for (let i = 0; i < otherState.length; i++) {
      let id = menu.indexOf(otherState[i]);
      hover
        ? (document.getElementById(
            id
          ).style.color = this.props.theme.headersColor)
        : (document.getElementById(
            id
          ).style.color = this.props.theme.bodyTextColor);
    }
  };

  return (
    <>
      <ThemeProvider theme={{ ...props.theme }}>
        <NavContainer>
          <Nav
            onMouseOver={() => handleMouseOver({ key })}
            onMouseLeave={() => handleMouseOver({ key })}
            to="/Home"
          >
            Home
          </Nav>
          <AboutGalleryContainer>
            <Nav
              onMouseOver={(e) => handleMouseOver(e)}
              onMouseLeave={() => handleMouseOver({ key })}
              to="/About"
            >
              About
            </Nav>
            <Nav
              onMouseOver={() => handleMouseOver({ key })}
              onMouseLeave={() => handleMouseOver({ key })}
              to="/Gallery"
            >
              Gallery
            </Nav>
          </AboutGalleryContainer>
        </NavContainer>
      </ThemeProvider>
    </>
  );
};

export default Navigation;
