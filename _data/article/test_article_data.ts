import { ArticleData } from "../../domain/Article";

/**
 * 開発環境で使用する記事のテストデータ
 * MockArticleRepository内で使用する
 */
export const TestArticleData: ArticleData[] = [
  {
    id: "test-1",
    type: 1,
    category: {
      id: "category-1",
      name: "PHP",
      slug: "php",
    },
    title: "TEST TITLE",
    content: "## content",
    slug: "test-1",
    main_img_url: "https://placehold.jp/940x500.png",
    created_at: "2022-03-01 00:00:00",
  },
  {
    id: "test-2",
    type: 1,
    category: {
      id: "category-1",
      name: "PHP",
      slug: "php",
    },
    title: "TEST TITLE 2",
    content: "## content2",
    slug: "test-2",
    main_img_url: "https://placehold.jp/940x500.png",
    created_at: "2022-03-01 00:00:00",
  },
  {
    id: "test-3",
    type: 1,
    category: {
      id: "category-1",
      name: "PHP",
      slug: "php",
    },
    title: "TEST TITLE 3",
    content: "## content3",
    slug: "test-3",
    main_img_url: "https://placehold.jp/940x500.png",
    created_at: "2022-03-01 00:00:00",
  },
  {
    id: "test-4",
    type: 1,
    category: {
      id: "category-1",
      name: "PHP",
      slug: "php",
    },
    title: "TEST TITLE 4",
    content: "## content4",
    slug: "test-4",
    main_img_url: "https://placehold.jp/940x500.png",
    created_at: "2022-03-01 00:00:00",
  },
];
