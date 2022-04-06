import { ArticleData } from "../../domain/Article";
import { TestArticleData } from "../../_data/article/test_article_data";
import { getApi } from "../api";

/**
 * 記事情報を外部サービスから取得するリポジトリ
 * リポジトリは resolve() を呼び出して生成する
 * 実装は外部に公開せずクライアントはインターフェースに依存する形で実装する
 */
export interface ArticleRepositoryInterface {
  all(): Promise<ArticleData[]>;
}

/**
 * ArticleRepositoryInterfaceの実装先を解決する
 * 開発環境： MockArticleRepository
 * 本番環境： ProductionArticleRepository
 */
export function resolve(): ArticleRepositoryInterface {
  if (process.env.NEXT_PUBLIC_ENVIRONMENT === "local") {
    return new MockArticleRepository();
  }

  return new ProductionArticleRepository();
}

/**
 * 開発環境用のArticleRepository
 * 外部サービスに接続しない
 */
class MockArticleRepository implements ArticleRepositoryInterface {
  async all(): Promise<ArticleData[]> {
    return TestArticleData;
  }
}

/**
 * 本番環境用のArticleRepository
 * 外部APIと通信する
 */
class ProductionArticleRepository implements ArticleRepositoryInterface {
  async all(): Promise<ArticleData[]> {
    const { state } = await getApi(
      process.env.NEXT_PUBLIC_API_ARTICLE_INDEX!,
      true
    );

    return state.data.list;
  }
}
