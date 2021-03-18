import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import '../index.css';
import { A } from './NavBar';

const LeftMenu = styled.nav.attrs({
  className: 'absolute flex flex-col justify-start h-96 ml-8 mt-8 space-y-6',
})`
  height: 100%;
  width: 25%;
`;

const FirstContainer = styled.span.attrs({
  className: 'flex flex-row flex-wrap justify-end mr-8 mt-8',
})`
  width: auto;
  padding-left: 25%;
  height: 40rem;
`;

const FirstImageContainer = styled.div.attrs({
  className: 'bg-blue-600',
})`
  width: 50%;
`;

const SecondImageContainer = styled.div.attrs({
  className: 'bg-purple-600',
})`
  width: 50%;
`;

const SecondContainer = styled.div.attrs({
  className: 'bg-green-600 ml-8 mr-8',
})`
  height: 50rem;
`;

const Gallery = () => {
  return (
    <>
      <Navigation />
      <LeftMenu>
        <A>Color</A>
        <A>Black and White</A>
      </LeftMenu>
      <FirstContainer>
        <FirstImageContainer>hello</FirstImageContainer>
        <SecondImageContainer>Hello</SecondImageContainer>
      </FirstContainer>
      <SecondContainer />
    </>
  );
};

export default Gallery;
