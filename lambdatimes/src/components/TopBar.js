import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBar1>
      <Container>
        <ContainerLeft>
          <ContainerLeftH2>TOPICS</ContainerLeftH2><ContainerLeftH2>SEARCH</ContainerLeftH2>
        </ContainerLeft>
        <ContainerCenter>
          <ContainerCenterH2>GENERAL</ContainerCenterH2><ContainerCenterH2>BROWNBAG</ContainerCenterH2><ContainerCenterH2>RANDOM</ContainerCenterH2><ContainerCenterH2>MUSIC</ContainerCenterH2><ContainerCenterH2>ANNOUNCEMENTS</ContainerCenterH2>
        </ContainerCenter>
        <ContainerRight>
          <ContainerRightH2>LOG IN</ContainerRightH2>
        </ContainerRight>
      </Container>
    </TopBar1>
  )
}

export default TopBar;


const TopBar1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`;

const ContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const ContainerLeftH2 = styled.h2`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
  font-size: 20px;
`;

const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const ContainerCenterH2 = styled.h2`
  cursor: pointer;
  margin-right: 5%;
  font-weight: bold;
  font-size: 20px;
`;

const ContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const ContainerRightH2 = styled.h2`
cursor: pointer;
`;