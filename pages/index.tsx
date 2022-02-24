import { Box, Center, Flex } from "@chakra-ui/react";
import ArticleCard from "../components/organisms/article/articleCard";
import Header from "../components/organisms/header";
import Footer from "../components/organisms/footer";
import { GetStaticProps } from "next";
import { getApi } from "../api/api";
import moment from "moment";
import SiteHead from "../components/molecules/siteHead";

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface Article {
  id: string;
  type: number;
  category: Category;
  title: string;
  content: string;
  slug: string;
  main_img_url?: string;
  created_at: string;
  updated_at?: string;
}

interface Props {
  articles: Article[];
}

const Index: React.VFC<Props> = ({ articles }) => {
  return (
    <>
      <SiteHead />
      <Header />
      <Box color={"gray.700"}>
        <Center py={12}>
          <Box maxW={"940px"} letterSpacing={0.8}>
            <Flex justify="space-around" flexWrap="wrap" alignItems="stretch">
              {articles.map((article) => {
                const formattedDate = moment(
                  article.updated_at === null
                    ? article.created_at
                    : article.updated_at
                ).format("YYYY.MM.DD");

                const mainImgUrl = (article.main_img_url === null || article.main_img_url === "") ? process.env.NEXT_PUBLIC_TEMP_DEFAULT_IMG_PATH : article.main_img_url!;

                return (
                  <Box w="47%" boxShadow="lg" mb={8} key={article.id}>
                    <ArticleCard
                      date={formattedDate}
                      imgPath={mainImgUrl}
                      category={article.category.name}
                      title={article.title}
                      pageUrl={"/" + article.category.slug + "/" + article.slug}
                    />
                  </Box>
                );
              })}
            </Flex>
          </Box>
        </Center>
      </Box>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { state } = await getApi(
    process.env.NEXT_PUBLIC_API_ARTICLE_INDEX!,
    true
  );

  return {
    props: { articles: state.data.list },
  };
};

export default Index;
