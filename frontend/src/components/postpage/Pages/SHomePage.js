import {
    Box,
    Container,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
  } from "@chakra-ui/react";
  import React, { useEffect } from "react";
  import { useNavigate } from "react-router";
  import Login from "../compo/Authentication/Login";
  import Signup from "../compo/Authentication/Signup";
  import Snav from "../../searchpage/Snav";
  import { ChakraProvider } from "@chakra-ui/react";
  
  function SHomepage() {
    const history = useNavigate();
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("userInfo"));
      if (user) history("/chats");
    }, [history]);
  
    return (
      <>
        <Snav />
        <ChakraProvider>
          <Container maxW="xl" centerContent>
            <Box
              d="flex"
              justifyContent="center"
              p={3}
              bg="white"
              w="100%"
              m="40px 0 15px 0"
              borderRadius="lg"
              borderWidth="1px"
            >
              <Text fontSize="4xl" fontFamily="Work sans">
                For Security Reasons Enter
              </Text>
            </Box>
            <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
              <Tabs isFitted variant="soft-rounded">
                <TabList mb="1em">
  
                  <Tab>Login</Tab>
                  <Tab>Sign Up</Tab>
  
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Login />
                  </TabPanel>
                  <TabPanel>
                    <Signup />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Container>
        </ChakraProvider>
      </>
    );
  }
  
  export default SHomepage;
  