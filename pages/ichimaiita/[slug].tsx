import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import PageHead from 'components/PageHead/PageHead'
import { CtaBox } from 'components/CtaBox/CtaBox'
import { IchimaiitaList } from 'components/Ichimaiita/IchimaiitaList'
import { Links } from 'components/Ichimaiita/Links'
import { BreadList } from 'components/BreadList/BreadList'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

// Wordpress REST API
import { fetchData } from 'lib/fetchData';

// Test
import { wpClient } from "lib/wpapi";

export async function getStaticPaths() {

  wpClient.myPostType = wpClient.registerRoute('wp/v2', '/ichimaiita/(?P<id>[0-9]+)');

  const ichimaiita_data = await wpClient.myPostType().orderby('menu_order').order('asc');

  const paths = ichimaiita_data.map((content) => ({
    params: {
      slug: content.acf.slug,
    }
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {

  wpClient.myPostType = wpClient.registerRoute('wp/v2', '/ichimaiita/(?P<id>[0-9]+)');

  const ichimaiita_data = await wpClient.myPostType().orderby('menu_order').order('asc');

  const page_data_low = ichimaiita_data.filter((content)=> content.acf.slug == context.params.slug)

  console.log(page_data_low)

  const page_data = page_data_low[0].acf

  const photos_low = page_data.photos
  const photos = Object.entries(page_data.photos)

  return {
    props: {
      page_data,
      ichimaiita_data,
      photos
    }
  };
}

type Props = {
  page_data: any;
  ichimaiita_data: any;
  photos: any;
}

const Home: NextPage<Props> = ({page_data, ichimaiita_data, photos}) => {

    const bread_list : { [key: string]: string }[] = [
      {
        name: "一枚板の家具",
        url: "/ichimaiita"
      },
      {
        name: `${page_data.title}の一枚板`,
        url: ""
      }
    ];

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
      customPaging: function(i) {
        return (
          <a>
            <img src={photos[i][1]} />
          </a>
        );
      },
      dots: true,
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
            pageTitle = {`${page_data.title}の一枚板`}
            pageDescription = {`${page_data.title}の一枚板`}
            pagePath = {`https://www.hidacolle.com/ichimaiita/${page_data.slug}`}
            pageImg = ""
            pageImgWidth = ""
            pageImgHeight = ""
        />

        <div className="contents_body body__solidwood_product">

          <BreadList list={bread_list}></BreadList>

          <div className="box__heading box__layout">
            <h1>{page_data.title}の一枚板</h1>
          </div>

          <section className="solidwood_product">

            <div className="item_images">
              <Slider {...settings}>
                {photos.map((photo, index) =>
                  <div key={index}>
                    <Image
                      src={photo[1]}
                      alt="Picture of the author"
                      width={1280}
                      height={855}
                    />
                  </div>
                )}
              </Slider>
            </div>

            <div className="item_data">
              <table>
                <tbody>
                  {/* <tr className="table-delivery_schedule">
                    <th className="table-title">納期</th>
                    <td className="table-line">ご注文後1か月半ほど製作期間を頂きまして、発送日が決定次第ご連絡をさせていただきます。お急ぎの方は、お問合せフォームよりご相談ください。</td>
                  </tr> */}
                  {/* <tr className="table-tree_species">
                    <th className="table-title">樹種</th>
                    <td className="table-line">ブラックウォールナット</td>
                  </tr> */}
                  <tr className="table-size">
                    <th className="table-title">サイズ</th>
                    <td className="table-line">{page_data.size}</td>
                  </tr>
                  <tr className="table-numbering">
                    <th className="table-title">管理番号</th>
                    <td className="table-line">{page_data.control_number}</td>
                  </tr>
                </tbody>
              </table>
              <div className="price">{page_data.price_tax_included}<span className="yen">円 (税込)</span></div>
              <div className="layout-button">
                <Link href='/contact' legacyBehavior><a className="button_green">お問い合わせはこちら</a></Link>
              </div>
            </div>
          </section>

          {/* Component */}
          <div className="layout__IchimaiitaList">
            <section className="box_items">
              <p className="heading">今すぐ買える、使える一枚板は、<br />こちらからお選びいただけます!!</p>
              <ul className="items">
                {ichimaiita_data.map((ichimaiita, index) =>
                  <li key={index}>
                    <IchimaiitaList
                      key={index}
                      title={ichimaiita.acf.title}
                      slug={ichimaiita.acf.slug}
                      size={ichimaiita.acf.size}
                      control_number={ichimaiita.acf.control_number}
                      thumbnail={ichimaiita.acf.thumbnail}
                      photos={ichimaiita.acf.photos}
                    />
                  </li>
                )}
              </ul>
            </section>
          </div>

          <div className="layout__CtaBox">
            <CtaBox
              heading = "より多くの一枚板から選びたい方は<br />ぜひ一度お問合せください。"
              caption = ""
              button_caption = "お問い合わせはこちら"
            />
          </div>

          <div className="layout__Link">
            <Links
              this_page_ichimaiita_index= {false}
              this_page_ichimaiita_other= {false}
            />
          </div>

          <div className="layout__CtaBox">
            <CtaBox
              heading = "より多くの一枚板から選びたい方は<br />ぜひ一度お問合せください。"
              caption = ""
              button_caption = "お問い合わせはこちら"
            />
          </div>
        </div>
      </>
    );
};

export default Home;