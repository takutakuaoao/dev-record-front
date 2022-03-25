import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { getApi } from "../../api/api";
import markdownTheme from "../../config/markdownTheme";
import moment from "moment";
import Header from "../../components/organisms/header";
import Subject from "../../components/organisms/article/subject";
import FullImage from "../../components/atoms/fullImage";
import { Box, Center } from "@chakra-ui/react";
import Content from "../../components/organisms/article/content";
import Footer from "../../components/organisms/footer";

import { unified, UsePlugin } from "unified";
import parser from "remark-parse";
import remarkDirective from "remark-directive";
import toHast from "remark-rehype";
import compiler from "rehype-react";
import React from "react";
import { visit } from "unist-util-visit";
import SiteHead from "../../components/molecules/siteHead";

// interface Category {
//   id: string;
//   name: string;
//   slug: string;
// }

// interface Article {
//   id: string;
//   type: number;
//   category: Category;
//   title: string;
//   content: string;
//   slug: string;
//   main_img_url?: string;
//   created_at: string;
//   updated_at?: string;
// }

// interface Params extends ParsedUrlQuery {
//   categorySlug: string;
//   articleSlug: string;
// }

// interface Props {
//   article: Article;
// }

const Article = ({ article }) => {
  const processor = unified()
    .use(parser)
    .use(remarkDirective)
    .use(myRemarkPlugin)
    .use(toHast)
    .use(compiler, {
      createElement: React.createElement,
      components: markdownTheme,
    });

  const formattedDate = moment(
    article.updated_at === null ? article.created_at : article.updated_at
  ).format("YYYY.MM.DD");

  const pageTitle = article.title + " | " + process.env.NEXT_PUBLIC_SITE_TITLE;

  const pageDescription =
    article.content.length > 150
      ? (article.content.substr(0, 150) + "...").replace(/\r?\n/g, "")
      : article.content.replace(/\r?\n/g, "");

  const pageUrl =
    process.env.NEXT_PUBLIC_SITE_URL +
    "/" +
    article.category.slug +
    "/" +
    article.slug;

  const mainImgUrl =
    article.main_img_url === null || article.main_img_url === ""
      ? process.env.NEXT_PUBLIC_TEMP_DEFAULT_IMG_PATH
      : article.main_img_url;

  return (
    <>
      <SiteHead title={pageTitle} description={pageDescription} url={pageUrl} />
      <Header />
      <Box color={"gray.700"}>
        <Box py={[4, 12]} px={[2, 0]} display={["block", "flex"]} justifyContent={["normal", "center"]}>
          <Box maxW={"940px"} letterSpacing={0.8}>
            <Box mb={[4, 12]}>
              <Subject
                category={article.category.name}
                id={article.id}
                title={article.title}
                date={formattedDate}
              />
            </Box>
            <Box mb={[6, 12]}>
              <FullImage src={mainImgUrl} />
            </Box>
            <Content>{processor.processSync(article.content).result}</Content>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

function myRemarkPlugin(): import('unified').Transformer {
  return (tree) => {
    visit(tree, (node: any) => {
      if (node.type === "inlineCode") {
        const data = node.data || (node.data = {});
        data.hProperties = { inline: true };
      }

      if (
        node.type === "textDirective" ||
        node.type === "leafDirective" ||
        node.type === "containerDirective"
      ) {
        if (
          node.name === "info" ||
          node.name === "memo" ||
          node.name === "alert" ||
          node.name === "wrap" ||
          node.name === "m"
        ) {
          const data = node.data || (node.data = {});
          const tagName = node.name;

          data.hName = tagName;
          data.hProperties = { attributes: node.attributes };
        }

        return;
      }
    });
  };
}

export const getStaticProps = async ({ params }) => {
  const apiUri =
    process.env.NEXT_PUBLIC_API_ARTICLE_INDEX +
    "/" +
    params.categorySlug +
    "/" +
    params.articleSlug;
  const { state } = await getApi(apiUri, true);

  return {
    props: { article: state.data.item },
  };
};

export const getStaticPaths = async () => {
  const { state } = await getApi(
    process.env.NEXT_PUBLIC_API_ARTICLE_INDEX,
    true
  );

  const allParams = state.data.list.map((article) => {
    return {
      params: {
        categorySlug: article.category.slug,
        articleSlug: article.slug,
      },
    };
  });

  return {
    paths: allParams,
    fallback: false,
  };
};

export default Article;
