import { Box, Link } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";

interface Props {
  date: string;
  imgPath: string;
  title: string;
  pageUrl: string;
  category: string;
}

/**
 * カード型の記事コンポーネント
 */
const ArticleCard: React.VFC<Props> = ({
  date,
  imgPath,
  title,
  pageUrl,
  category,
}) => {
  return (
    <Box width="100%" _hover={{ opacity: 0.7 }}>
      <NextLink href={pageUrl} passHref prefetch={false}>
        <Link _hover={{ textDecoration: null }}>
          <ArticleImage src={imgPath} alt={title} category={category} />
          <ArticleHeading date={date} title={title} />
        </Link>
      </NextLink>
    </Box>
  );
};

/**
 * 画像部分
 */
const ArticleImage: React.VFC<{
  src: string;
  alt: string;
  category: string;
}> = ({ src, alt, category }) => {
  return (
    <Box pos="relative">
      <Image src={src} alt={alt} width="940" height="500" />
      <Box
        pos="absolute"
        left="-1"
        top="-1"
        borderWidth={2}
        borderColor="white"
      >
        <Category category={category} />
      </Box>
    </Box>
  );
};

/**
 * カテゴリ表記
 */
const Category: React.VFC<{ category: string }> = ({ category }) => {
  return (
    <Box px={4} py={2} bgColor="gray.800" color="white" fontWeight="bold">
      {category}
    </Box>
  );
};

/**
 * 記事情報部分（タイトルと日付）
 */
const ArticleHeading: React.VFC<{ date: string; title: string }> = ({
  date,
  title,
}) => {
  return (
    <Box px={2} py={4}>
      <Box color="gray.800" mb={2} fontSize="sm">
        {date}
      </Box>
      <Box color="gray.800" fontWeight="bold" fontSize="lg">
        {title}
      </Box>
    </Box>
  );
};

export default ArticleCard;
