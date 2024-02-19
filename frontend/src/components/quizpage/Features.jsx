import React from "react";
import styled from "styled-components";
import FeaturesItem from "./FeaturesItem";
import { features } from "./Data";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column; /* Change to a single column layout on smaller screens */
    align-items: center; /* Center align items on smaller screens */
  }
`;

const Features = () => {
  return (
    <Container>
      {features.map((item) => (
        <FeaturesItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Features;
