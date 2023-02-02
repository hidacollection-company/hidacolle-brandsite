import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Home: NextPage = () => {

    const settings = {
      accessibility: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 100000,
      autoplaySpeed: 0,
      cssEase: "linear"
    };

    return (
      <div className="contents-body body-flagshipshop">
        {/* パンクズ */}
        <div className="box__beadlist">パンクズナビ</div>

        <div className="box__hero_slider">
          <div className="heading__hero_slider">
            <h1>ヒダコレ<br />家具ショップ</h1>
            <p>Flagship shop</p>
          </div>
          <Slider {...settings}>
              <div>
                <Image
                  // loader={myLoader}
                  src="/images/flagshipshop/slide-1.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
              </div>
              <div>
                <Image
                  // loader={myLoader}
                  src="/images/flagshipshop/slide-2.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
              </div>
              <div>
                <Image
                  // loader={myLoader}
                  src="/images/flagshipshop/slide-3.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
              </div>
          </Slider>
        </div>

        <div className="box-introduction">
          <div className="heading-introduction">
            <p className='lead-introduction'>ヒダコレ 家具ショップは<br />一緒に暮らしを考える場所です。</p>
            <p className='bold-introduction'>
              ヒダコレのお店は飛騨高山にあります。<br />
              様々な家具を見て、触って、<br />
              楽しみながら選べるのはもちろん、<br />
              家具づくりについて考えるお店です。
            </p>
          </div>
          <div className="information">
            <p className='title'>営業情報</p>
            <p className='caption'>営業時間 : 9:30-17:30 （水曜日 定休）<br />駐車場有り</p>
            <p className='title'>店舗お問合せ先（来店ご予約など）</p>
            <p className='caption'>
              電話番号 : 0577-57-7555<br />
              メール : info@hida-collection.shop
            </p>
            <div className="layout-button">
              <Link href='/large-log' legacyBehavior><a className="">Google mapはこちら</a></Link>
            </div>
          </div>
        </div>

        <section className='box-entrance box-floor'>
          <div className="image-floor">
            <Image
              src="/test.jpg"
              alt="Picture of the author"
              width={1280}
              height={855}
            />
          </div>
          <div className="layout-heading">
            <div className="head">
              <p className='en-section'>Entrance</p>
              <h2 className='ja-section'>エントランス</h2>
            </div>
            <div className="caption">
              <p className='catch-caption'>
                ヒダコレ家具ショップは<br />
                入り口から楽しさいっぱい。
              </p>
              <div className='bold-caption'>
                <p>日本人が独自の風土の中で育んだ「木の文化」。</p>
                <p>その美意識と技術の一つとしての神社や仏閣、その建築材の中から「銘木」というものが生まれたんじゃないかと思っています。</p>
              </div>
            </div>
          </div>

          <ul className='lists-booth'>
            <li>
              <span className="number">1</span>
              <figure>
                <Image
                  src="/images/flagshipshop/004_maruta.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>
                  <p className='title'>丸太</p>
                  <p className='caption'>そんな機会をつくりたくて、土場や製材の現場にお客様をお連れし、一緒に周ることもしばしば。時には一緒に森に入り、”生きている木”を見に行くことだってあります。</p>
                </figcaption>
              </figure>
            </li>
            <li>
              <span className="number">2</span>
              <figure>
                <Image
                  src="/images/flagshipshop/005_bench.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>
                  <p className='title'>丸太</p>
                  <p className='caption'>そんな機会をつくりたくて、土場や製材の現場にお客様をお連れし、一緒に周ることもしばしば。時には一緒に森に入り、”生きている木”を見に行くことだってあります。</p>
                </figcaption>
              </figure>
            </li>
            <li>
              <span className="number">3</span>
              <figure>
                <Image
                  src="/images/flagshipshop/006_deck.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>
                  <p className='title'>丸太</p>
                  <p className='caption'>そんな機会をつくりたくて、土場や製材の現場にお客様をお連れし、一緒に周ることもしばしば。時には一緒に森に入り、”生きている木”を見に行くことだってあります。</p>
                </figcaption>
              </figure>
            </li>
          </ul>
          <ul className="images">
            <li>
              <Image
                src="/images/flagshipshop/007.jpg"
                alt="Picture of the author"
                width={1280}
                height={855}
              />
            </li>
            <li>
              <Image
                src="/images/flagshipshop/008.jpg"
                alt="Picture of the author"
                width={1280}
                height={855}
              />
            </li>
          </ul>
        </section>

        <section className='box-first_floor box-floor'>
          <div className="image-floor">
            <Image
              src="/test.jpg"
              alt="Picture of the author"
              width={1280}
              height={855}
            />
          </div>
          <div className="layout-heading">
            <div className="head">
              <p className='en-section'>First floor</p>
              <h2 className='ja-section'>一階</h2>
            </div>
            <div className="caption">
              <p className='catch-caption'>
                ヒダコレ家具ショップは<br />
                入り口から楽しさいっぱい。
              </p>
              <div className='bold-caption'>
                <p>日本人が独自の風土の中で育んだ「木の文化」。</p>
                <p>その美意識と技術の一つとしての神社や仏閣、その建築材の中から「銘木」というものが生まれたんじゃないかと思っています。</p>
              </div>
            </div>
          </div>

          <ul className='lists-booth'>
            <li>
              <span className="number">1</span>
              <figure>
                <Image
                  src="/images/flagshipshop/009_ichimaiita.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>
                  <p className='title'>一枚板</p>
                  <p className='caption'>そんな機会をつくりたくて、土場や製材の現場にお客様をお連れし、一緒に周ることもしばしば。時には一緒に森に入り、”生きている木”を見に行くことだってあります。</p>
                </figcaption>
              </figure>
            </li>
            <li>
              <span className="number">2</span>
              <figure>
                <Image
                  src="/images/flagshipshop/010_library.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>
                  <p className='title'>ライブラリー</p>
                  <p className='caption'>そんな機会をつくりたくて、土場や製材の現場にお客様をお連れし、一緒に周ることもしばしば。時には一緒に森に入り、”生きている木”を見に行くことだってあります。</p>
                </figcaption>
              </figure>
            </li>
            <li>
              <span className="number">3</span>
              <figure>
                <Image
                  src="/images/flagshipshop/011_craft.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>
                  <p className='title'>飛騨の手仕事</p>
                  <p className='caption'>そんな機会をつくりたくて、土場や製材の現場にお客様をお連れし、一緒に周ることもしばしば。時には一緒に森に入り、”生きている木”を見に行くことだってあります。</p>
                </figcaption>
              </figure>
            </li>
          </ul>
          <ul className="images">
            <li>
              <Image
                src="/images/flagshipshop/012.jpg"
                alt="Picture of the author"
                width={1280}
                height={855}
              />
            </li>
            <li>
              <Image
                src="/images/flagshipshop/013.jpg"
                alt="Picture of the author"
                width={1280}
                height={855}
              />
            </li>
          </ul>
        </section>

        <section className='box-second_floor box-floor'>
          <div className="image-floor">
            <Image
              src="/test.jpg"
              alt="Picture of the author"
              width={1280}
              height={855}
            />
          </div>
          <div className="layout-heading">
            <div className="head">
              <p className='en-section'>Second floor</p>
              <h2 className='ja-section'>二階</h2>
            </div>
            <div className="caption">
              <p className='catch-caption'>
                ヒダコレ家具ショップは<br />
                入り口から楽しさいっぱい。
              </p>
              <div className='bold-caption'>
                <p>日本人が独自の風土の中で育んだ「木の文化」。</p>
                <p>その美意識と技術の一つとしての神社や仏閣、その建築材の中から「銘木」というものが生まれたんじゃないかと思っています。</p>
              </div>
            </div>
          </div>

          <ul className='lists-booth'>
            <li>
              <span className="number">1</span>
              <figure>
                <Image
                  src="/images/flagshipshop/014_table.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>
                  <p className='title'>テーブル</p>
                  <p className='caption'>そんな機会をつくりたくて、土場や製材の現場にお客様をお連れし、一緒に周ることもしばしば。時には一緒に森に入り、”生きている木”を見に行くことだってあります。</p>
                </figcaption>
              </figure>
            </li>
            <li>
              <span className="number">2</span>
              <figure>
                <Image
                  src="/images/flagshipshop/015_sofa.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>
                  <p className='title'>ソファー</p>
                  <p className='caption'>そんな機会をつくりたくて、土場や製材の現場にお客様をお連れし、一緒に周ることもしばしば。時には一緒に森に入り、”生きている木”を見に行くことだってあります。</p>
                </figcaption>
              </figure>
            </li>
            <li>
              <span className="number">3</span>
              <figure>
                <Image
                  src="/images/flagshipshop/016_desk.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>
                  <p className='title'>デスク</p>
                  <p className='caption'>そんな機会をつくりたくて、土場や製材の現場にお客様をお連れし、一緒に周ることもしばしば。時には一緒に森に入り、”生きている木”を見に行くことだってあります。</p>
                </figcaption>
              </figure>
            </li>
            <li>
              <span className="number">4</span>
              <figure>
                <Image
                  src="/images/flagshipshop/017_bed.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>
                  <p className='title'>ベッド</p>
                  <p className='caption'>そんな機会をつくりたくて、土場や製材の現場にお客様をお連れし、一緒に周ることもしばしば。時には一緒に森に入り、”生きている木”を見に行くことだってあります。</p>
                </figcaption>
              </figure>
            </li>
            <li>
              <span className="number">5</span>
              <figure>
                <Image
                  src="/images/flagshipshop/018_original_products.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>
                  <p className='title'>こんな家具のある暮らし</p>
                  <p className='caption'>そんな機会をつくりたくて、土場や製材の現場にお客様をお連れし、一緒に周ることもしばしば。時には一緒に森に入り、”生きている木”を見に行くことだってあります。</p>
                </figcaption>
              </figure>
            </li>
          </ul>
          {/* <ul className="images">
            <li>
              <Image
                src="/test.jpg"
                alt="Picture of the author"
                width={1280}
                height={855}
              />
            </li>
            <li>
              <Image
                src="/test.jpg"
                alt="Picture of the author"
                width={1280}
                height={855}
              />
            </li>
          </ul> */}
        </section>

        <div className="box-layout_add_bgimage">

          <section className="box-reserve">
            <h3>ご来店の予約について</h3>
            <p>土日の店舗へのご来店の際にはご予約をおすすめしております。<br />一枚板やヒダコレ家具を1つ1つを丁寧に説明させていただきます。</p>
            <div className="buttons">
              <div className="layout-button">
                <Link href='' legacyBehavior><a href="" className="button target_this_site">電話で予約する</a></Link>
              </div>
              <div className="layout-button">
                <Link href='' legacyBehavior><a href="" className="button target_this_site">メールで予約する</a></Link>
              </div>
              <div className="layout-button">
                <Link href='' legacyBehavior><a href="" className="button target_this_site">メールフォームから予約する</a></Link>
              </div>
            </div>
          </section>

          <section className="box-information">
            <h3>ご来店の予約について</h3>
            <table>
              <tbody>
                <tr>
                  <th>所在地</th>
                  <td>〒506-0055 岐阜県高山市上岡本町3-362</td>
                </tr>
                <tr>
                  <th>電話番号</th>
                  <td>0577-57-7555</td>
                </tr>
                <tr>
                  <th>Eメール</th>
                  <td>info@hidacolle.com</td>
                </tr>
                <tr>
                  <th>営業時間</th>
                  <td>9:30～17:30</td>
                </tr>
                <tr>
                  <th>定休日</th>
                  <td>水曜日</td>
                </tr>
                <tr>
                  <th>駐車場</th>
                  <td>店舗前2台 / のぼりや（向かいのパン屋さん）横に4台<br />計6台</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>


        <section className="box__googlemap">
          <h3>グーグルマップ</h3>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d405.1059066814633!2d137.2428516390083!3d36.13780195561022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6002bb3029696093%3A0x7e8859fab0c483b8!2z6aOb6aio44Kz44Os44Kv44K344On44OzIOOBj-OCieOBl-OBruWItuS9nOaJgA!5e0!3m2!1sja!2sjp!4v1675304020323!5m2!1sja!2sjp" width="1000" height="550" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div className="layout__button">
          </div>
          <div className="layout__button_centering">
            <div className="layout-button">
              <Link href='' legacyBehavior><a href="" className="button target_this_site">Google mapでみる</a></Link>
            </div>
          </div>
        </section>

        <section className="box-calender">
          <h3>営業日カレンダー</h3>
          {/* Add Googl calender */}
        </section>

      </div>
    );
};

export default Home;