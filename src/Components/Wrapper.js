import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background-image: url(../assets/pictures/myImage.js);
`;

class Wrapper extends React.Component {
  render() {
    return <Div>{this.props.children}</Div>;
  }
}

export default Wrapper;
