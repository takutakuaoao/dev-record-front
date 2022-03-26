import { Box, Center, Flex } from "@chakra-ui/react";
import ArticleCard from "../components/organisms/article/articleCard";
import Header from "../components/organisms/header";
import Footer from "../components/organisms/footer";
import { GetStaticProps } from "next";
import { getApi } from "../api/api";
import SiteHead from "../components/molecules/siteHead";
import { Article, ArticleData, ArticleDataList, ArticleListFactory } from "../domain/Article";

interface Props {
  articles: Article[];
}

const Index: React.VFC<ArticleDataList> = ({ datalist }) => {
  const articles = ArticleListFactory(datalist);
  return (
    <>
      <SiteHead />
      <Header />
      <ContentArea articles={articles} />
      <Footer />
    </>
  );
};

const ContentArea: React.VFC<Props> = ({ articles }) => {
  return (
    <Box color={"gray.700"}>
      <Center py={12}>
        <Box maxW={"940px"} letterSpacing={0.8} px={[4, 0]}>
          <Flex justify="space-around" flexWrap="wrap" alignItems="stretch">
            <ArticleList articles={articles} />
          </Flex>
        </Box>
      </Center>
    </Box>
  );
};

const ArticleList: React.VFC<Props> = ({ articles }) => {
  return <>{articles.map(MakeArticleCard)}</>;
};

const MakeArticleCard = (article: Article): React.ReactElement => {
  return (
    <Box w={["100%", "47%"]} boxShadow="lg" mb={8} key={article.data.id}>
      <ArticleCard
        date={article.getArticleDate()}
        imgPath={article.getMainImgUrl()}
        category={article.data.category.name}
        title={article.data.title}
        pageUrl={article.getPageUrl()}
      />
    </Box>
  );
};

export const getStaticProps: GetStaticProps<ArticleDataList> = async () => {
  const articleDataList = await FetchArticleListFromApi();

  return {
    props: {
      datalist: articleDataList,
    },
  };
};

const FetchArticleListFromApi = async (): Promise<ArticleData[]> => {
  const { state } = await getApi(
    process.env.NEXT_PUBLIC_API_ARTICLE_INDEX!,
    true
  );

  return state.data.list;
};

export default Index;
