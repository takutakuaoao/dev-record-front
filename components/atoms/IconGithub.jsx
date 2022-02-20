import { Icon, Link } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import NextLink from "next/link";

const IconGithub = (props) => {
  const { size, href } = props;
  return (
    <NextLink href={href} passHref>
      <Link isExternal>
        <Icon as={BsGithub} fontSize={size} color="white" />
      </Link>
    </NextLink>
  );
};

export default IconGithub;
