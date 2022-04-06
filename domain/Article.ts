import moment from "moment";
import markdownTheme from "../config/markdownTheme";
import { Category } from "./Category";
import { unified, UsePlugin } from "unified";
import parser from "remark-parse";
import remarkDirective from "remark-directive";
import toHast from "remark-rehype";
import compiler from "rehype-react";
import { visit } from "unist-util-visit";
import React from "react";

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
  readonly datalist: ArticleData[];
}

export interface ArticleUrlParam {
  readonly categorySlug: string;
  readonly articleSlug: string;
}

export class Article {
  readonly data: ArticleData;
  constructor(articleData: ArticleData) {
    this.data = articleData;
  }

  getUrlParam(): ArticleUrlParam {
    return {
      categorySlug: this.data.category.slug,
      articleSlug: this.data.slug,
    };
  }

  getArticleDate(): string {
    const date = this.isUpdatedArticle()
      ? this.data.updated_at
      : this.data.created_at;

    return moment(date).format("YYYY.MM.DD");
  }

  getMainImgUrl(): string {
    const defaultMainImg = process.env.NEXT_PUBLIC_TEMP_DEFAULT_IMG_PATH;

    return this.hasMainImg() ? this.data.main_img_url : defaultMainImg;
  }

  getPageUrl(): string {
    return "/" + this.data.category.slug + "/" + this.data.slug;
  }

  getHeadTitle(): string {
    const siteTitle = process.env.NEXT_PUBLIC_SITE_TITLE;

    return this.data.title + " | " + siteTitle;
  }

  getPageDescription(): string {
    return this.data.content.length > 150
      ? (this.data.content.substr(0, 150) + "...").replace(/\r?\n/g, "")
      : this.data.content.replace(/\r?\n/g, "");
  }

  parseMarkdown(): any {
    const processor = this.getProcessorMarkdownParser();
    const parsedMarkdown = processor.processSync(this.data.content).result;

    return parsedMarkdown;
  }

  private getProcessorMarkdownParser(): UsePlugin {
    return unified()
      .use(parser)
      .use(remarkDirective)
      .use(this.addCustomizeGrammar)
      .use(toHast)
      .use(compiler, {
        createElement: React.createElement,
        components: markdownTheme,
      });
  }

  private addCustomizeGrammar(): import("unified").Transformer {
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

  private isUpdatedArticle(): boolean {
    return this.data.updated_at !== null && this.data.updated_at !== "";
  }

  private hasMainImg(): boolean {
    const mainImg = this.data.main_img_url;

    return mainImg !== null && mainImg !== "";
  }
}

export const CreateArticleURL = (domain: string, articleParam: ArticleUrlParam): string => {
  return domain + "/" + articleParam.categorySlug + "/" + articleParam.articleSlug;
}

export const ArticleListFactory = (datalist: ArticleData[]): Article[] => {
  return datalist.map((data) => ArticleFactory(data));
};

export const ArticleFactory = (data: ArticleData): Article => {
  return new Article(data);
};
