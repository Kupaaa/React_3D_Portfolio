// Import React and styled-components library
import React from 'react';
import styled from 'styled-components';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cube from './Cube';

// Styled component for the main section
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

// Styled component for the main container
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1000px;
  display: flex;
  justify-content: space-between;
`;

// Left side content styled component
const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px){
    display: none;
  }
`;

// Title styled component
const Title = styled.h1`
  font-size: 75px;

  @media only screen and (max-width: 768px){
    font-size: 60px;
  }
`;

// Right side content styled component
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px){
    align-items: center;
    text-align: center;
  }
`;

// Section about "What We Do" styled components
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

// Line separating sections styled component
const Line = styled.img`
  height: 5px;
`;

// Subtitle styled component
const Subtitle = styled.h2`
  color: #da4ea2;
`;

// Description styled component
const Desc = styled.p`
  font-size: 24px;
  color: lightgrey;
`;

// Button styled component
const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

// Functional component for the "Who" section
export const Who = () => {
  return (
    // Main section
    <Section>
      <Container>
        <Left> 
        <Canvas camera={{fov:25, position :[5, 5, 5]}}>
        <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={0.5} />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Cube/>
      </Canvas>
        </Left>
        <Right>
          <Title>Break the Mold</Title>
          <WhatWeDo>
            <Line src="./img/line.png"/>
            <Subtitle>Who we Are</Subtitle>
          </WhatWeDo>
          <Desc> A dynamic team of visionaries and creators dedicated to pushing the boundaries of design and technology.</Desc>
          <Button>See our work</Button>
        </Right>
      </Container>
    </Section>
  );
}


export default Who;