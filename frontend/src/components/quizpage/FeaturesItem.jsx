import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 25px;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Image = styled.img`
  width: 40%;
  max-width: 200px; /* Limit the image size */
  height: auto; /* Maintain the aspect ratio */
  border: 1px solid white;
  border-radius: 50%;
  object-fit: cover;
`;

const Info = styled.div`
  width: 100%;
  margin-top: 20px; /* Adjust the spacing between image and content */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: #393e46;
  margin-bottom: 10px;
  font-size: 24px; /* Adjust the font size for smaller screens */
`;

const Description = styled.div`
  text-align: center;
  color: #393e46;
  font-size: 16px; /* Adjust the font size for smaller screens */
`;

const FeaturesItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} alt={item.title} />
      <Info>
        <Title>{item.title}</Title>
        <Description>{item.desc}</Description>
      </Info>
    </Container>
  );
};

export default FeaturesItem;
