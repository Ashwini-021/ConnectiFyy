import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <>
      <Container minW="100%" m="0" p="0" color="white">
        <Box
          w="100%"
          borderRadius="lg"
          mb={10}
          mt={1}
          display="block"
          pl={65}
          pr={5}
          position="sticky"
          top={0}
          zIndex={999}
        >
          <Flex justifyContent="space-between" alignItems="center">
            <Text
              fontSize="4xl"
              fontFamily="Work sans"
              color="white"
              fontWeight="bold"
            >
              ConnectiFy
            </Text>
            <Flex alignItems="center" margin="20px" justifyContent="space-between">
              <Link to="/About" style={{ marginRight: "14px", color: "white" }}>
                About
              </Link>
              <Link to="/Signup" style={{ marginRight: "14px", color: "blue" }}>
                SignUp
              </Link>
              <Link to="/Login" style={{ marginRight: "14px", color: "white" }}>
                Login
              </Link>
              <Link href="#" style={{ color: "white", marginRight: "14px" }}>
                Externals
              </Link>
            </Flex>
          </Flex>
        </Box>
        <Container maxW="md" marginRight="30px">
          <Box w="100%" p={2} borderRadius="lg">
            <Tabs isFitted position="relative" variant="unstyled" fontWeight="40px">
              <TabList mb="15px">
                <Tab margin="5px" style={{ fontSize: "30px", fontWeight: "bold" }}>
                  <b>Register Here</b>
                </Tab>
                {/* <Tab>Login</Tab> */}
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Signup />
                </TabPanel>
                {/* <TabPanel>
                  <Login />
                </TabPanel> */}
              </TabPanels>
            </Tabs>
          </Box>
        </Container>
      </Container>
    </>
  );
}

export default Homepage;
