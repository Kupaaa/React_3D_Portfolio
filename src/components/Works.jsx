import React, { useState } from "react";
import styled from "styled-components";
import WebDesign from "./WebDesign";
import Development from "./Development";
import ProductDesign from "./ProductDesign";
import Illustration from "./Illustration";
import SocialMedia from "./SocialMedia";


// Data for the list items
const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];

// Styled component for the main section
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  /* position: relative;
  color: black; */
`;

// Styled component for the container holding Left and Right sections
const Container = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px){
    width: 100%;
    flex-direction: column;
  }
`;

// Styled component for the Left section
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px){
    padding: 20px;
    justify-content: center;
  }
`;

// Styled component for the list of items
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
`;

// Styled component for each list item
const ListItem = styled.li`
  font-size: 60px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 768px){
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px white;
  }

  &::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover::after {
    animation: moveText 0.5s linear both;
    width: 100%;
  }

  @keyframes moveText {
    to {
      width: 1%;
    }
  }
`;

// Styled component for the Right section
const Right = styled.div`
  flex: 1;
`;

// React functional component for the Works section
export const Works = () => {
  const [work,setWork] = useState("Web Design")
  return (
    <Section>
      <Container>
        <Left>
          {/* List of items generated from the 'data' array */}
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={()=>setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
        {work === "Web Design" ? <WebDesign /> : work === "Development" ? <Development /> : work === "Product Design" ? <ProductDesign /> : work === "Illustration" ? <Illustration /> : work === "Social Media" ? <SocialMedia /> : <ProductDesign />}

          </Right>
      </Container>
    </Section>
  );
};

export default Works;
