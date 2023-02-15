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

const Home: NextPage = () => {

    const bread_list : { [key: string]: string }[] = [
      {
        name: "一枚板の家具",
        url: "/ichimaiita"
      },
      {
        name: "欅の一枚板",
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
            <img src={`/images/ichimaiita/example/keyaki/slide-${i + 1}.jpg`} />
          </a>
        );
      },
      dots: true,
      // dotsClass: "slick-dots slick-thumb",
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
            pageTitle = "欅の一枚板"
            pageDescription = "欅の一枚板"
            pagePath = "https://www.hidacolle.com/ichimaiita/keyaki"
            pageImg = ""
            pageImgWidth = ""
            pageImgHeight = ""
        />

        <div className="contents_body body__solidwood_product">

          <BreadList list={bread_list}></BreadList>

          <div className="box__heading box__layout">
            <h1>欅の一枚板</h1>
          </div>

          <section className="solidwood_product">

            <div className="item_images">

              <Slider {...settings}>
                <div>
                  <Image
                    // loader={myLoader}
                    src="/images/ichimaiita/example/keyaki/slide-1.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                </div>
                <div>
                  <Image
                    // loader={myLoader}
                    src="/images/ichimaiita/example/keyaki/slide-2.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                </div>
                <div>
                  <Image
                    // loader={myLoader}
                    src="/images/ichimaiita/example/keyaki/slide-3.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                </div>
                <div>
                  <Image
                    // loader={myLoader}
                    src="/images/ichimaiita/example/keyaki/slide-4.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                </div>
                <div>
                  <Image
                    // loader={myLoader}
                    src="/images/ichimaiita/example/keyaki/slide-5.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                </div>
                <div>
                  <Image
                    // loader={myLoader}
                    src="/images/ichimaiita/example/keyaki/slide-6.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                </div>
                <div>
                  <Image
                    // loader={myLoader}
                    src="/images/ichimaiita/example/keyaki/slide-7.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                </div>
                <div>
                  <Image
                    // loader={myLoader}
                    src="/images/ichimaiita/example/keyaki/slide-8.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                </div>
                {/* <div>
                  <Image
                    // loader={myLoader}
                    src="/images/ichimaiita/example/keyaki/slide-9.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                </div>
                <div>
                  <Image
                    // loader={myLoader}
                    src="/images/ichimaiita/example/keyaki/slide-10.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                </div> */}
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
                    <td className="table-line">2,300 × 830-950 × 65 (mm)</td>
                  </tr>
                  <tr className="table-numbering">
                    <th className="table-title">管理番号</th>
                    <td className="table-line">ky-23001</td>
                  </tr>
                </tbody>
              </table>
              <div className="price">660,000<span className="yen">円 (税込)</span></div>
              <div className="layout-button">
                <Link href='/contact' legacyBehavior><a className="button_green">お問い合わせはこちら</a></Link>
              </div>
            </div>
          </section>

          {/* Component */}
          <div className="layout__IchimaiitaList">
            <IchimaiitaList />
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