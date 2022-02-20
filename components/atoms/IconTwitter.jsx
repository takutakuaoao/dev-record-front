import { Icon, Link } from "@chakra-ui/react";
import { AiFillTwitterCircle } from "react-icons/ai";
import NextLink from "next/link";

const IconTwitter = (props) => {
  const { size, href } = props;
  return (
    <NextLink href={href} passHref>
      <Link isExternal>
        <Icon as={AiFillTwitterCircle} fontSize={size} color="white" />
      </Link>
    </NextLink>
  );
};

export default IconTwitter;
