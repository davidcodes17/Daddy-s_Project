import { Heading, Box, Flex } from "@chakra-ui/react";
import React from "react";
import Form from "../layouts/Form";
import "../styles/global.css";

const SignUp = () => {
  return (
    <Box bg={"#010e1b"} bgSize={"cover"} overflowY={"hidden"}>
      <Flex justifyContent={"center"} p={10}>
        <Form />
      </Flex>
    </Box>
  );
};

export default SignUp;
