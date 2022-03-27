import { Box, Center } from "@chakra-ui/react";
import H1 from "../../components/atoms/h1";
import SiteHead from "../../components/molecules/siteHead";
import Footer from "../../components/organisms/footer";
import Header from "../../components/organisms/header";
import markdownTheme from "../../config/markdownTheme";
import { SiteSetting } from "../../config/siteSetting";

const SITE_TITLE = SiteSetting.Title;
const ESTABLISHMENT_DATE = SiteSetting.PrivacyPolicyEstablishmentDate;

const Index: React.VFC = () => {
  const title = "プライバシーポリシー | " + process.env.NEXT_PUBLIC_SITE_TITLE!;
  const description = "プライバシーポリシーのページ";
  const url = process.env.NEXT_PUBLIC_SITE_URL! + "/privacy-policy";

  return (
    <>
      <SiteHead title={title} description={description} url={url} />
      <Header />
      <ContentArea />
      <Footer />
    </>
  );
};

const ContentArea = () => {
  return (
    <Box color={"gray.700"}>
      <Center py={12}>
        <Box maxW={"940px"} letterSpacing={0.8} px={[2, 0]}>
          <markdownTheme.h2>
            <H1>{SITE_TITLE} プライバシーポリシー</H1>
          </markdownTheme.h2>
          <markdownTheme.p>
            {SITE_TITLE}
            (以下「当ブログ」)のプライバシーポリシー・免責事項を次の通り記載します。
          </markdownTheme.p>

          <markdownTheme.h3>個人情報の利用目的について</markdownTheme.h3>
          <markdownTheme.p>
            当ブログでは、お問い合わせやコメント投稿の際に氏名・メールアドレス等の個人情報を入力いただく場合があります。
            取得した個人情報は、必要な連絡のみに利用させていただくもので、これらの目的以外では利用いたしません。
          </markdownTheme.p>

          <markdownTheme.h3>個人情報の第三者開示について</markdownTheme.h3>
          <markdownTheme.p>
            取得した個人情報は適切に管理し、以下に該当する場合を除いて第三者に開示することはありません。
            <markdownTheme.ul ordered depth={1}>
              <li>本人の同意が得られた場合</li>
              <li>法令により開示が求められた場合</li>
            </markdownTheme.ul>
          </markdownTheme.p>

          <markdownTheme.h3>Cookieの使用について</markdownTheme.h3>
          <markdownTheme.p>
            当ブログでは、広告配信やアクセス解析のためにCookieを使用しています。
            Cookieによりブラウザを識別していますが、特定の個人の識別はできない状態で匿名性が保たれています。
            Cookieの使用を望まない場合、ブラウザからCookieを無効に設定できます。
          </markdownTheme.p>

          <markdownTheme.h3>広告配信サービスについて</markdownTheme.h3>
          <markdownTheme.p>
            当ブログでは、第三者配信の広告サービスを利用して広告を掲載しています。
            第三者配信事業者は、ユーザーの興味に応じたパーソナライズ広告を表示するためにCookieを使用しています。
            パーソナライズ広告は、
            <markdownTheme.a href="https://adssettings.google.com/authenticated">
              広告設定
            </markdownTheme.a>
            で無効にできます。また、
            <markdownTheme.a href="https://optout.aboutads.info/?c=2&lang=EN">
              www.aboutads.info
            </markdownTheme.a>
            で第三者配信事業者のCookieを無効にすることができます。
            Amazonのアソシエイトとして、[ブログ名を記載]は適格販売により収入を得ています。
          </markdownTheme.p>

          <markdownTheme.h3>アクセス解析ツールについて</markdownTheme.h3>
          <markdownTheme.p>
            当ブログでは、Googleアナリティクスによりアクセス情報を解析しています。
            アクセス情報の解析にはCookieを使用しています。また、アクセス情報の収集はCookieを無効にすることで拒否できます。
            Google社のデータ収集・処理の仕組みについては、
            <markdownTheme.a href="https://policies.google.com/technologies/partner-sites?hl=ja">
              こちら
            </markdownTheme.a>
            をご覧ください。
          </markdownTheme.p>

          <markdownTheme.h3>免責事項</markdownTheme.h3>
          <markdownTheme.p>
            当ブログは、掲載内容によって生じた損害に対する一切の責任を負いません。
            各コンテンツでは、できる限り正確な情報提供を心がけておりますが、正確性や安全性を保証するものではありません。
            また、リンク先の他サイトで提供される情報・サービスについても、責任を負いかねますのでご了承ください。
          </markdownTheme.p>

          <markdownTheme.h3>著作権</markdownTheme.h3>
          <markdownTheme.p>
            当ブログに掲載されている文章・画像の著作権は、運営者に帰属しています。
            法的に認められている引用の範囲を超えて、無断で転載することを禁止します。
          </markdownTheme.p>

          <markdownTheme.h3>プライバシーポリシーの変更</markdownTheme.h3>
          <markdownTheme.p>
            当ブログは、個人情報に関して適用される日本の法令を遵守するとともに、本プライバシーポリシーの内容を適宜見直して改善に努めます。
            修正された最新のプライバシーポリシーは常に本ページにて開示されます
          </markdownTheme.p>

          <markdownTheme.p>制定日:{ESTABLISHMENT_DATE}</markdownTheme.p>

          <markdownTheme.p>
            <markdownTheme.m>{SITE_TITLE}</markdownTheme.m>
          </markdownTheme.p>
        </Box>
      </Center>
    </Box>
  );
};

export default Index;
