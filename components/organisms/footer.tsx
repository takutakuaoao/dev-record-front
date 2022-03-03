import {
  Box,
  Center,
  Flex,
  HStack,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import Logo from "../atoms/logo";
import SnsContent from "./snsContent";
import NextLink from "next/link";

const Footer = () => {
  return (
    <Center bgColor="gray.900">
      <Flex
        maxWidth="1050px"
        w="100%"
        alignItems="flex-start"
        py={8}
        justifyContent="space-between"
      >
        <HStack flexDir="column">
          <Box mb={4}>
            <Logo size="4xl" />
          </Box>
          <SnsContent />
        </HStack>
        <List listStyleType="none" color="white" spacing={2} fontSize={"xs"}>
          <ListItem>
            <NextLink href="/" passHref>
              <Link>ホーム</Link>
            </NextLink>
          </ListItem>
          {/* <ListItem>
            <Link>このサイトについて</Link>
          </ListItem> */}
          {/* <ListItem>
            <Link>サイトマップ</Link>
          </ListItem> */}
          <ListItem>
            <NextLink href="/privacy-policy" passHref>
              <Link>プライバシーポリシー</Link>
            </NextLink>
          </ListItem>
        </List>
      </Flex>
    </Center>
  );
};

export default Footer;
