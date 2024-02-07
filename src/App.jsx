// Import React and styled-components library
import React from "react";
import styled from "styled-components";

// Import components from the "components" directory
import { Hero } from "./components/Hero";
import { Who } from "./components/Who";
import { Works } from "./components/Works";
import { Contact } from "./components/Contact";



// Styled component for the main container
const Container = styled.div`
  height: 100vh;
  /* Uncomment the line below to set a background color */
  /* background-color: rebeccapurple; */
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  /* Set a background image using a URL */
  /* background: url(./img/bg.jpeg); */
  background: url(./img/12.png);
  
  /* Hide the scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
`;

// Main functional component for the entire application
function App() {
  return (
    // Main container for the entire application
    <Container>
      {/* Hero section */}
      <Hero />
      {/* Who section */}
      <Who />
      {/* Works section */}
      <Works />
      {/* Contact section */}
      <Contact />
    </Container>
  );
}

// Export the App component as the default export
export default App;
