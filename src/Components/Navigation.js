import React, {useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Link} from 'react-router-dom';
import {  typeScale } from '../utils';

const Nav = styled(Link)`
  position: absolute;
  color: ${(props) => props.theme.headersColor};
  font-size: ${typeScale.header4};
  font-weight: bold;
  cursor: none;
  left: ${(props) => props.theme.left};
  top: ${(props) => props.theme.top};
`;

const Navigation = (props) => {
  const [hover, setHover] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [menu, setMenu] = useState([
    { name: 'Home' },
    { name: 'About', top: '90%' },
    { name: 'Gallery', top: '90%', left: '90%' },
  ]);
  const handleMouseOver = (key) => {
    setHover(!hover);
    console.log(key);
    let otherState = menu.filter((menuItem) => menuItem != menu[key]);
    for (let i = 0; i < otherState.length; i++) {
      let id = menu.indexOf(otherState[i]);
      console.log('id', id);
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
      {menu.map((tag, key) => (
        <ThemeProvider key={key}
          theme={{
            // eslint-disable-next-line react/prop-types
            ...props.theme,
            top: menu[key].top || 0,
            left: menu[key].left || 0,
          }}
        >
          <Nav
            onMouseOver={() => handleMouseOver(key)}
            onMouseLeave={() => handleMouseOver(key)}
            to={`/${menu[key].name}`}
            id={menu[key].name}
            key={menu[key].name}
          >
            {menu[key].name}
          </Nav>
        </ThemeProvider>
      ))}
      {/* <ThemeProvider theme={{ ...props.theme }}>
        <Nav
          onMouseOver={() => handleMouseOver({ key })}
          onMouseLeave={() => handleMouseOver({ key })}
          to="/Home"
        >
          Home
        </Nav>
      </ThemeProvider>
      <ThemeProvider theme={{ ...props.theme, top: '90%' }}>
        <Nav
          onMouseOver={(e) => handleMouseOver(e)}
          onMouseLeave={() => handleMouseOver({ key })}
          to="/About"
        >
          About
        </Nav>
      </ThemeProvider>
      <ThemeProvider theme={{ ...props.theme, top: '90%', left: '90%' }}>
        <Nav
          onMouseOver={() => handleMouseOver({ key })}
          onMouseLeave={() => handleMouseOver({ key })}
          to="/Gallery"
        >
          Gallery
        </Nav>
      </ThemeProvider> */}
    </>
  );
};

export default Navigation;
