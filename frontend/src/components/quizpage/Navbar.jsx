import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 70px;
  background-color: #smokewhite;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 32px;
  font-family: cursive;
  font-weight: 500;
  cursor: pointer;
  color: #3f3f3ff1;
  margin-left: 10%;
  padding: 10px 12px;
`;

const MenuItem = styled.button`
  font-size: 16px;
  cursor: pointer;
  background-color: #6564648c;
  color: #eeeeee;
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  &:hover {
    background-color: #222831;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItemFirst = styled.div`
  width: 100px;
  margin-right: 20px;
  cursor: pointer;
  border: none;
  background-color: #000000;
  color: #eeeeee;
  padding: 10px 21px;
  border-radius: 50px;
  &:hover {
    background-color: #434242e7;
  }
`;

const MenuItemSecond = styled.div`
  cursor: pointer;
  border: none;
  background-color: #b05ff8;
  color: #eeeeee;
  margin-right: 10%;
  padding: 10px 30px;
  border-radius: 5px;
  &:hover {
    background-color: #bd7af9;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Quizzie</Logo>
          <Link to="/quiz">
            <MenuItem>Home</MenuItem>
          </Link>
        </Left>
        <Right>
          <Link to="/qlogin" style={{ textDecoration: "none" }}>
            <MenuItemSecond>Login</MenuItemSecond>
          </Link>
          <Link to="/qregister" style={{ textDecoration: "none" }}>
            <MenuItemFirst>Sign up</MenuItemFirst>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
