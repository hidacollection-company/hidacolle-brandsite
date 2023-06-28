import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import PageHead from 'components/PageHead/PageHead'
import { BreadList } from 'components/BreadList/BreadList'

import { parseISO, format } from 'date-fns'
import ja from 'date-fns/locale/ja'

// Wordpress graphql
import { getAllPosts } from "lib/wpapi";
import { getPostBySlug } from "lib/wpapi";

// date-fns
function Date({ dateString }) {
  return <time dateTime={dateString}>{format(parseISO(dateString), 'yyyy.MM.dd (EEEE)', {locale:ja} )} に書きました</time>
};

export async function getStaticPaths() {

  const allPosts = await getAllPosts();

  const paths = allPosts.map((content) => ({
    params: {
      slug: content.slug,
    }
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {

  const post = await getPostBySlug(context.params['slug']);

  console.log("=======================");
  console.log("getStaticProps");
  console.log("=======================");
  console.log(post);

  const title = post.title;
  const slug = post.slug;
  const publishDate = post.publishDate;
  const content = post.content;
  const eyecatch_url = post.eyecatch.url;
  const eyecatch_altText = post.eyecatch.altText;
  const eyecatch_height = post.eyecatch.height;
  const eyecatch_width = post.eyecatch.width;

  return {
    props: {
      title,
      slug,
      publishDate,
      content,
      eyecatch_url,
      eyecatch_altText,
      eyecatch_width,
      eyecatch_height
    }
  };
}

type Props = {
  title: string;
  slug: string;
  publishDate: string;
  content: string;
  eyecatch_url: string;
  eyecatch_altText: string;
  eyecatch_width: number;
  eyecatch_height: number;
}

const Home: NextPage<Props> = ({title,slug,publishDate,content,eyecatch_url,eyecatch_altText,eyecatch_width,eyecatch_height}) => {

  return (
    <>
      <PageHead
        pageTitle = {`${title} | ヒダコレ ノート`}
        pageDescription = ""
        pageRobots = ""
        pagePath = {`https://www.hidacolle.com/note/${slug}`}
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

          <div className="thunmnail">
            <Image
              src={eyecatch_url}
              width={eyecatch_width}
              height={eyecatch_height}
              alt={eyecatch_altText}
            />
          </div>

          <div className="content" dangerouslySetInnerHTML={{ __html: content }}>

          </div>

        </div>
      </div>
    </>
  );
};

export default Home;