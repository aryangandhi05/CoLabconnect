import React from "react";
import {
  AccessTime,
  Check,
  FlashOn,
  Lock,
  Public,
  Recommend,
} from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 25px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const BigTitle = styled.div`
  text-align: center;
  font-size: 42px;
  color: #393e46;
  border-top: 3px solid #393e46;
  border-bottom: 3px solid #393e46;
`;

const Image = styled.div`
  color: #b05ff8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  color: #393e46;
  margin-bottom: 10px;
`;

const Description = styled.div`
  flex: 1;
  text-align: center;
  color: #393e46;
`;

const Section = styled.div`
  flex: 1;
  margin: 10px 0; /* Adjust the margin as needed */
  min-width: 300px; /* Set a minimum width for sections */
  @media (max-width: 768px) {
    min-width: auto; /* Remove the minimum width on smaller screens */
    width: 100%;
  }
`;

const AllItems = styled.div`
  /* background-color: #e8e8e8; */
`;

const Introducing = () => {
  return (
    <AllItems>
      <BigTitle>
        Awesome <b>Features</b>
      </BigTitle>
      <Container>
        <Section>
          <Info>
            <Image>
              <Public />
            </Image>
            <Title>Access anywhere</Title>
            <Description>
              Being online allows you and your respondents to access, administer
              and take your quizzes from anywhere at any time.
            </Description>
          </Info>
        </Section>
        <Section>
          <Info>
            <Image>
              <Lock />
            </Image>
            <Title>Secured with SSL</Title>
            <Description>
              With SSL encryption and utilizing our advanced cloud
              infrastructure you can be sure your tests will always be secure.
            </Description>
          </Info>
        </Section>
        <Section>
          <Info>
            <Image>
              <Check />
            </Image>
            <Title>Auto-grading</Title>
            <Description>
              CLC. Quizzie can automatically grade your assessments, saving your
              time.
            </Description>
          </Info>
        </Section>
      </Container>
      <Container>
        <Section>
          <Info>
            <Image>
              <AccessTime />
            </Image>
            <Title>Timed tests</Title>
            <Description>
              With CLC. Quizzie, it is easy to set a time limit.
            </Description>
          </Info>
        </Section>
        <Section>
          <Info>
            <Image>
              <FlashOn />
            </Image>
            <Title>Custom Tests</Title>
            <Description>
              With CLC. Quizzie you can customize your tests easily
            </Description>
          </Info>
        </Section>
        <Section>
          <Info>
            <Image>
              <Recommend />
            </Image>
            <Title>24/7 live support</Title>
            <Description>
              Being online allows you and your respondents to access, administer
              and take your quizzes from anywhere at any time.
            </Description>
          </Info>
        </Section>
      </Container>
    </AllItems>
  );
};

export default Introducing;
