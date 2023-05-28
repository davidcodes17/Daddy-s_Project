import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import InputBoxx from "../components/InputBoxx";
import Checkboxx from "../components/Checkboxx";
import DCButton from "../components/DCButton";
const Form = () => {
  return (
    <Box
      fontFamily={"Georama"}
      boxShadow={"0px 2px 5px black"}
      p={5}
      borderRadius={20}
    >
      <Flex gap={5}>
        <Box
          width={20}
          my={2}
          borderRadius={40}
          height={2}
          bg={"darkorchid"}
        ></Box>
        <Box
          width={20}
          my={2}
          borderRadius={40}
          height={2}
          bg={"white"}
          cursor={"pointer"}
        ></Box>
        <Box
          width={20}
          my={2}
          borderRadius={40}
          height={2}
          bg={"white"}
          cursor={"pointer"}
        ></Box>
        <Box
          width={20}
          my={2}
          borderRadius={40}
          height={2}
          bg={"white"}
          cursor={"pointer"}
        ></Box>
      </Flex>
      <Heading color={"white"} fontWeight={"bolder"} fontSize={30}>
        Sign Up
      </Heading>
      <Flex>
        <Box>
          <Flex gap={10}>
            <InputBoxx section="Firstname" type="text" placeholder="Andrew" />
            <InputBoxx section="Surname" type="text" placeholder="Peter" />
          </Flex>
          <Flex gap={10}>
            <InputBoxx section="Other Names" type="text" placeholder="Moses" />
            <InputBoxx
              section="Date of Birth"
              type="date"
              placeholder="Peter"
            />
          </Flex>
          <Flex gap={10}>
            <InputBoxx
              section="Mobile Number"
              type="number"
              placeholder="+234"
            />
            <InputBoxx
              section="Date of Birth"
              type="email"
              placeholder="you@gmail.com"
            />
          </Flex>
          <Flex gap={10}>
            <InputBoxx
              section="Gender"
              type="text"
              placeholder="Male or Female"
            />
            <InputBoxx
              section="Occupation"
              type="text"
              placeholder="Data Analyst"
            />
          </Flex>
          <Flex pt={5} alignItems={"center"} gap={2} justifyContent={"center"}>
            <Box mt={2}>
              <Checkboxx />
            </Box>
            <Text noOfLines={2} color={"white"} fontSize={14}>
              I aggre to the terms and conditions of this form and its
              conditions
            </Text>
          </Flex>
          <Box>
            <DCButton />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Form;
