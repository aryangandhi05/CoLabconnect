import Navbar from "../Navbar";
import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import lottie from "lottie-web";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Email, Person, Key } from "@mui/icons-material"; // Import MUI Icons

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(245, 242, 252);
  background: linear-gradient(
    90deg,
    rgba(245, 242, 252, 1) 0%,
    rgba(245, 242, 252, 1) 0%,
    rgba(221, 191, 248, 1) 100%
  );
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 900px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
`;

const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const InputIcon = styled.div`
  margin-right: 10px;
  color: #b05ff8;
`;

const Input = styled.input`
  flex: 1;
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc; /* Add a light border color */
  border-radius: 5px;
  outline: none;
`;

const Button = styled.button`
  background-color: #b05ff8;
  width: 100%;
  color: white;
  border: none;
  border-radius: 15px;
  padding: 10px;
  cursor: pointer;
  font-size: 18px;
  margin-top: 10px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #bd7af9;
  }
`;

const FormWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  animation: border 0.5s linear;

  @keyframes border {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: border-line 0.5s linear;

  @keyframes border-line {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-0%);
    }
  }
`;

const QRegister = () => {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./homelottie3.json"),
    });
  }, []);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const registered = {
      firstname: name,
      lastname: lastName,
      email: email,
      password: pass,
    };

    axios.post("http://localhost:5001/users/", registered).then((response) => {
      console.log(response.status);
      console.log(response.data);
    });
    navigate("/qlogin");
  };

  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <FormWrapper>
            <Form onSubmit={handleRegister}>
              <InputWrapper>
                <InputIcon>
                  <Email />
                </InputIcon>
                <Input
                  placeholder="Email (username)"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </InputWrapper>
              <InputWrapper>
                <InputIcon>
                  <Person />
                </InputIcon>
                <Input
                  placeholder="First Name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </InputWrapper>
              <InputWrapper>
                <InputIcon>
                  <Person />
                </InputIcon>
                <Input
                  placeholder="Last Name"
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </InputWrapper>
              <InputWrapper>
                <InputIcon>
                  <Key />
                </InputIcon>
                <Input
                  placeholder="Password"
                  type="password"
                  onChange={(e) => setPass(e.target.value)}
                  required
                />
              </InputWrapper>
              <Button type="submit">Register for free</Button>
            </Form>
          </FormWrapper>
          <ImageContainer>
            <div ref={container}></div>
          </ImageContainer>
        </Wrapper>
      </Container>
    </>
  );
};

export default QRegister;
