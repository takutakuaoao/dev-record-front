import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { getApi } from "../../api/api";
import Header from "../../components/organisms/header";
import Subject from "../../components/organisms/article/subject";
import FullImage from "../../components/atoms/fullImage";
import { Box } from "@chakra-ui/react";
import Content from "../../components/organisms/article/content";
import Footer from "../../components/organisms/footer";

import React from "react";
import SiteHead from "../../components/molecules/siteHead";
import {
  Article,
  ArticleData,
  ArticleFactory,
  ArticleListFactory,
  ArticleUrlParam,
  CreateArticleURL,
} from "../../domain/Article";

interface Params extends ParsedUrlQuery {
  categorySlug: string;
  articleSlug: string;
}

interface Props {
  articleData: ArticleData;
}

const ArticlePage: React.VFC<Props> = ({ articleData }) => {
  const article = ArticleFactory(articleData);

  return (
    <>
      <SiteHead
        title={article.getHeadTitle()}
        description={article.getPageDescription()}
        url={article.getPageUrl()}
      />
      <Header />
      <ContentArea article={article} />
      <Footer />
    </>
  );
};

const ContentArea: React.VFC<{ article: Article }> = ({ article }) => {
  return (
    <Box color={"gray.700"}>
      <Box
        py={[4, 12]}
        px={[2, 0]}
        display={["block", "flex"]}
        justifyContent={["normal", "center"]}
      >
        <Box maxW={"940px"} letterSpacing={0.8}>
          <ArticleContent article={article} />
        </Box>
      </Box>
    </Box>
  );
};

const ArticleContent: React.VFC<{ article: Article }> = ({ article }) => {
  return (
    <>
      <Box mb={[4, 12]}>
        <Subject
          category={article.data.category.name}
          id={article.data.id}
          title={article.data.title}
          date={article.getArticleDate()}
        />
      </Box>
      <Box mb={[6, 12]}>
        <FullImage src={article.getMainImgUrl()} />
      </Box>
      <Content>{article.parseMarkdown()}</Content>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const articleData = await FetchArticleDataFromApi(params);

  return {
    props: { articleData: articleData },
  };
};

export const getStaticPaths = async () => {
  const articles = await FetchAllPublicArticlesFromApi();
  const allParams = articles.map(CreateArticleParam);

  return {
    paths: allParams,
    fallback: false,
  };
};

const CreateArticleParam = (article: Article): { params: ArticleUrlParam } => {
  return { params: article.getUrlParam() };
};

const FetchArticleDataFromApi = async (
  param: ArticleUrlParam
): Promise<ArticleData> => {
  const apiBaseArticleUri = process.env.NEXT_PUBLIC_API_ARTICLE_INDEX;
  const apiUri = CreateArticleURL(apiBaseArticleUri, param);
  const { state } = await getApi(apiUri, true);

  return state.data.item;
};

const FetchAllPublicArticlesFromApi = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_ARTICLE_INDEX;
  const { state } = await getApi(apiUrl, true);

  return ArticleListFactory(state.data.list);
};

export default ArticlePage;
