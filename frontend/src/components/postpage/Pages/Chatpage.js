import React from "react";
import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../compo/Chatbox";
import MyChats from "../compo/MyChats";
import SideDrawer from "../compo/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../Navbar";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <>
      <ChakraProvider>
        <div style={{ width: "100%" }}>
          {user && <SideDrawer />}
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              height: "91.5vh",
              padding: "10px",
            }}
          >
            {user && <MyChats fetchAgain={fetchAgain} />}
            {user && (
              <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
            )}
          </Box>
        </div>
      </ChakraProvider>
    </>
  );
};

export default Chatpage;
