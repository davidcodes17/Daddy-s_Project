import { Box, Input, Text } from "@chakra-ui/react";
import React from "react";

const InputBoxx = (props) => {
  return (
    <Box>
      <Text color={"white"} py={2}>
        {props.section}
      </Text>
      <Input
        type={props.type}
        outline={"none"}
        fontSize={15}
        placeholder={"e.g  " + props.placeholder}
        borderRadius={10}
        px={2}
        py={1.5}
      />
    </Box>
  );
};

export default InputBoxx;
