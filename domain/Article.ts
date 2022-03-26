import moment from "moment";
import { Category } from "./Category";

export interface ArticleData {
  readonly id: string;
  readonly type: number;
  readonly category: Category;
  readonly title: string;
  readonly content: string;
  readonly slug: string;
  readonly main_img_url?: string;
  readonly created_at: string;
  readonly updated_at?: string;
}

export interface ArticleDataList {
    readonly datalist: ArticleData[]
}

export class Article {
  readonly data: ArticleData;
  constructor(articleData: ArticleData) {
    this.data = articleData;
  }

  getArticleDate(): string {
    const date = this.isUpdatedArticle
      ? this.data.updated_at
      : this.data.created_at;

    return moment(date).format("YYYY.MM.DD");
  }

  getMainImgUrl(): string {
    const defaultMainImg = process.env.NEXT_PUBLIC_TEMP_DEFAULT_IMG_PATH;

    return this.hasMainImg ? this.data.main_img_url : defaultMainImg;
  }

  getPageUrl(): string {
    return "/" + this.data.category.slug + "/" + this.data.slug;
  }

  private isUpdatedArticle(): boolean {
    return this.data.updated_at !== null && this.data.updated_at !== "";
  }

  private hasMainImg(): boolean {
    const mainImg = this.data.main_img_url;

    return mainImg !== null && mainImg !== "";
  }
}

export const ArticleListFactory = (datalist: ArticleData[]): Article[] => {
    return datalist.map(data => ArticleFactory(data));
}

const ArticleFactory = (data: ArticleData): Article => {
    return new Article(data);
}
