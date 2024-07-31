// Import React and styled-components library
import React from 'react';
import styled from 'styled-components';

// Import the Navbar component
import { Navbar } from './Navbar';
import { MeshDistortMaterial, Sphere, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

// Styled component for the main section
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px){
    height: 200vh;
  }
`;

// Styled component for the main container
const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1000px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px){
    width: 100%;
    flex-direction: column;
    align-items: center;
  justify-content: center;
  }
`;

// Left side content styled components
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px){
    flex: 1;
    align-items: center;
  }
`;

// Title styled component
const Title = styled.h1`
  font-size: 75px;

  @media only screen and (max-width: 768px){
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

  @media only screen and (max-width: 768px){
    padding: 20px;
    text-align: center;
  }
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

// Right side content styled components
const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 768px){
    flex: 1;
    width: 100%;
  }
`;

// Image styled component for the 3D model
const Img = styled.img`
  width: 600px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 83px;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px){
    width: 600px;
    height: 650px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

// Functional component for the Hero section
export const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Innovate. Design. Achieve</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>What We Do</Subtitle>
          </WhatWeDo>
          <Desc>We craft engaging, user-focused digital solutions that inspire and transform.</Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
        <Canvas>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} />
      <Sphere args={[1, 100, 200]} scale={2.3}>
        <MeshDistortMaterial color="#4e17cc" attach="material" distort={0.5} speed={2} />
      </Sphere>
    </Canvas>
          <Img src="./img/moon.png" />
        </Right>
      </Container>
    </Section>
  );
};


export default Hero;
