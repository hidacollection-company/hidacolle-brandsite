import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'

import PageHead from 'components/PageHead/PageHead'
import { Links } from 'components/Ichimaiita/Links'
import { CustomFurnitureList } from 'components/CustomFurniture/CustomFurnitureList'
import { OriginalProductsList } from 'components/OriginalProducts/OriginalProductsList'

import data from 'list-original-prodacts.json'

// Wordpress REST API
import { wpClient } from "lib/wpapi";

export const getStaticProps = async () => {

  const page_data = await wpClient.pages();

  console.log(page_data);

  return {
    props: {
      page_data
    }
  };
};

type Props = {
  page_data: any;
}

const Home: NextPage<Props> = ({ page_data }) => {

    const postLists = data.postLists;

    // const hero_image = page_data.hero_image
    const hero_image = "/images/index/001.jpg"

    return (

      <>
        <PageHead
          pageTitle = ""
          pageDescription = ""
          pageRobots = ""
          pagePath = ""
          pageImg = ""
          pageImgWidth = ""
          pageImgHeight = ""
        />

        {/* <p>{JSON.stringify(page_data)}</p> */}

        <section className="contents-body body-index">
          <section className="box__main_visual">
            <Image
              // loader={myLoader}
              src={hero_image}
              alt="Picture of the author"
              width={1180}
              height={680}
            />
          </section>
          <section className="box-home_about">
            <h1 className="heading-home_about">丸太から<br />一枚板と<br className='sp_only' />カスタムオーダー家具</h1>
            <p className="title-home_about">なぜ「丸太から」？</p>
            <p className="text-home_about">SDGsの中に「つくる責任 つかう責任」という目標があります。<br />単なる資材としての木材から家具を作るのではなく、木材はもともと丸太であって、森で木として生きていたことを考えながら家具づくりをすることで、自然・社会・地域に少しでも「つくる責任」を果たせるように努めたいと考えています。</p>
          </section>
          <section className="box-thinking_furniture">
            <h1 className="heading-thinking_furniture">考える家具</h1>
            <div className="title-thinking_furniture">
              <p>ものづくりを起点に、暮らしを考えるきっかけを提供したい。</p>
              <p>小さな共感を大切に社会とつながり、自然とつながり、「考えること」の輪をつくりたい。</p>
              <p>やはりもう「物」を大量に生産して、大量に消費することができなくなりそうですね。</p>
              <p>だからこそ、私たち「つくる手」とお客様の「つかい手」が一緒になって考えることの必要性を感じています。</p>
            </div>
            <div className="layout__centering">
              <div className="layout-button">
                <Link href='/furniture-that-thinks' legacyBehavior><a className="button target_this_site">考える家具とは</a></Link>
              </div>
            </div>
          </section>
          <section className="box-maruta_project">
            <div className="catch-maruta_project">
              <p>MARUTA <br className='pc_only' />Project</p>
              <h1>丸太から家具を<br className='sp_only' />考えるプロジェクト</h1>
            </div>
            <div className="contents-maruta_project">
              <p className="lead-maruta_project">「丸太から家具を<br className='sp_only' />考えるプロジェクト」とは、</p>
              <div className="bold-maruta_project">
                <p>ヒダコレの家具は、無垢の木で作られています。その無垢の木は元は丸太であり、森で育っていたのです。</p>
                <p>みなさんに家具づくりを通して、丸太を感じていただき、森を知っていただきたいと思っています。</p>
                <p>それと同時に、その森を守っていく必要性も感じています。</p>
                <p>私たちは、森を守るための一つの方法として「丸太」というものをベースにして、川上の「森」と川下の「暮らし」をつなげていきたいと考えています。</p>
              </div>
              <div className="list-maruta_project">
                <section className="section-maruta_project">
                  <div className="visual-maruta_project">
                    <Image
                      // loader={myLoader}
                      src="/images/small-log/001.jpg"
                      alt="大きな丸太を循環のイメージ写真"
                      width={1280}
                      height={855}
                    />
                  </div>
                  <div className="inner-maruta_project">
                    <h2>小さな丸太を生かす</h2>
                    <p>飛騨の森の広葉樹はまとめて伐採され、そのほとんどがチップとして消費されています…</p>
                    <div className="layout_layout_centering">
                      <div className="layout-button">
                        <Link href='/small-log' legacyBehavior><a className="button target_this_site">小さな丸太を生かすとは</a></Link>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="section-maruta_project">
                  <div className="visual-maruta_project">
                    <Image
                      // loader={myLoader}
                      src="/images/large-log/001.jpg"
                      alt="大きな丸太を循環させるのイメージ写真"
                      width={1280}
                      height={855}
                    />
                  </div>
                  <div className="inner-maruta_project">
                    <h2>大きな丸太を循環させる</h2>
                    <p>もう日本の山々には、テーブル用の一枚板が取れるような大きな木は残されていません…</p>
                    <div className="layout_layout_centering">
                      <div className="layout-button">
                        <Link href='/large-log' legacyBehavior><a className="button target_this_site">大きな丸太を循環させるとは</a></Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="bg__illust">
              <Image src="/images/index/maruta_project.jpg" alt="丸太プロジェクトのイラスト" width={595} height={842} />
            </div>
          </section>
          <section className="box-ichimaiita_furiniture">
            <div className="box-heading box-layout">
              <div className="heading_en">
                <p>Ichimaiita<br />furniture</p>
              </div>
              <div className="heading_ja">
                <h1>ヒダコレの一枚板は、</h1>
                <div className='caption'>
                  <p>大径木の大きな一枚板を次の世代まで長く使っていただくために、その希少な一枚板を大切に一生懸命に作りあげること、お客様にも大切に一生懸命に使っていただくことを共有したくって、「一枚板の家具」の製作に取り組んでいます。</p>
                  <p>また地域の仕事の場、お客様の暮らしの場の中には使われなくなった一枚板やテーブルがたくさんあります。まだまだ再生可能な、そのテーブルたちのメンテナンス・修理・買い取りにも取り組むことで、一枚板や無垢テーブルの循環のことも一緒に考えていきたいと思っています。</p>
                  <p>ヒダコレには、全国からたくさんの一枚板が揃ってますので、ぜひ希少な美しい一枚板をご覧ください。</p>
                </div>
              </div>
            </div>

            <div className="layout__Link">
              <Links
                index_contents = {true}
                this_page_ichimaiita_index = {false}
                this_page_ichimaiita_other = {false}
              />
            </div>

          </section>

          <section className="box-costum_furniture">
            <div className="box-heading box-layout">
              <div className="heading_en">
                <p>Costum<br />furniture</p>
              </div>
              <div className="heading_ja">
                <h1>ヒダコレの<br />カスタムオーダー家具は、</h1>
                <div className='caption'>
                  <p>ちょっとしたお部屋のお困りごとを解決する「お気軽なオーダー家具」を目指しています。</p>
                  <p>お客様の声に耳を傾け、そして設計からお見積もりまで無料ですので、みなさん「お試し感覚」で何でも言っていただいています。</p>
                  <p>メーカー既製品家具では見つからない、お客様の「本当にほしい家具」をお作りしたいと思っています。</p>
                  <p>棚板一枚からでもお作りすることができますので、まずはお気軽にお問い合わせください。</p>
                </div>
                <div className="layout-button">
                  <Link href='/custom-furniture' legacyBehavior><a className="button target_this_site">カスタムオーダー家具をみる</a></Link>
                </div>
              </div>
            </div>

            <div className="listcontents-make">
              <div className="heading-make">
                <p>本当に欲しい家具は<br />買うものではなく<br className='sp_only' />「つくる」もの</p>
              </div>
              <ul className="list-make">
                <li>
                  <div className="heading-list_make">まずは何でもお気軽に<br />ご相談ください</div>
                  <div className="inner-list_make">本当にほしい家具、必要としている家具、お部屋にピッタリの家具は、お客様のそれぞれのお部屋や暮らし方によって違うので、なかなか既製品では見つかりません。</div>
                </li>
                <li>
                  <div className="heading-list_make">お客様に合った家具の<br />設計をします</div>
                  <div className="inner-list_make">お困りごとやご希望をお聞きしながら家具の設計図を作っていきます。メールのやり取りが主流で、何度も聞き取りをして図面修正しながらの打合せも無料対応です。</div>
                </li>
                <li>
                  <div className="heading-list_make">お見積り後のご判断で<br />大丈夫です</div>
                  <div className="inner-list_make">デザインやサイズなど、ご希望の仕様が決まってきましたら「お見積り」のご案内をさせていただきます。その後のご注文ですので、まずは「お試し感覚」でご相談ください。</div>
                </li>
              </ul>
            </div>

            <div className="layout__CustomFurnitureList">
              <CustomFurnitureList
                title = "ヒダコレのカスタムオーダー家具は<br />こんなことができます"
              />
            </div>

            <ul className="buttons">
              <li>
                <div className="layout-button">
                  <Link href='/custom-furniture' legacyBehavior><a className="button target_this_site">カスタムオーダー家具をみる</a></Link>
                </div>
              </li>
              <li>
                <div className="layout-button">
                  <Link href='/contact' legacyBehavior><a className="button target_this_site">相談・お問合せをする</a></Link>
                </div>
              </li>
            </ul>

          </section>

          <section className="box-online_challnege">
            <div className="heading-online_challnege">
              <p className="text">オンラインチャレンジ</p>
              <p className="heading">Online<br />challenge</p>
              <p className="text">ゆっくりおうちで家具えらび<br />全国どこでもつながるヒダコレ家具の<br />オンラインの取り組み</p>
            </div>
            <div className="box-whats_online_challenge">
              <p className="text-en">What's Online challenge</p>
              <p className="title-ja">オンラインチャレンジ<br className='sp_only' />ってなに?</p>
              <p className="text-ja">全国の方にヒダコレの家具を使っていただきたいという思いから、<br />３つのオンライン販売の取り組みを始めました。</p>
              <ol>
                <li>オーダーテーブルのネット注文が簡単にできるように</li>
                <li>すぐに暮らしに役立つインテリア家具の開発</li>
                <li>飛騨の陶器やガラスなどのクラフト作家の紹介</li>
              </ol>
              <p className="caption">ぜひオンラインショップもご覧になってみてください。</p>
            </div>
            <section className="box-order_tables_online">
              <div className="heading-order_tables_online">
                <div className="box-layout_left">
                  <h2>オーダーテーブルを<br />ネットで</h2>
                  <p>Order tables. Online.</p>
                </div>
                <div className="box-layout_right">
                  <p>オーダーテーブルのネット注文が<br />簡単にできるように</p>
                </div>
              </div>
              <div className="title-order_tables_online">
                <p>飛騨の家具がほしい、無垢のオーダーテーブルがほしいという全国のお客様に、ヒダコレの簡単にできる「ネットオーダー」をお届けしたいと思います。</p>
                <p>お客様の声を形にしたオーダー家具をたくさん手掛けてきたヒダコレだからこそ、ネットでも安心できるオーダー注文が可能になりました。</p>
              </div>
              <ul className="listcontents-order_tables_online">
                <li>
                  <div className="heading-list_order_tables_online">ネットで天板を選ぶ</div>
                  <div className="inner-list_order_tables_online">耳付きの自然木の天板、丸や四角や楕円など形もいろいろお作りできます。また７つの樹種から木を選ぶこともできます。</div>
                </li>
                <li>
                  <div className="heading-list_order_tables_online">ネットで脚を選ぶ</div>
                  <div className="inner-list_order_tables_online">ホタテタイプやロの字タイプ、座卓になる兼用脚などデザインも豊富で、鉄でつくるアイアン脚も選ぶことができます。</div>
                </li>
                <li>
                  <div className="heading-list_order_tables_online">注文してあとは待つだけ</div>
                  <div className="inner-list_order_tables_online">ご注文はボタン一つで簡単にできます。その他サイズ対応や仕様の変更などは、お問合せフォームからお問合せください。</div>
                </li>
              </ul>
              <ul className="images-order_tables_online">
                <li><Image src="/images/order-tables/m001.jpg" alt="Picture of the author" width={1280} height={855} /></li>
                <li><Image src="/images/order-tables/m002.jpg" alt="Picture of the author" width={1280} height={855} /></li>
                <li><Image src="/images/order-tables/m003.jpg" alt="Picture of the author" width={1280} height={855} /></li>
              </ul>
              <ul className="buttons">
                <li>
                  <div className="layout-button">
                    <Link href='/order-tables' legacyBehavior><a className="button target_this_site">オーダーテーブルをみる</a></Link>
                  </div>
                </li>
                <li>
                  <div className="layout-button">
                    <Link href='https://hida-collection.shop/view/page/oder-tables' legacyBehavior><a className="button target_blank" target="_blank">オンラインショップでみる</a></Link>
                  </div>
                </li>
              </ul>
            </section>

            <section className="box-original_products">
              <div className="heading-original_products">
                <div className="box-layout_left">
                  <h2>こんな家具の<br />ある暮らし</h2>
                  <p>Original products</p>
                </div>
                <div className="box-layout_right">
                  <p>すぐに暮らしに役立つ<br />インテリア家具の開発</p>
                </div>
              </div>
              <ul className="images-original_products">
                  <li>
                    <figure>
                      <Image
                        // loader={myLoader}
                        src="/images/original-products/001.jpg"
                        alt="Picture of the author"
                        width={1000}
                        height={213}
                      />
                      <figcaption>シンプルだから今ある家具に合わせて使える</figcaption>
                    </figure>
                  </li>
                  <li>
                    <figure>
                      <Image
                        // loader={myLoader}
                        src="/images/original-products/002.jpg"
                        alt="Picture of the author"
                        width={1000}
                        height={213}
                      />
                      <figcaption>使わない時は隙間に収納できるくらい小さく</figcaption>
                    </figure>
                  </li>
                </ul>
                <div className="caption-original_products">
                  <p>ヒダコレでは、すぐに暮らしに役立つインテリア家具、収納、小物などの開発を手掛けています。こんな家具あると便利だなあ、使いやすいなあ、というアイデアやお客様の声を形にしています。</p>
                  <p>オリジナルのインテリア家具は、飛騨高山の直営店舗でも、オンランショップでもすぐにご購入いただけます。</p>
                  <p>こたつ、ちゃぶ台、ハンガーラック、収納ボックス、スツールなどなど、ぜひご覧ください。</p>
                </div>

                <section className="box-products">
                  <p className='heading-products'>商品の一部をご紹介</p>
                  <div className="layout__lists-products">
                    {postLists.map((post, index) =>
                      <OriginalProductsList
                        key = {index}
                        id = {post.id}
                        hidacolle_number = {post.hidacolle_number}
                        item_name = {post.item_name}
                        caption = {post.caption}
                        ec_url = {post.ec_url}
                        index = {true}
                      />
                    )}
                  </div>
                </section>

                <ul className="buttons">
                  <li>
                    <div className="layout-button">
                      <Link href='/original-products' legacyBehavior><a className="button target_this_site">インテリア家具をみる</a></Link>
                    </div>
                  </li>
                  <li>
                    <div className="layout-button">
                      <Link href='https://hida-collection.shop/' legacyBehavior><a className="button target_blank" target="_blank">オンラインショップでみる</a></Link>
                    </div>
                  </li>
                </ul>

            </section>

            <section className="box-handicrafts_of_hida">
              <div className="heading-handicrafts_of_hida">
                <h2>飛騨の手仕事</h2>
                <p>Handicrafts of Hida</p>
              </div>
              <div className="contents-handicrafts_of_hida">
                <p className="title-contents_handicrafts_of_hida">飛騨の陶器やガラスなどの<br />クラフト作家の紹介</p>
                <div className="text-contents_handicrafts_of_hida">
                  <p>飛騨の家具だけではなく、陶器やガラス、布、張り子など多くのクラフト作家が製作活動をしています。</p>
                  <p>「日々の暮らしを豊かに」という思いは、ヒダコレの家具づくりと同じです。</p>
                  <p>飛騨高山という場所で一緒にモノづくりをしている仲間を、ヒダコレ目線でご紹介したいと思います。</p>
                </div>
                <div className="layout__centering">
                  <div className="layout-button">
                    <Link href='/handcrafts-of-hida' legacyBehavior><a className="button target_this_site">飛騨の手仕事をみる</a></Link>
                  </div>
                </div>
              </div>
              <div className="bgimage-handicrafts_of_hida">
                <Image
                  // loader={myLoader}
                  src="/images/handcrafts-of-hida/bg_index.png"
                  alt="Picture of the author"
                  width={746}
                  height={906}
                />
              </div>
            </section>
          </section>
          <section className="box-flagship_shop">
            <div className="box-layout">
              <div className="box-layout_left">
                <div className="heading-flagship_shop">
                  <p>Flagship shop</p>
                </div>
                <p className="small-flagship_shop">森と、丸太と、出会える場所</p>
                <h2 className="title-flagship_shop">ヒダコレ 家具ショップ</h2>
                <div className="text-flagship_shop">
                  <p>ものづくりを起点に、暮らしを考えるきっかけを提供したい。</p>
                  <p>小さな共感を大切に社会とつながり、自然とつながり、「考えること」の輪をつくりたい。</p>
                  <p>そのお客様と一緒に考える家具を、見て・触れて・体験していただける「場」「ショップ」を作りました。</p>
                  <p>またヒダコレの家具から、木のこと、丸太のこと、森のこと、そして飛騨のことを知っていただくことで、</p>
                  <p>みなさんの地元地域のことも考えるきっかけになるといいなって思っています。</p>
                </div>
                <div className="layout-button">
                  <Link href='/flagshipshop' legacyBehavior><a className="button target_this_site">ヒダコレ 家具ショップをみる</a></Link>
                </div>
                <div className="information-flagship_shop">
                  <div className="heading-information_flagship_shop"><p>営業情報</p></div>
                  <div className="inner-information_flagship_shop">
                    〒506-0055<br />
                    岐阜県高山市上岡本町3-362<br />
                    フリーダイヤル : 0120-690-315<br />
                    営業時間 : 9:30-17:30 （水曜日 定休）<br />
                    駐車場有り
                  </div>
                </div>
              </div>
              <div className="box-layout_right">
                <ul className="images-flagship_shop">
                  <li>
                    <figure>
                      <Image
                        // loader={myLoader}
                        src="/images/index/flagshipshop_001.jpg"
                        alt="Picture of the author"
                        width={1000}
                        height={213}
                      />
                      <figcaption>
                        <p className="small-images_flagship_shop">Ichimaiita furniture</p>
                        <p className="title-images_flagship_shop">一枚板の家具</p>
                      </figcaption>
                    </figure>
                  </li>
                  <li>
                    <figure>
                      <Image
                        // loader={myLoader}
                        src="/images/index/flagshipshop_002.jpg"
                        alt="Picture of the author"
                        width={1000}
                        height={213}
                      />
                      <figcaption>
                        <p className="small-images_flagship_shop">MARUTA Project</p>
                        <p className="title-images_flagship_shop">丸太から家具を考えるプロジェクト</p>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </div>
            </div>
            <div className="contents-flagship_shop">
              <p className="lead-contents_flagship_shop">木を知り、森を感じる。<br />家具を考え、地域につなげる。<br />飛騨高山の地で、<br className='sp_only' />そんなことを目指している<br className='sp_only' />家具工房です。</p>
              <ul className="list-contents__flagship_shop">
                <li>
                  <figure>
                    <Image
                      // loader={myLoader}
                      src="/images/index/flagshipshop_003.jpg"
                      alt="Picture of the author"
                      width={1280}
                      height={855}
                    />
                    <figcaption>地元の農家さんから譲っていただいた<br />80年前の稲架棒から什器を。</figcaption>
                  </figure>
                </li>
                <li>
                  <figure>
                    <Image
                      // loader={myLoader}
                      src="/images/index/flagshipshop_004.jpg"
                      alt="Picture of the author"
                      width={1280}
                      height={855}
                    />
                    <figcaption>飛騨で活躍するクラフト作家。<br />手仕事による地元の工芸品を紹介。</figcaption>
                  </figure>
                </li>
                <li>
                  <figure>
                    <Image
                      // loader={myLoader}
                      src="/images/index/flagshipshop_005.jpg"
                      alt="Picture of the author"
                      width={1280}
                      height={855}
                    />
                    <figcaption>考える家具って、<br />お客様と一緒に考えて・一緒につくる家具です。</figcaption>
                  </figure>
                </li>
                <li>
                  <figure>
                    <Image
                      // loader={myLoader}
                      src="/images/index/flagshipshop_006.jpg"
                      alt="Picture of the author"
                      width={1280}
                      height={855}
                    />
                    <figcaption>国道158号線に面したエントランス。<br />白い空間と丸太が目印です。</figcaption>
                  </figure>
                </li>
              </ul>
            </div>
            <div className="layout_centering">
              <div className="layout-button">
                <Link href='/flagshipshop' legacyBehavior><a className="button target_this_site">ヒダコレ 家具ショップをみる</a></Link>
              </div>
            </div>
          </section>
          <section className="box-furniture_studio">
            <div className="layout-furniture_studio">
              <p className="heading-furniture_studio">Furniture studio</p>
              <p className="small-furniture_studio">「家具づくり」を暮らしへ</p>
              <h3 className="title-furniture_studio">ヒダコレ 家具工房</h3>
              <div className="text-furniture_studio">
                <p>ヒダコレの家具には、品番や商品カタログはありません。</p>
                <p>家具は選んで買うのではなく、一緒に「つくる」ものだと思っているからです。</p>
                <p>お客様一人一人のご希望を聞きながら、それぞれのお部屋のサイズや形、暮らし方に合わせて、世界に一つだけのお客様オリジナルの家具を作らせていただいています。</p>
                <p>そのお客様の家具は、このヒダコレ家具工房から生まれています。</p>
              </div>
            </div>
            <div className="bgimage-furniture_studio">
                <Image
                  // loader={myLoader}
                  src="/images/furniture-studio/bg_index.png"
                  alt="Picture of the author"
                  width={597}
                  height={1206}
                />
              </div>
          </section>
          <section className="box-member">
            <div className="heading-box-member">
              <div className="box-layout_left">
                <p>HIDACOLLE<br />Member</p>
              </div>
              <div className="box-layout_right">
                <p>プロジェクトを支える多様な人</p>
                <h3>ヒダコレ メンバー</h3>
              </div>
            </div>
            <div className="image-box-member">
              <Image
                src="/images/index/member.jpg"
                alt="プロジェクトを支える多様な人 ヒダコレ メンバーの写真"
                width={1280}
                height={855}
              />
            </div>
            <div className="caption-box-member">
              <p>私達は10人ほどの小さな家具工房ですが、多種多様なメンバーがヒダコレの”考える家具”を支えてくれています。</p>
              <p>関わり方も人それぞれで、他の仕事と兼業で働くスタッフもいれば、個人事業主の屋号を持っているメンバーもいます。</p>
              <p>家具づくりを専門とするメンバーや、販促を専門とするメンバー、林業と掛け持ちするメンバーまで。</p>
              <p>多種多様なメンバーがお互いに関わり合った状態でプロジェクトが進んでいます。メンバーそれぞれのバックボーンがあるから面白く、だからこそ、お客様へお届けできるヒダコレならではの価値があると思っています。</p>
              <p>これからの時代、働き方はより多様化していくと思います。</p>
              <p>私達は「雇用」という考え方にこだわらず、そのメンバーに合った関係性を探りながらプロジェクトを進めています。</p>
            </div>
            <section className="recruit-box-member">
              <p className="title-recruit_box-member">”考える家具”を<br />一緒に育ててくれる<br />メンバーを募集しています。</p>
              <p className="bold-recruit_box-member">ヒダコレでは様々なポジションでメンバーを募集しています。<br />興味がある方はお気軽にご連絡ください。</p>
              <div className="layout-button">
                <Link href='/contact' legacyBehavior><a className="button target_this_site">こちらからご連絡ください</a></Link>
              </div>
            </section>
          </section>
        </section>
      </>
    );
};

export default Home;