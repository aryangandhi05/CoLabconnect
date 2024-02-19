import React, { createContext, useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import MyPosts from "./MyPosts";
import CreatePost from "./CreatePost";
import Homepage from "./Pages/HomePage";
import Login from "./Login";
import Logout from "./Logout";
import Signup from "./Signup";
import Errorpage from "./errorpage";
import EmailVerification from "./EmailVerification";

// import "../../App.css";
import { initialState, reducer } from "./UseReducer";

import Messag from "./Messag";
import ChatProvider from "./Context/ChatProvider";

// contextapi
const obj = {};
export const UserContext = createContext(obj);

const Routing = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/mypost" element={<MyPosts />} />
      <Route path="/createpost" element={<CreatePost />} />
      <Route path="/messa" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/errorpage" element={<Errorpage />} />
      <Route path="/verify/:token" element={<EmailVerification />} />
    </Routes>
  );
};
// const dispatch = useDispatch();
const Post = () => {
  //const UserProvider = ({Routing }) => {      // extra by me to tackle error
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Routing />
      </UserContext.Provider>

      {/* <ChatProvider>
        <Messag />
      </ChatProvider> */}
    </>
  );
};

export default Post;
