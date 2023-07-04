import { NextPage } from 'next';
import { useRouter } from "next/router";
import Link from 'next/link';
import Image from 'next/image';

import PageHead from 'components/PageHead/PageHead'
import { BreadList } from 'components/BreadList/BreadList'

import { parseISO, format } from 'date-fns'
import ja from 'date-fns/locale/ja'

// Wordpress graphql
import { getPreviewPostBySlug } from "lib/wpapi";
import { getPreviewAllPosts } from "lib/wpapi";

// date-fns
function Date({ dateString }) {
  return <time dateTime={dateString}>{format(parseISO(dateString), 'yyyy.MM.dd (EEEE)', {locale:ja} )} に書きました</time>
};

export async function getStaticPaths() {

  const allPosts = await getPreviewAllPosts();

  console.log("===========SLUG==========");
  console.log(allPosts[0].slug);

  const paths = allPosts.map((content) => ({
    params: {
      slug: String(content.slug),
    }
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {

  const post = await getPreviewPostBySlug(context.params['slug']);

  console.log("[[[ POST ]]]");
  console.log(post[0]);
  console.log("[[[]]]");
  console.log("[[[]]]");
  console.log("[[[]]]");
  console.log("[[[]]]");
  console.log("[[[]]]");

  const title = post[0].title.rendered;
  const slug = post[0].slug;
  const publishDate = post[0].date;
  const content = post[0].content.rendered;

  const eyecatch_url = (post[0]['_embedded']['wp:featuredmedia'] !== undefined) ? post[0]['_embedded']['wp:featuredmedia'][0]['source_url'] : "";
  const eyecatch_altText = (post[0]['_embedded']['wp:featuredmedia'] !== undefined) ? post[0]['_embedded']['wp:featuredmedia'][0]['alt_text'] : "";
  const eyecatch_height = (post[0]['_embedded']['wp:featuredmedia'] !== undefined) ? post[0]['_embedded']['wp:featuredmedia'][0]['media_details']['width'] : "660";
  const eyecatch_width = (post[0]['_embedded']['wp:featuredmedia'] !== undefined) ? post[0]['_embedded']['wp:featuredmedia'][0]['media_details']['height'] : "660";

  // const eyecatch_url = post[0]['_embedded']['wp:featuredmedia'][0]['source_url'];
  // const eyecatch_altText = post[0]['_embedded']['wp:featuredmedia'][0]['alt_text'];
  // const eyecatch_height = post[0]['_embedded']['wp:featuredmedia'][0]['media_details']['width'];
  // const eyecatch_width = post[0]['_embedded']['wp:featuredmedia'][0]['media_details']['height'];

  console.log("[[[title]]]");
  console.log(title);
  console.log("[[[slug]]]");
  console.log(slug);
  console.log("[[[publishDate]]]");
  console.log(publishDate);
  console.log("[[[content]]]");
  console.log(content);
  console.log("[[[eyecatch_url]]]");
  console.log(eyecatch_url);
  console.log("[[[eyecatch_altText]]]");
  console.log(eyecatch_altText);
  console.log("[[[eyecatch_height]]]");
  console.log(eyecatch_height);
  console.log("[[[eyecatch_width]]]");
  console.log(eyecatch_width);

  // Yoast SEO
  const yoast_description = post[0].yoast_head_json.description;

  console.log("[[[yoast_description]]]");
  console.log(yoast_description);

  return {
    props: {
      title,
      slug,
      publishDate,
      content,
      eyecatch_url: eyecatch_url ?? "",
      eyecatch_altText: eyecatch_altText ?? "",
      eyecatch_width: eyecatch_width ?? "",
      eyecatch_height: eyecatch_height ?? "",
      yoast_description: yoast_description ?? ""
    }
  };
}

type Props = {
  post: any;
  title: string;
  slug: string;
  publishDate: string;
  content: string;
  eyecatch_url: string;
  eyecatch_altText: string;
  eyecatch_width: number;
  eyecatch_height: number;
  yoast_description: string;
}

const Home: NextPage<Props> = ({post,title,slug,publishDate,content,eyecatch_url,eyecatch_altText,eyecatch_width,eyecatch_height,yoast_description}) => {

  return (
    <>
      <PageHead
        pageTitle = {`${title} | ヒダコレ ノート`}
        pageDescription = {yoast_description}
        pageRobots = "none"
        pagePath = ""
        pageImg = {eyecatch_url}
        pageImgWidth = {eyecatch_width}
        pageImgHeight = {eyecatch_height}
      />

      <div className="contents-body body-hidacolle-note">

        {/* Component in Note */}
        <div className="note-header">
          <div className="inner-heading">
            <h2 className="logo_note">
            <Link href='/note' legacyBehavior>
              <a>
                <Image
                  src="/logo-note.svg"
                  alt="森から暮らしまで ヒダコレスタッフの家具にまつわる書きもの"
                  width={180}
                  height={20}
                />
              </a>
            </Link>
            </h2>
            <nav className="categories">
              {/* ここにカテゴリー群 */}
            </nav>
          </div>
        </div>

        <div className="note-notice-block">
          これはプレビューページです。このリンクを知っている人にしか見えないページです。
        </div>

        <div className="note-item-heading">
          <div className="item-data">
            <div className="item-date"><Date dateString={publishDate} /></div>
            <div className="item-title">{title}</div>
          </div>
          <div className="back">
            <Link href='/note' legacyBehavior>
                <a>
                  ノートのトップへもどる
                </a>
            </Link>
          </div>
        </div>

        <div className="note-item-contentents">

          {eyecatch_url ? (
            <div className="thunmnail">
              <Image
                src={eyecatch_url}
                width={eyecatch_width}
                height={eyecatch_height}
                alt={eyecatch_altText}
              />
            </div>
          ) : (
            <div className="thunmnail_none">サムネイル（アイキャッチ画像）の指定がありません<br />必ず指定してください</div>
          )}

            <div className="content" dangerouslySetInnerHTML={{ __html: content }}>

          </div>

        </div>
      </div>
    </>
  );
};

export default Home;