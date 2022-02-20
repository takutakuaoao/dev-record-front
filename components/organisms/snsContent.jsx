import { HStack, Link } from "@chakra-ui/react";
import IconFaceBook from "../atoms/IconFaceBook";
import IconGithub from "../atoms/IconGithub";
import IconTwitter from "../atoms/IconTwitter";
import NextLink from "next/link";

const SnsContent = () => {
  return (
    <HStack spacing={8}>
      <IconGithub href="https://github.com/takutakuaoao" size="3xl" />
      <IconTwitter href="https://twitter.com/aochan161" size="38px" />
      {/* <IconFaceBook href="" size="3xl" /> */}
    </HStack>
  );
};

export default SnsContent;
