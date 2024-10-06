import React from 'react';
import styled from "styled-components"

import Section from "./Section.js";
function Home() {
  return (
    <>
    
  <Container>
    <Section
    title="Model S" 
    description="Order Online for Touchless Delivery"
    backgroundImg="model-s.jpg"
    leftbtntext="Custom Order"
    rightbtntext="Existing Inventory"
    />
    <Section
    title="Model Y" 
    description="Order Online for Touchless Delivery"
    backgroundImg="model-y.jpg"
    leftbtntext="Custom Order"
    rightbtntext="Existing Inventory"
    />
    <Section
    title="Model 3" 
    description="Order Online for Touchless Delivery"
    backgroundImg="model-3.jpg"
    leftbtntext="Custom Order"
    rightbtntext="Existing Inventory"
    />
    <Section
    title="Model X" 
    description="Order Online for Touchless Delivery"
    backgroundImg="model-x.jpg"
    leftbtntext="Custom Order"
    rightbtntext="Existing Inventory"
    />
    <Section
    title="Lowest Cost Solar Panels in America" 
    description="Money-back guarantee"
    backgroundImg="solar-panel.jpg"
    leftbtntext="Order now"
    rightbtntext="Learn more"
    />
    <Section
    title="Solar for New Roofs" 
    description="Solar Roof costs less Than a New Roof"
    backgroundImg="solar-roof.jpg"
    leftbtntext="Order now"
    rightbtntext="Learn more"
    />
    <Section
    title="Accessories" 
    description=""
    backgroundImg="accessories.jpg"
    leftbtntext="Shop Now"

    />
    
    
  </Container>
    </>
    
  );
}
const Container=styled.div`
height:100vh;
`

export default Home;

