import React from 'react'
import { Container, Box, Text,Tab,TabList, TabPanel, TabPanels,Tabs} from "@chakra-ui/react"
import Login from "../components/Autentication/Login"
import Signup from "../components/Autentication/Signup"

const Homepage = () => {
  return <Container maxW='x1' centerContent>
    <Box
    d='flex'
    justifyContent="center"
    textAlign="center"
    p={3}
    bg={"white"}
    w="40%"
    m="40px 0 15px 0"
    borderRadius="lg"
    borderWidth="3px"
    borderColor="black"
    >
<Text fontSize='4xl' fontFamily="work sans"> ChatVista  </Text>
    </Box>

    <Box bg="white" w="40%" p={4} borderRadius="lg"
      borderWidth="3px" borderColor="black">
      <Tabs variant='soft-rounded' >
      <TabList mb="1em">
        <Tab width="50%">Login</Tab>
        <Tab width="50%">Sign Up</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
           <Login/>
        </TabPanel>
        <TabPanel>
          <Signup/>
        </TabPanel>
      </TabPanels>
    </Tabs>
    </Box>
    </Container>
  
}

export default Homepage
