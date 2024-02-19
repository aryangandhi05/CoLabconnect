import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Main from "./components/mainpage/main";
import Post from "./components/postpage/post";
import Search from "./components/searchpage/Search";
import Quizzie from "./components/quizpage/quiz";

import "./App.css";
import "./MApp.css";

import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <>
      <Main />
      <Post />
      <Search />

      <Provider store={store}>
        <PersistGate loading="null" persistor={persistor}>
          <Quizzie />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
