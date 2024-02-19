import React from "react";
import "../../MApp.css";
import Mnavbar from "./mnav";
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";
import Footer from "../mainpage/footer";

function Mhelp() {
  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to our website",
      trigger: "Ask Name",
    },
    {
      id: "Ask Name",
      message: "Please enter your Name",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hi {previousValue}, Please select your issue related topic",
      trigger: "issues",
    },
    {
      id: "issues",
      options: [
        { value: "Post", label: "Post", trigger: "Post" },
        { value: "Search", label: "Search", trigger: "Search" },
      ],
    },

    {
      id: "Post",
      message: "Thanks for your query.",
      trigger: "line1",
    },
    {
      id: "line1",
      message: "Following are the steps to follow",
      trigger: "line2",
    },
    {
      id: "line2",
      message:
        "Go to Post an opportunity -> Signup -> Login -> Create Post -> My Posts -> Messages",
      end: true,
    },

    {
      id: "Search",
      message: "Thanks for your query.",
      trigger: "line3",
    },
    {
      id: "line3",
      message: "Following are the steps to follow",
      trigger: "line4",
    },
    {
      id: "line4",
      message:
        "Go to Need an opportunity -> Signup -> Login -> Search Posts -> Contact",
      end: true,
    },
  ];

  return (
    <>
      <Mnavbar />
      <div className="chatbot">
        <Segment floated="right">
          <ChatBot steps={steps} />
        </Segment>
      </div>
      <Footer />
    </>
  );
}

export default Mhelp;
