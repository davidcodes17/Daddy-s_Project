import { Button } from "@chakra-ui/react";
import React from "react";

const DCButton = () => {
  const actionBtn = () => {
    alert("You Just Passed The First Stage");
  };
  return (
    <Button
      onClick={actionBtn}
      width={"100%"}
      bg={"darkorchid"}
      py={2}
      borderRadius={10}
      fontWeight={"bold"}
      color={"white"}
      my={2}
    >
      Sign Up
    </Button>
  );
};

export default DCButton;
