import React from 'react';
import styled from 'styled-components';
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <Heading>
      <HeaderDate>SMARCH 32, 2018</HeaderDate>
      <HeadingH1>Lambda Times</HeadingH1>
      <HeaderTemp>98°</HeaderTemp>
    </Heading>
  )
}

export default Header;


const Heading = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
`;

const HeadingH1 = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

const HeaderTemp = styled.div`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;



const HeaderDate = styled.div`
  margin-left: 25px;
  flex: 1;
  font-size: 1.5rem;
`;

