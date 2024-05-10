import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import PageHead from 'components/PageHead/PageHead'
import { BreadList } from 'components/BreadList/BreadList'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Home: NextPage = () => {

    const bread_list : { [key: string]: string }[] = [
      {
        name: "ヒダコレ 家具ショップ",
        url: ""
      }
    ];

    const settings = {
      accessibility: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 50000,
      autoplaySpeed: 0,
      cssEase: "linear",
      touchMove: false,
    };

    return (
      <>
        <PageHead
          pageTitle = "ヒダコレ 家具ショップ"
          pageDescription = "ヒダコレ 家具ショップを森と暮らしがつながる場所にしたい。飛騨の匠の技を継承する飛騨高山は日本一の家具産地。飛騨の森で育った色々な広葉樹の丸太から、お客様が直接木に触れ、暮らしを考えながら、私たちと一緒に「家具づくり」ができるお店です。"
          pageRobots = ""
          pagePath = "https://www.hidacolle.com/flagshipshop"
          pageImg = ""
          pageImgWidth = ""
          pageImgHeight = ""
        />

        <div className="contents-body body-flagshipshop">

          <BreadList list={bread_list}></BreadList>

          <div className="box__hero_slider">
            <div className="heading__hero_slider">
              <h1>ヒダコレ<br />家具ショップ</h1>
              <p>Flagship shop</p>
            </div>
            <Slider {...settings}>
                <div>
                  <Image
                    src="/images/flagshipshop/slide-1.jpg"
                    alt=""
                    width={1280}
                    height={855}
                  />
                </div>
                <div>
                  <Image
                    src="/images/flagshipshop/slide-2.jpg"
                    alt=""
                    width={1280}
                    height={855}
                  />
                </div>
                <div>
                  <Image
                    src="/images/flagshipshop/slide-3.jpg"
                    alt=""
                    width={1280}
                    height={855}
                  />
                </div>
            </Slider>
          </div>

          <div className="box-introduction">
            <div className="heading-introduction">
              <p className='lead-introduction'>ヒダコレ 家具ショップを<br />森と暮らしがつながる<br className='sp_only' />場所にしたい。</p>
              <p className='bold-introduction'>
                飛騨の匠の技を継承する飛騨高山は日本一の家具産地。<br />
                飛騨の森で育った色々な広葉樹の丸太から、お客様が直接木に触れ、暮らしを考えながら、私たちと一緒に「家具づくり」ができるお店です。
              </p>
            </div>
            <div className="information">
              <p className='title'>営業情報</p>
              <p className='caption'>営業時間 : 9:30-17:30（水・木 定休）<br />駐車場有り</p>
              <p className='title'>店舗お問合せ先（来店ご予約など）</p>
              <p className='caption'>
                電話番号 : 0577-57-7555<br />
                メール : info@hidacolle.com
              </p>
              <div className="layout-button">
                <Link href='https://g.page/hidacolle?share' legacyBehavior><a className="" target="_blank">Google mapはこちら</a></Link>
              </div>
            </div>
          </div>

          <section className='box-entrance box-floor'>
            <div className="image-floor">
              <Image
                src="/images/flagshipshop/illust-1.jpg"
                alt="ヒダコレ 家具ショップ 『エントランス』のイラスト"
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
                  無垢の家具は、<br className='sp_only' />丸太の木から、<br />丸太は森から生まれています。
                </p>
                <div className='bold-caption'>
                  <p>日本人が独自の風土の中で育んだ「木の文化」。</p>
                  <p>それは「森の文化」とも言えます。</p>
                  <p>お客様に直接その「森」に触れていただくため、<br />ヒダコレ家具ショップの入口は「丸太」からはじまります。</p>
                </div>
              </div>
            </div>

            <ul className='lists-booth'>
              <li>
                <span className="number">1</span>
                <figure>
                  <Image
                    src="/images/flagshipshop/004_maruta.jpg"
                    alt="『飛騨の丸太』の写真"
                    width={1280}
                    height={855}
                  />
                  <figcaption>
                    <p className='title'>飛騨の丸太</p>
                    <p className='caption'>無垢の木は、単なる資材としての「木材」ではなく、何十年もかけて育ってきた「丸太」であって、その丸太は「森」で長く生きていたのです。</p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <span className="number">2</span>
                <figure>
                  <Image
                    src="/images/flagshipshop/005_bench.jpg"
                    alt="『森のベンチ』の写真"
                    width={1280}
                    height={855}
                  />
                  <figcaption>
                    <p className='title'>森のベンチ</p>
                    <p className='caption'>森の中を散策するような、ひと休みしてお茶を楽しむような、そんな時間の過ごし方も体験してほしいと思い、少し休んでいただけるベンチを作りました。</p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <span className="number">3</span>
                <figure>
                  <Image
                    src="/images/flagshipshop/006_deck.jpg"
                    alt="『無垢の木デッキ』の写真"
                    width={1280}
                    height={855}
                  />
                  <figcaption>
                    <p className='title'>無垢の木デッキ</p>
                    <p className='caption'>飛騨の森で育った広葉樹。耳付きの自然木でそのままデッキを作りました。座って休んだり、子供の遊び場、ワークショップなども開催したいですね。</p>
                  </figcaption>
                </figure>
              </li>
            </ul>
            <ul className="images">
              <li>
                <Image
                  src="/images/flagshipshop/007.jpg"
                  alt=""
                  width={1280}
                  height={855}
                />
              </li>
              <li>
                <Image
                  src="/images/flagshipshop/008.jpg"
                  alt=""
                  width={1280}
                  height={855}
                />
              </li>
            </ul>
          </section>

          <section className='box-first_floor box-floor'>
            <div className="image-floor">
              <Image
                src="/images/flagshipshop/illust-2.jpg"
                alt="ヒダコレ 家具ショップ 『1階』のイラスト"
                width={1280}
                height={855}
              />
            </div>
            <div className="layout-heading">
              <div className="head">
                <p className='en-section'>First floor</p>
                <h2 className='ja-section'>1階</h2>
              </div>
              <div className="caption">
                <p className='catch-caption'>
                  一枚板を<br className='sp_only' />循環させるプロジェクトと、<br />飛騨のクラフトを全国の人へ
                </p>
                <div className='bold-caption'>
                  <p>日本の森には、一枚板が取れるような大きな木はあまり残されていません。</p>
                  <p>あらたな大きな丸太から一枚板を製作するだけではなく、<br />以前に作られ使われてきた一枚板を再生させる、<br />再度循環させることも目指しています。</p>
                </div>
              </div>
            </div>

            <ul className='lists-booth'>
              <li>
                <span className="number">1</span>
                <figure>
                  <Image
                    src="/images/flagshipshop/009_ichimaiita.jpg"
                    alt="『一枚板を循環させる』の写真"
                    width={1280}
                    height={855}
                  />
                  <figcaption>
                    <p className='title'>一枚板を循環させる</p>
                    <p className='caption'>以前は欠点とされていた木の割れや節なども、実はその木の大切な「個性」の一つです。それが唯一無二の特徴でもあり、そこに愛着が湧くのだと思います。</p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <span className="number">2</span>
                <figure>
                  <Image
                    src="/images/flagshipshop/010_library.jpg"
                    alt="『ライブラリー』の写真"
                    width={1280}
                    height={855}
                  />
                  <figcaption>
                    <p className='title'>ライブラリー</p>
                    <p className='caption'>ヒダコレ家具ショップのテーマは「学び」「体験」「楽しさ」です。木のことを知っていただき、森のこと、地域のことを考えるキッカケになるといいですね。</p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <span className="number">3</span>
                <figure>
                  <Image
                    src="/images/flagshipshop/011_craft.jpg"
                    alt="『飛騨の手仕事』の写真"
                    width={1280}
                    height={855}
                  />
                  <figcaption>
                    <p className='title'>飛騨の手仕事</p>
                    <p className='caption'>飛騨の匠の歴史から続く工芸・民芸の文化と、飛騨の豊かな自然の中で丁寧につくりあげられた作品には、作家さんの唯一無二の個性と温かみがあふれています。</p>
                  </figcaption>
                </figure>
              </li>
            </ul>
            <ul className="images">
              <li>
                <Image
                  src="/images/flagshipshop/012.jpg"
                  alt=""
                  width={1280}
                  height={855}
                />
              </li>
              <li>
                <Image
                  src="/images/flagshipshop/013.jpg"
                  alt=""
                  width={1280}
                  height={855}
                />
              </li>
            </ul>
          </section>

          <section className='box-second_floor box-floor'>
            <div className="image-floor">
              <Image
                src="/images/flagshipshop/illust-3.jpg"
                alt="ヒダコレ 家具ショップ 『2階』のイラスト"
                width={1280}
                height={855}
              />
            </div>
            <div className="layout-heading">
              <div className="head">
                <p className='en-section'>Second floor</p>
                <h2 className='ja-section'>2階</h2>
              </div>
              <div className="caption">
                <p className='catch-caption'>
                  お客様と<br className='sp_only' />一緒に考え、<br className='sp_only' />一緒につくる、<br />「家具づくり」が<br className='sp_only' />できる場所。
                </p>
                <div className='bold-caption'>
                  <p>本当にほしい家具は、「買うもの」ではなく「つくるもの」です。</p>
                  <p>メーカー既製品家具では見つからない、お客様のご希望に合った、<br />そしてお部屋のサイズや暮らし方に合った、<br />お客様オリジナルの家具をお作りします。</p>
                </div>
              </div>
            </div>

            <ul className='lists-booth'>
              <li>
                <span className="number">1</span>
                <figure>
                  <Image
                    src="/images/flagshipshop/014_table.jpg"
                    alt="『色々なテーブル』の写真"
                    width={1280}
                    height={855}
                  />
                  <figcaption>
                    <p className='title'>色々なテーブル</p>
                    <p className='caption'>四角いテーブルだけではなく、丸いテーブル、変形の天板、また人気のコタツやちゃぶ台などもお作りできます。また７つもの樹種からお選びいただけます。</p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <span className="number">2</span>
                <figure>
                  <Image
                    src="/images/flagshipshop/015_sofa.jpg"
                    alt="『オーダーソファ』の写真"
                    width={1280}
                    height={855}
                  />
                  <figcaption>
                    <p className='title'>オーダーソファ</p>
                    <p className='caption'>もうソファはゆっくり座れるだけではいけません。リビングでの家族の過ごし方の変化に伴い、「休む」「癒す」「遊ぶ」「集う」「学ぶ」場に変化しています。</p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <span className="number">3</span>
                <figure>
                  <Image
                    src="/images/flagshipshop/016_desk.jpg"
                    alt="『ワークスペース』の写真"
                    width={1280}
                    height={855}
                  />
                  <figcaption>
                    <p className='title'>ワークスペース</p>
                    <p className='caption'>お子様の学習机からリビングのカウンターデスク、そしてお部屋でのお仕事に合わせたワークスペースまで。収納やコンセントなどもカスタマイズします。</p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <span className="number">4</span>
                <figure>
                  <Image
                    src="/images/flagshipshop/017_bed.jpg"
                    alt="『オーダーベッド』の写真"
                    width={1280}
                    height={855}
                  />
                  <figcaption>
                    <p className='title'>オーダーベッド</p>
                    <p className='caption'>特にベッド回りでの過ごし方は見落としがち。ケイタイの充電は、メガネは、本はどうする?棚があると便利、ナイトテーブルがほしいなども可能です。</p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <span className="number">5</span>
                <figure>
                  <Image
                    src="/images/flagshipshop/018_original_products.jpg"
                    alt="『インテリア小物』の写真"
                    width={1280}
                    height={855}
                  />
                  <figcaption>
                    <p className='title'>インテリア小物</p>
                    <p className='caption'>シングルハンガーや鏡などのインテリア。例えばもう少し縦長の鏡がほしいとか、洗面台にピッタリのサイズがほしいなど、お気軽にオーダー製作いたします。</p>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </section>

          <div className="box-layout_add_bgimage">

            <section className="box-reserve">
              <h3>ご来店の、<br className='sp_only' />事前の連絡について</h3>
              <div className="caption__reserve">
                <p>ヒダコレの一枚板やカスタムオーダー家具は、<br className='pc_only' />お客様のお部屋のサイズや暮らし方のイメージをお聞きしながら、<br className='pc_only' />一緒に考えて、一緒につくっていく家具です。</p>
                <p>いつでも「お試し感覚」でお気軽にご来店いただいておりますが、<br className='pc_only' />もし事前にご来店の連絡をいただけますと、<br className='pc_only' />お客様のイメージを少しお聞きして、ご来店までにいろいろと準備もさせていただきます。</p>
                <p>遠方からのお客様が多いので、<br className='pc_only' />「来た甲斐があった」と言っていただけるようにご対応させていただきます。</p>
              </div>
              <div className="buttons">
                <div className="layout-button">
                  <a href="tel:0120-690-315" className="button target_this_site">電話で予約する</a>
                </div>
                <div className="layout-button">
                  <a href="mailto:info@hidacolle.com?subject=ヒダコレ家具 ブランドサイトからのお問合せ / (from : ヒダコレ家具ショップ)" className="button target_this_site">メールで予約する</a>
                </div>
                <div className="layout-button">
                  <Link href='/contact' legacyBehavior><a className="button target_this_site">メールフォームから予約する</a></Link>
                </div>
              </div>
            </section>

            <section className="box-information">
              <h3>店舗情報</h3>
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
                    <td>水曜日・木曜日</td>
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d405.1059066814633!2d137.2428516390083!3d36.13780195561022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6002bb3029696093%3A0x7e8859fab0c483b8!2z6aOb6aio44Kz44Os44Kv44K344On44OzIOOBj-OCieOBl-OBruWItuS9nOaJgA!5e0!3m2!1sja!2sjp!4v1675304020323!5m2!1sja!2sjp"></iframe>
            <div className="layout__button">
            </div>
            <div className="layout__button_centering">
              <div className="layout-button">
                <Link href='https://g.page/hidacolle?share' legacyBehavior><a className="button target_blank" target="_blank">Google mapでみる</a></Link>
              </div>
            </div>
          </section>

          <section className="box-calender">
            <h3>営業日カレンダー</h3>
            <iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showTz=0&amp;height=480&amp;wkst=1&amp;bgcolor=%23f9f8f4&amp;src=puqgcifs2jjoq12pv12hluutog%40group.calendar.google.com&amp;color=%239bc693&amp;ctz=Asia%2FTokyo"></iframe>
          </section>

        </div>
      </>
    );
};

export default Home;