import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import lottie from "lottie-web";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 60px;
  color: #2e2e2e;
  margin-left: 5%;
  font-family: Georgia, serif;
  @media (max-width: 768px) {
    font-size: 40px; /* Decrease font size for smaller screens */
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f5f2fc;
`;

const Description = styled.p`
  margin: 30px 0px;
  font-size: 28px;
  font-family: system-ui;
  font-weight: 600;
  letter-spacing: 3px;
  color: rgba(44, 43, 43, 0.674);
  margin-left: 5%;

  @media (max-width: 768px) {
    font-size: 18px; /* Decrease font size for smaller screens */
  }
`;

const Button = styled.button`
  padding: 14px;
  font-size: 18px;
  background-color: transparent;
  cursor: pointer;
  color: #eeeeee;
  background-color: #b05ff8;
  border: none;
  border-radius: 15px;
  max-width: 200px;
  margin-left: 5%;

  @media (max-width: 768px) {
    font-size: 16px; /* Decrease font size for smaller screens */
  }

  &:hover {
    background-color: #bd7af9;
  }
`;

const Hero = () => {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./homelottie.json"),
    });
  }, []);
  return (
    <Container>
      <Wrapper>
        <Slide>
          <InfoContainer>
            <Title>CoLabConnect's Quiz maker</Title>
            <Description>
              Create, send and analyze your tests, quizzes and assessments for
              free with CLC. Quizzie
            </Description>
            <Button>
              <Link
                to="/qregister"
                style={{ textDecoration: "none", color: "#eeeeee" }}
              >
                Get Started &gt;&gt;
              </Link>
            </Button>
          </InfoContainer>
          <ImgContainer>
            <div className="contanierhomelottie" ref={container}></div>
          </ImgContainer>
        </Slide>
      </Wrapper>
    </Container>
  );
};

export default Hero;
