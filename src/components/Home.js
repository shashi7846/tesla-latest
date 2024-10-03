import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model-S"
        description="order online for touchless delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Exisiting customer"
      />
      <Section
        title="Model-Y"
        description="order online for touchless delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Exisiting customer"
      />
      <Section
        title="Model-3"
        description="order online for touchless delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Exisiting customer"
      />
      <Section
        title="Model-X"
        description="order online for touchless delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Exisiting customer"
      />

      <Section
        title="Lowest cost solar panels in america"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="order now"
        rightBtnText="learn more"
      />

      <Section
        title="Solar for New Roofs"
        description="
       Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />

      <Section
        title="Accessories"
        backgroundImg="accessories.jpg"
        leftBtnText="Shop Now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
