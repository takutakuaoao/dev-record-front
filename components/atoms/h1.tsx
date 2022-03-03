import { Heading } from "@chakra-ui/react";
import React from "react";

const H1 = ({ children }: { children: React.ReactNode }) => {
  return (
    <Heading fontSize={"3xl"} lineHeight={1.5} letterSpacing={2}>
      {children}
    </Heading>
  );
};

export default H1;
