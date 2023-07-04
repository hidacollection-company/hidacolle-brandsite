import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import PageHead from 'components/PageHead/PageHead'
import { GoToOnlineshop } from 'components/OnlineChallenge/GoToOnlineshop'
import { BreadList } from 'components/BreadList/BreadList'

import {Link as Scroll} from "react-scroll"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

// Wordpress graphql
import { getAllPosts } from "lib/wpapi";

export async function getStaticProps(context) {

  const allPosts = await getAllPosts();

  console.log(allPosts);

  return {
    props: {
      allPosts
    }
  };

}

type Props = {
  allPosts: any;
}

const Home: NextPage<Props> = ({allPosts}) => {

  const bread_list : { [key: string]: string }[] = [
    {
      name: "ヒダコレ ノート",
      url: ""
    }
  ];

  // Slick(Slider) settings
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`next-arrow`}
        style={{ ...style, display: "flex"}}
        onClick={onClick}
      >
        次へ
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`prev-arrow`}
        style={{ ...style, display: "flex"}}
        onClick={onClick}
      >
        前へ
      </div>
    );
  }

  const settings = {
    dots: false,
    autoplaySpeed: 5000,
    autoplay: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

    return (
      <>
        <PageHead
          pageTitle = "ヒダコレ ノート"
          pageDescription = ""
          pageRobots = "none"
          pagePath = "https://www.hidacolle.com/note"
          pageImg = ""
          pageImgWidth = ""
          pageImgHeight = ""
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

          <div className="note-heading">
            <div className="heading-title">
              <div className="heading-title-inner">
                <div className="logos">
                  <Image
                    src="/mark-note.svg"
                    alt="森から暮らしまで ヒダコレスタッフの家具にまつわる書きもの"
                    width={64}
                    height={34}
                  />
                </div>
                <div className="line">ヒダコレノート</div>
                <div className="title">HIDACOLLE<br />NOTE</div>
                <div className="caption">森から暮らしまで<br />ヒダコレスタッフの家具にまつわる書きもの</div>
              </div>
            </div>
            <div className="heading-slider">
              <Slider {...settings}>
                {allPosts.map((item, index) =>
                  <div key={index}>
                    <Link
                      href={`/note/${item.slug}`}
                      legacyBehavior
                    >
                      <a className='add_corner' style={{ backgroundImage: `url('${item.eyecatch.url}')` }}>
                        {/* <p className="title">{item.title}</p> */}
                      </a>
                    </Link>
                  </div>
                )}
              </Slider>
            </div>
          </div>

          <div className="note-contentents-notes">

            <div className="notes-heading">
              <div className="title">Notes</div>
              <div className="line">新しい読みもの<br />ヒダコレ家具の中の人が執筆中!</div>
            </div>

            <div className="notes-items">
              {allPosts.map((item) =>
                <Link
                  key={item.slug}
                  href={`/note/${item.slug}`}
                  legacyBehavior
                >
                  <a className="item">
                    <div className="thumbnail add_corner">
                      {item.eyecatch ? (
                        <Image
                          src={item.eyecatch.url}
                          width={item.eyecatch.width}
                          height={item.eyecatch.height}
                          alt={item.eyecatch.altText}
                        />
                      ) : (
                        // 代替のコンテンツを表示する場合
                        // ヒダコレノートの基本サムネイル画像を設定しておく。
                        <div>Alternative Content</div>
                      )}
                    </div>
                    <h3 className="title">{item.title}</h3>
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>
      </>
    );
};

export default Home;