import { Text } from "@chakra-ui/react";
import React from "react";

const P = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text fontSize={["sm", "md"]} lineHeight={[1.8, 2]}>
      {children}
    </Text>
  );
};

export default P;
