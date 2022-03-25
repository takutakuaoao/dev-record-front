import Logo from "../atoms/logo";
import { Box, Center, Flex, HStack, Link } from "@chakra-ui/react";
import Define from "../molecules/define";
import SnsContent from "./snsContent";
import NextLink from "next/link";

const Header = () => {
  return (
    <Center h="80px" bgColor="gray.900" color={"white"}>
      <Flex maxWidth="1200px" w="100%" justify="space-between" px={[4, 0]}>
        <Box>
          <Logo size="3xl" />
        </Box>
        {/* <LinkContent /> */}
        <SnsContent />
      </Flex>
    </Center>
  );
};

const LinkContent = () => {
  return (
    <HStack spacing={12} mr={12}>
      <Link>
        <Define main="POPULAR" sub="人気記事" />
      </Link>
      <Link>
        <Define main="CATEGORY" sub="カテゴリ" />
      </Link>
      <Link>
        <Define main="PROFILE" sub="プロフィール" />
      </Link>
      <Link>
        <Define main="Contact" sub="お問い合わせ" />
      </Link>
    </HStack>
  );
};

export default Header;
