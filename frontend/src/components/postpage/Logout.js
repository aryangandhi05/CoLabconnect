import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./post";

const Logout = () => {
  //promises

  const { dispatch } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        dispatch({ type: "USER", payload: false });
        navigate("/home", { replace: true });
        if (res.status !== 200) {
          const error = new Error(res.statusText);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return <></>;
};

export default Logout;
