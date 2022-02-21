import Head from "next/head";

interface Props {
  title?: string;
  description?: string;
  url?: string;
  imageUrl?: string;
}

const SiteHead: React.VFC<Props> = ({
  title = process.env.NEXT_PUBLIC_SITE_TITLE!,
  description = "WEB開発における情報を発信するブログ",
  url = process.env.NEXT_PUBLIC_SITE_URL!,
  imageUrl = process.env.NEXT_PUBLIC_TEMP_DEFAULT_IMG_PATH,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description"></meta>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:site_name" content={title} />
        <meta property="og:locale" content="ja_JP" />
        <meta name="twitter:card" content="Summary with Large Image" />
        <meta name="twitter:site" content="@aochan161" />
      </Head>
    </>
  );
};

export default SiteHead;
