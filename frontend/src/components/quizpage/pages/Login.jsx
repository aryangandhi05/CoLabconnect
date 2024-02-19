import Navbar from "../Navbar";
import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../redux/apiCalls";
import lottie from "lottie-web";
import { Email, LockOpen } from "@mui/icons-material";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(221, 191, 248);
  background: linear-gradient(
    90deg,
    rgba(221, 191, 248, 1) 0%,
    rgba(245, 242, 252, 1) 100%,
    rgba(245, 242, 252, 1) 100%
  );
`;

const Wrapper = styled.div`
  display: flex; /* Added */
  justify-content: space-between; /* Added */
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  max-width: 900px; /* Increased width to accommodate the image */
  width: 90%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
`;

const Form = styled.form`
  flex: 1; /* Added to take up remaining space */
  display: flex;
  flex-direction: column;
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

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const InputIcon = styled.div`
  color: #b05ff8;
  flex: 0 0 auto;
  margin-right: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`;

const Button = styled.button`
  background-color: #b05ff8;
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

const Link = styled.a`
  margin-top: 20px;
  font-size: 15px;
  text-decoration: underline;
  cursor: pointer;
  text-align: center;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
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

const QLogin = () => {
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
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    const userCheck = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:5001/users/login",
        userCheck
      );
      console.log(response.status);
      console.log(response.data);
      login(dispatch, { email, password });
      console.log("data suc");
      navigate("/dashboard");
    } catch {
      alert("Wrong username and/or password");
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Form onSubmit={handleLogin}>
            <InputWrapper>
              <InputIcon>
                <Email />
              </InputIcon>
              <Input
                placeholder="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputWrapper>
            <InputWrapper>
              <InputIcon>
                <LockOpen />
              </InputIcon>
              <Input
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </InputWrapper>
            <Button type="submit">Login</Button>
            <Link onClick={() => navigate("/qregister")}>
              Don't have an account? Signup
            </Link>
          </Form>
          <ImageContainer>
            <div ref={container}></div>
          </ImageContainer>
        </Wrapper>
      </Container>
    </>
  );
};

export default QLogin;
