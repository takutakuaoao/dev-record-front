import { Text } from "@chakra-ui/react";
import Link from "next/link";
import NextLink from "next/link";

const Logo = (props) => {
  const { size } = props;
  return (
    <>
      <NextLink href="/" passHref>
        <Link>
          <Text
            fontSize={size}
            fontWeight="bold"
            letterSpacing={1.5}
            color="white"
            fontFamily={"Teko, sans-serif"}
            cursor="pointer"
          >
            .Dev.Record
          </Text>
        </Link>
      </NextLink>
    </>
  );
};

export default Logo;
