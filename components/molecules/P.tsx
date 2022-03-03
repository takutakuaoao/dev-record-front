import { Text } from "@chakra-ui/react";
import React from "react";

const P = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text fontSize={"md"} lineHeight={2}>
      {children}
    </Text>
  );
};

export default P;
