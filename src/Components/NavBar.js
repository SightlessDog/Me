import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import { primaryFont, typeScale } from '../utils';

const Nav = styled.nav.attrs({
  className: 'flex justify-between mr-8 ml-8 mt-8 items-center',
})`
  font-size: ${typeScale.paragraphText};
  padding-bottom: 10px;
`;

/*const Ul = styled.ul.attrs({
  className: 'list-none md:flex justify-end flex-row',
})`
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.showBar ? 'none' : 'block')};
  }
`;*/

export const A = styled(Link)`
  -moz-transition: all 0.4s ease-in;
  -o-transition: all 0.4s ease-in;
  -webkit-transition: all 0.4s ease-in;
  transition: all 0.4s ease-in;
  text-decoration: none;
  color: ${(props) => props.theme.headersColor};
  cursor: none;
  &:hover {
    color: ${(props) => props.theme.primaryButtonColor};
  }
`;

/*const Logo = styled(A).attrs({
  className: 'inline-block',
})`
  font-family: ${primaryFont};
  font-size: ${typeScale.paragraphText};
`;*/

const Li = styled.li`
  font-family: ${primaryFont};
  text-align: center;
  margin: 15px auto;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBar: true,
      menu: ['Home', 'Gallery', 'About', 'Instagram'],
      hover: false,
    };
    this.handleShowBar = this.handleShowBar.bind(this);
  }

  handleShowBar() {
    this.setState({ showBar: !this.state.showBar });
  }

  handleMouseOver(id) {
    this.setState({ hover: !this.state.hover });
    let otherState = this.state.menu.filter(
      (menuItem) => menuItem != this.state.menu[id.key]
    );
    for (let i = 0; i < otherState.length; i++) {
      let id = this.state.menu.indexOf(otherState[i]);
      this.state.hover
        ? (document.getElementById(
            id
        // eslint-disable-next-line react/prop-types
          ).style.color = this.props.theme.headersColor)
        : (document.getElementById(
            id
        // eslint-disable-next-line react/prop-types
          ).style.color = this.props.theme.bodyTextColor);
    }
  }

  render() {
    return (
      <Router>
        <Nav>
          {this.state.menu.map((tag, key) =>
            tag == 'Instagram' ? (
              <Li>
                <a
                  id={key}
                  onMouseOver={() => this.handleMouseOver({ key })}
                  onMouseLeave={() => this.handleMouseOver({ key })}
                  hoverState={this.state.hover}
                  to="https://www.instagram.com/omega_is/"
                >
                  {tag}
                </a>
              </Li>
            ) : (
              <Li>
                <A
                  id={key}
                  onMouseOver={() => this.handleMouseOver({ key })}
                  onMouseLeave={() => this.handleMouseOver({ key })}
                  hoverState={this.state.hover}
                  to={'/' + tag}
                >
                  {tag}
                </A>
              </Li>
            )
          )}
        </Nav>
      </Router>
    );
  }
}

export default NavBar;
