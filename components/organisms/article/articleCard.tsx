import { Box, Link, textDecoration } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

interface Props {
  date: string;
  imgPath: string;
  title: string;
  pageUrl: string;
  category: string;
}

const ArticleCard: React.VFC<Props> = ({
  date,
  imgPath,
  title,
  pageUrl,
  category,
}) => {
  return (
    <Box width="100%" _hover={{ opacity: 0.7 }}>
      <NextLink href={pageUrl} passHref>
        <Link _hover={{ textDecoration: null }}>
          <Box pos="relative">
            <Image src={imgPath} alt={title} width="940" height="500" />
            <Box
              px={4}
              py={2}
              bgColor="gray.800"
              color="white"
              fontWeight="bold"
              pos="absolute"
              left="-1"
              top="-1"
              borderWidth={2}
              borderColor="white"
            >
              {category}
            </Box>
          </Box>
          <Box px={2} py={4}>
            <Box color="gray.800" mb={2} fontSize="sm">
              {date}
            </Box>
            <Box color="gray.800" fontWeight="bold" fontSize="lg">
              {title}
            </Box>
          </Box>
        </Link>
      </NextLink>
    </Box>
  );
};

export default ArticleCard;
