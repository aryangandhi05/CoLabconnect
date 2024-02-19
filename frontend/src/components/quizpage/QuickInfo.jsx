import React from "react";
import styled from "styled-components";
import { Person, School, Group } from "@mui/icons-material";

const Container = styled.div`
  background-color: #f5f2fc;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Section = styled.div`
  flex: 1;
  margin: 25px;
  min-width: 300px;
  max-width: 400px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Image = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
`;

const Info = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  color: #393e46;
  margin-bottom: 10px;
  font-size: 24px;
`;

const Description = styled.div`
  color: #393e46;
  font-size: 16px;
`;

const WhoUsesTitle = styled.div`
  font-size: 42px;
  font-weight: 200;
  text-align: center;
  background-color: #f5f2fc;
  color: #393e46;
  border-top: 3px solid #393e46;
  border-bottom: 3px solid #393e46;
`;

const QuickInfo = () => {
  return (
    <>
      <WhoUsesTitle>
        Who uses <b>CLC. Quizzie</b>
      </WhoUsesTitle>
      <Container>
        <Section>
          <Image>
            <Person style={{ fontSize: "200px", color: "#393E46" }} />
          </Image>
          <Info>
            <Title>Individuals</Title>
            <Description>
              Create fun social quizzes and send quizzes to your friends. The
              review feature allows your friends to review their answers after
              they have completed the quiz.
            </Description>
          </Info>
        </Section>
        <Section>
          <Image>
            <School style={{ fontSize: "200px", color: "#393E46" }} />
          </Image>
          <Info>
            <Title>Teachers</Title>
            <Description>
              Quickly create online tests for your students. And you can publish
              your test for free. The auto-grading function will save you time
              and allow you to concentrate on your other business.
            </Description>
          </Info>
        </Section>
        <Section>
          <Image>
            <Group style={{ fontSize: "200px", color: "#393E46" }} />
          </Image>
          <Info>
            <Title>Businesses</Title>
            <Description>
              Create online training and assessments to ensure your staff are
              always up to date with the right skills. The powerful reporting
              allows you to track your staff participation and progress.
            </Description>
          </Info>
        </Section>
      </Container>
    </>
  );
};

export default QuickInfo;
