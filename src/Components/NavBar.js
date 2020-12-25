import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import { Icons } from "../assets";
import { primaryFont, typeScale } from "../utils";

const Nav = styled.nav`
  font-size: ${typeScale.paragraphText};
  padding-bottom: 10px;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    height: 70px;
    align-items: center;
    margin-left: 250px;
    margin-right: 250px;
    margin-top: 20px;
  }
`;

const Ul = styled.ul`
  list-style-type: none;
  display: ${(props) => (props.showBar ? "none" : "block")};

  @media screen and (min-width: 768px) {
    display: flex;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const A = styled(Link)`
  -moz-transition: all 0.4s ease-in;
  -o-transition: all 0.4s ease-in;
  -webkit-transition: all 0.4s ease-in;
  transition: all 0.4s ease-in;
  text-decoration: none;
  color: ${(props) => props.theme.headersColor};
  cursor: pointer;
`;

const Logo = styled(A)`
  display: inline-block;
  font-family: ${primaryFont};
  font-size: ${typeScale.paragraphText};
  margin-top: 10px;
  margin-left: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

const Li = styled.li`
  font-family: ${primaryFont};
  text-align: center;
  margin: 15px auto;

  @media screen and (min-width: 768px) {
    margin: 0;

    &:hover {
      color: ${(props) => props.theme.primaryButtonColor};
    }
  }
`;

const Toggle = styled.span`
  font-family: ${primaryFont};
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  color: ${(props) => props.theme.primaryButtonColor};
  font-size: 24px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBar: true,
      menu: ["Home", "Gallery", "About", "Instagram"],
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
          ).style.color = this.props.theme.headersColor)
        : (document.getElementById(
            id
          ).style.color = this.props.theme.bodyTextColor);
    }
  }

  render() {
    return (
      <Router>
        <Nav>
          <Toggle onClick={this.handleShowBar}>
            <img src={Icons.BarsIcon} />
          </Toggle>
          <Logo>Elyess</Logo>
          <Ul showBar={this.state.showBar}>
            {this.state.menu.map((tag, key) =>
              tag == "Instagram" ? (
                <Li>
                  <A
                    id={key}
                    onMouseOver={() => this.handleMouseOver({ key })}
                    onMouseLeave={() => this.handleMouseOver({ key })}
                    hoverState={this.state.hover}
                    to="https://www.instagram.com/omega_is/"
                  >
                    {tag}
                  </A>
                </Li>
              ) : (
                <Li>
                  <A
                    id={key}
                    onMouseOver={() => this.handleMouseOver({ key })}
                    onMouseLeave={() => this.handleMouseOver({ key })}
                    hoverState={this.state.hover}
                    to={"/" + tag}
                  >
                    {tag}
                  </A>
                </Li>
              )
            )}
          </Ul>
        </Nav>
      </Router>
    );
  }
}

export default NavBar;
