import { Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { SiteSetting } from "../../config/siteSetting";

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
            {SiteSetting.Title}
          </Text>
        </Link>
      </NextLink>
    </>
  );
};

export default Logo;
