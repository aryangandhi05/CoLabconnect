import React, { Routes, Route } from "react-router-dom";
import "./mess.css";

import HomePage from "./Pages/HomePage";
import Chatpage from "./Pages/Chatpage";
import { VideoRoom } from "./compo/components/VideoRoom";
import { useState } from "react";
import VideoCall from "./compo/VideoCall";
import { SocketProvider } from "./Socket";

function Messag() {
  const [joined, setJoined] = useState(false);

  return (
    <>
      <div className="Mess">
        <SocketProvider>
          <Routes>
            <Route path="/messa" element={<HomePage />} />
            <Route path="/chats" element={<Chatpage />} />
            <Route path="/call/:id" element={<VideoCall />} />
          </Routes>
        </SocketProvider>
      </div>
    </>
  );
}

export default Messag;
