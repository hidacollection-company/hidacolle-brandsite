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
  return <time dateTime={dateString}>{format(parseISO(dateString), 'yyyy.MM.dd (EEEE)', {locale:ja} )}</time>
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
  const categories = post.categories[0].slug;
  const eyecatch_url = post.eyecatch.url;
  const eyecatch_altText = post.eyecatch.altText;
  const eyecatch_height = post.eyecatch.height;
  const eyecatch_width = post.eyecatch.width;

  const note_person_introduction = post.note_person_introduction;

  const description = post.description;

  console.log(categories);

  return {
    props: {
      title,
      slug,
      publishDate,
      content,
      categories,
      eyecatch_url,
      eyecatch_altText,
      eyecatch_width,
      eyecatch_height,
      note_person_introduction,
      description
    }
  };
}

type Props = {
  title: string;
  slug: string;
  publishDate: string;
  content: string;
  categories: string;
  eyecatch_url: string;
  eyecatch_altText: string;
  eyecatch_width: number;
  eyecatch_height: number;
  note_person_introduction: string;
  description: string;
}

const Home: NextPage<Props> = ({title,slug,publishDate,content,categories,eyecatch_url,eyecatch_altText,eyecatch_width,eyecatch_height,note_person_introduction,description}) => {

  return (
    <>
      <PageHead
        pageTitle = {`${title} | ヒダコレ ノート`}
        pageDescription = {description}
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
                  alt="ヒダコレノートロゴマーク"
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
            <div className="item-date"><Date dateString={publishDate} />に書きました</div>
            <h2 className="item-title" dangerouslySetInnerHTML={{__html: title}}></h2>
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

          {/* カテゴリー『飛騨の手仕事』のみに表示されるボックス */}
          {categories === "handcrafts-of-hida" && (
            <div className="category__handcrafts-of-hida">
              <div className="heading">
                飛騨の手仕事について
              </div>
              <div className="body">
                <p>岐阜県北部に位置する飛騨高山は、匠の歴史から続く工芸・民芸の文化と、豊かな自然があふれるところ。</p>
                <p>その中で一つ一つ丁寧に作られた作品を、私たちは『飛騨の手仕事』と呼んでいます。</p>
                <p>手仕事から生まれる暮らしに寄り添う器や道具には唯一無二の個性があり、日々の暮らしと心を豊かにしてくれます。</p>
                <p>優しい風合いと温かさ、そして作り手の思いを感じる飛騨のクラフト作品。その魅力を発信し、出会いの場を作りたいとヒダコレ（HIDA・COLLECTION）は考えています。</p>
              </div>
            </div>
          )}

            <div className="content" dangerouslySetInnerHTML={{ __html: content }}></div>

          </div>

          <div className="note_person_introduction" dangerouslySetInnerHTML={{ __html: note_person_introduction }}></div>

      </div>
    </>
  );
};

export default Home;