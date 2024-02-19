import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Logout } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { logoutD } from "./redux/apiCalls";

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
const MenuItem1 = styled.button`
  font-size: 16px;
  cursor: pointer;
  background-color: #6564648c;
  color: #eeeeee;
  margin: 10px;
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  &:hover {
    background-color: #434242e7;
  }
`;
const MenuItem2 = styled.button`
  font-size: 16px;
  cursor: pointer;
  background-color: #6564648c;
  color: #eeeeee;
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  &:hover {
    background-color: #434242e7;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItemFirst = styled.div`
  width: 80px;
  margin-right: 8%;
  padding: 8px;
  cursor: pointer;
  color: #00000;
  &:hover {
    color: #434242e7;
  }
`;

const LoginNavbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    logoutD(dispatch);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/quiz" style={{ textDecoration: "none" }}>
            <Logo>Quizzie</Logo>
            {/*online exam maker*/}
          </Link>
          <Link to="/dashboard">
            <MenuItem1>Dashboard</MenuItem1>
          </Link>
          <Link to="/reports">
            <MenuItem2>Reports</MenuItem2>
          </Link>
        </Left>
        <Right>
          <Link
            to="/quiz"
            style={{ textDecoration: "none", marginRight: "10%" }}
          >
            <MenuItemFirst>
              <Logout
                style={{ verticalAlign: "middle" }}
                onClick={handleLogout}
              />{" "}
              Logout
            </MenuItemFirst>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default LoginNavbar;
