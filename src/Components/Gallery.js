import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import Wrapper from "./Wrapper";

const FirstContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 350px;
  margin-right: 350px;
  margin-top: 100px;
  height: 30rem;
  justify-content: space-between;
`;

const FirstImageContainer = styled.div`
  background-color: blue;
  width: 50%;
`;
const SecondImageContainer = styled.div`
  background-color: red;
  width: 50%;
`;

const SecondContainer = styled.div`
  margin-left: 350px;
  margin-right: 350px;
  height: 30rem;
  background-color: green;
`;

const Gallery = (props) => {
  return (
    <Wrapper>
      <NavBar theme={props.theme} />
      <FirstContainer>
        <FirstImageContainer>hello</FirstImageContainer>
        <SecondImageContainer>Hello</SecondImageContainer>
      </FirstContainer>
      <SecondContainer />
    </Wrapper>
  );
};

export default Gallery;
