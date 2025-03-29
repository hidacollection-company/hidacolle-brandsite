import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'

import PageHead from 'components/PageHead/PageHead'
import { Links } from 'components/Ichimaiita/Links'
import { CustomFurnitureList } from 'components/CustomFurniture/CustomFurnitureList'
import { OriginalProductsList } from 'components/OriginalProducts/OriginalProductsList'

import {Link as Scroll} from "react-scroll"

import data from 'list-original-prodacts.json'

// Wordpress graphql
import { getAllPosts } from "lib/wpapi";

export async function getStaticProps(context) {

  const allPosts = await getAllPosts();

  console.log("==============INDEX==============");
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

    const postLists = data.postLists;

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

        <section className="contents-body body-index">
          <section className="box__main_visual">
            <Image
              src={hero_image}
              alt="ヒダコレ家具ショップの店内写真"
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
            <div className="bg__illust">
              <Image src="/images/index/maruta_project.jpg" alt="丸太プロジェクトのイラスト" width={595} height={842} />
            </div>
          </section>

          <section className="box-hidacolle_items">

            <div className="heading-hidacolle_items">
                <div className="title">ヒダコレの家具一覧</div>
                <div className="caption">
                  工房、ショップから<br />
                  ヒダコレの作っている家具、取り組んでいること<br />
                  気になる商品をクリックしてみてください
                </div>
            </div>

            <div className="layout-hidacolle_items">
              <div className="layout-left">
                <div className="item">
                  <Scroll to="furniture_studio" smooth={true} duration={600} offset={-165}>
                    <div className="item-heading">
                      <div className="catch">Furniture studio</div>
                      <div className="title">工房</div>
                    </div>
                    <div className="item-body">
                        <div className="item-images single">
                          <Image
                            src="/images/index/furniture-studio.svg"
                            alt="ヒダコレ 家具工房"
                            width={456}
                            height={362}
                          />
                        </div>
                    </div>
                  </Scroll>
                  <Scroll className="absolute_1 button-hidacolle_items" to="furniture_studio" smooth={true} duration={600} offset={-165}>
                    ヒダコレ 家具工房
                  </Scroll>
                </div>
                <div className="item">
                  <div className="item-heading">
                    <div className="catch">Furniture</div>
                    <div className="title">作っている家具</div>
                  </div>
                  <div className="item-body">
                    <div className="body-layout furniture-layout">
                      <div className="item-image">
                        <Scroll to="costum_furniture" smooth={true} duration={600} offset={-105}>
                          <Image
                            src="/images/index/map-1.jpg"
                            alt="カスタムオーダー"
                            width={281}
                            height={188}
                          />
                        </Scroll>
                        <Scroll className="relative button-hidacolle_items" to="costum_furniture" smooth={true} duration={600} offset={-105}>
                          カスタムオーダー
                        </Scroll>
                      </div>
                      <div className="item-image">
                        <Scroll to="ichimaiita_furiniture" smooth={true} duration={600} offset={-105}>
                          <Image
                            src="/images/index/map-2.jpg"
                            alt="一枚板の家具"
                            width={281}
                            height={188}
                          />
                        </Scroll>
                        <Scroll className="relative button-hidacolle_items" to="ichimaiita_furiniture" smooth={true} duration={600} offset={-105}>
                          一枚板の家具
                        </Scroll>
                      </div>
                    </div>
                    <div className="body-layout furniture-layout">
                      <div className="item-image">
                        <Scroll to="maintenance_and_repair" smooth={true} duration={600} offset={-165}>
                          <Image
                            src="/images/index/map-7.jpg"
                            alt="家具のメンテナンスや修理"
                            width={281}
                            height={188}
                          />
                        </Scroll>
                        <Scroll className="relative button-hidacolle_items" to="maintenance_and_repair" smooth={true} duration={600} offset={-165}>
                          家具のメンテナンスや修理
                        </Scroll>
                      </div>
                      <div className="item-image">
                        <Scroll to="original_products" smooth={true} duration={600} offset={-165}>
                          <Image
                            src="/images/index/map-4.jpg"
                            alt="オリジナルプロダクト"
                            width={281}
                            height={188}
                          />
                        </Scroll>
                        <Scroll className="relative button-hidacolle_items" to="original_products" smooth={true} duration={600} offset={-165}>
                          オリジナルプロダクト
                        </Scroll>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="layout-right">
                <div className="item">
                  <Scroll to="flagship_shop" smooth={true} duration={600} offset={-165}>
                    <div className="item-heading">
                      <div className="catch">FLAGSHIP SHOP</div>
                      <div className="title">ショップ</div>
                    </div>
                    <div className="item-body">
                      <div className="item-images">
                        <Image
                          src="/images/index/flagshipshop.svg"
                          alt="ヒダコレ 家具ショップ"
                          width={422}
                          height={582}
                        />
                      </div>
                    </div>
                  </Scroll>
                  <Scroll className="absolute_2 button-hidacolle_items" to="flagship_shop" smooth={true} duration={600} offset={-165}>
                    ヒダコレ 家具ショップ
                  </Scroll>
                </div>
                <div className="item">
                  <div className="item-heading">
                    <div className="catch">PROJECT</div>
                    <div className="title">取り組んでいること</div>
                  </div>
                  <div className="item-body">
                    <div className="body-layout project-layout">
                      <div className="item-image">
                        <Scroll to="maruta_project" smooth={true} duration={600} offset={-165}>
                          <Image
                            src="/images/index/map-5.jpg"
                            alt="丸太から家具を考える"
                            width={200}
                            height={200}
                          />
                        </Scroll>
                        <Scroll className="relative button-hidacolle_items" to="maruta_project" smooth={true} duration={600} offset={-165}>
                          丸太から家具を考える
                        </Scroll>
                      </div>
                      <div className="item-image">
                        <Scroll to="maintenance_project" smooth={true} duration={600} offset={-165}>
                          <Image
                            src="/images/index/map-6.jpg"
                            alt="おうちでメンテナンス"
                            width={200}
                            height={200}
                          />
                        </Scroll>
                        <Scroll className="relative button-hidacolle_items" to="maintenance_project" smooth={true} duration={600} offset={-165}>
                          おうちでメンテナンス
                        </Scroll>
                      </div>
                      <div className="item-image">
                        <Scroll to="ichimaiita_appraisal_and_purchase" smooth={true} duration={600} offset={-165}>
                          <Image
                            src="/images/index/map-8.jpg"
                            alt="一枚板の査定・買取"
                            width={200}
                            height={200}
                          />
                        </Scroll>
                        <Scroll className="relative button-hidacolle_items" to="ichimaiita_appraisal_and_purchase" smooth={true} duration={600} offset={-165}>
                          一枚板の査定・買取
                        </Scroll>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="map_title">
              <div className="catch">Furniture</div>
              <div className="title">作っている家具</div>
          </div>

          <section id="ichimaiita_furiniture" className="box-ichimaiita_furiniture">
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
            <div className="box-body">
              <div className="body-head">
                <h2>一枚板の家具</h2>
                <p>ヒダコレ工房では、お好みの一枚板からテーブルやカウンター、デスクやテレビボードなど、お客様のご希望に応じて色々な一枚板家具をお作りできます。</p>
                <div className="layout-button">
                  <Link href='/ichimaiita' legacyBehavior><a className="button target_this_site">一枚板の家具をみる</a></Link>
                </div>
              </div>
            </div>
          </section>

          <section id="costum_furniture" className="box-costum_furniture">
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

          <section id="maintenance_and_repair" className="box-maintenance_and_repair">
            <div className="box-heading box-layout">
              <div className="heading_en">
                <p>
                  Maintenance<br className="pc_only" /> and repair
                </p>
              </div>
              <div className="heading_ja">
                <h1>
                  家具を<br />
                  メンテナンスや<br />
                  修理して使う
                </h1>
              </div>
            </div>
            <div className="box-body">
              <div className="heading--head">
                <div className="images">
                  <img className='bg' src="/images/ichimaiita/maintenace/002/top.png" alt="" />
                </div>
              </div>
              <div className="heading--body">
                <div className="introduction--head">
                  <span className="en">Regeneration furniture</span>
                  <h2>再生家具</h2>
                  <p className="caption">まだ使える家具なので、<br />できれば捨てずに、<br />次の世代につかい、つなげたい。</p>
                </div>
                <div className="introduction--body">
                  <p>やっぱりもう「物」を大量に生産して、大量に消費することができなくなりそうです。だから、私たちもこれからは暮らしや地域、自然のことを、もっと一生懸命に考えて家具を作っていこうと思います。</p>
                  <p>今まで使ってきた家具はメンテナンスや修理をすることで、まだまだ長く使える可能性があります。</p>
                </div>
                <div className="layout-button">
                  <Link href='/ichimaiita/maintenance/' legacyBehavior><a className="button target_this_site">家具のメンテナンスや修理をみる</a></Link>
                </div>
              </div>
            </div>
          </section>

          <section id="online_challnege" className="box-online_challnege">
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
                <li><Image src="/images/order-tables/m001.jpg" alt="オーダーテーブルのイメージ写真 その1" width={1280} height={855} /></li>
                <li><Image src="/images/order-tables/m002.jpg" alt="オーダーテーブルのイメージ写真 その2" width={1280} height={855} /></li>
                <li><Image src="/images/order-tables/m003.jpg" alt="オーダーテーブルのイメージ写真 その3" width={1280} height={855} /></li>
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

            <section id="original_products" className="box-original_products">
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
                        src="/images/original-products/001.jpg"
                        alt="ヒダコレのオリジナルプロダクト『衣桁3連』の写真"
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
                        alt="ヒダコレのオリジナルプロダクト『Xハンガーラック』の写真"
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
                  src="/images/handcrafts-of-hida/bg_index.png"
                  alt="飛騨の手仕事イメージ写真"
                  width={746}
                  height={906}
                />
              </div>
            </section>
          </section>

          <div className="map_title">
              <div className="catch">Flagship shop</div>
              <div className="title">ショップ</div>
          </div>

          <section id="flagship_shop" className="box-flagship_shop">
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
                    営業時間 : 9:30-17:30（水・木 定休）<br />
                    駐車場有り
                  </div>
                </div>
              </div>
              <div className="box-layout_right">
                <ul className="images-flagship_shop">
                  <li>
                    <figure>
                      <Image
                        src="/images/index/flagshipshop_001.jpg"
                        alt="ヒダコレ家具ショップ『一枚板の家具』の写真"
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
                        src="/images/index/flagshipshop_002.jpg"
                        alt="ヒダコレ家具ショップ『丸太から家具を考えるプロジェクト』の写真"
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
                      src="/images/index/flagshipshop_003.jpg"
                      alt="地元の農家さんから譲っていただいた80年前の稲架棒から什器"
                      width={1280}
                      height={855}
                    />
                    <figcaption>地元の農家さんから譲っていただいた<br />80年前の稲架棒から什器を。</figcaption>
                  </figure>
                </li>
                <li>
                  <figure>
                    <Image
                      src="/images/index/flagshipshop_004.jpg"
                      alt="飛騨で活躍するクラフト作家。手仕事による地元の工芸品を紹介。"
                      width={1280}
                      height={855}
                    />
                    <figcaption>飛騨で活躍するクラフト作家。<br />手仕事による地元の工芸品を紹介。</figcaption>
                  </figure>
                </li>
                <li>
                  <figure>
                    <Image
                      src="/images/index/flagshipshop_005.jpg"
                      alt="考える家具って、お客様と一緒に考えて・一緒につくる家具です。"
                      width={1280}
                      height={855}
                    />
                    <figcaption>考える家具って、<br />お客様と一緒に考えて・一緒につくる家具です。</figcaption>
                  </figure>
                </li>
                <li>
                  <figure>
                    <Image
                      src="/images/index/flagshipshop_006.jpg"
                      alt="国道158号線に面したエントランス。白い空間と丸太が目印です。"
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

          <div className="map_title">
              <div className="catch">Furniture studio</div>
              <div className="title">工房</div>
          </div>

          <section id="furniture_studio" className="box-furniture_studio">
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
                  src="/images/furniture-studio/bg_index.png"
                  alt="ヒダコレ 家具工房のイメージ写真"
                  width={597}
                  height={1206}
                />
              </div>
          </section>

          <div className="map_title">
              <div className="catch">Project</div>
              <div className="title">取り組んでいること</div>
          </div>

          <section id="maruta_project" className="box-maruta_project">
            <div className="catch-maruta_project">
              <h1>丸太から家具を考える<br />プロジェクト</h1>
              <p>MARUTA Project</p>
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
          </section>

          <section id="maintenance_project" className="box-maintenance_project">
            <div className="catch-maintenance_project">
              <h1>おうちでメンテナンス<br />プロジェクト</h1>
              <p>OUCHI DE MAINTENANCE Project</p>
            </div>
            <div className="images">
              <Image
                src="/images/index/maintenance-project.jpg"
                alt="大きな丸太を循環させるのイメージ写真"
                width={484}
                height={652}
              />
            </div>
            <div className="contents-maintenance_project">
              <p className="lead-maintenance_project">大切な家具を、<br />もっと大切にする</p>
              <div className="bold-maintenance_project">
                <p>愛着を持って長くテーブルを使っているとシミや傷、汚れが付きます。</p>
                <p>それは、お子さんが赤ちゃんの時に噛んでできた傷や、初めて書いた落書きなど、よくみると思い出がたくさん詰まったテーブルになっています。</p>
                <p>そういった傷や汚れを"愛着"として残すことで、思い出の積み重ねが良い風合いとなって、より素敵なテーブルにしてくれると思っています。</p>
              </div>
            </div>
            <div className="block-index">
              <div className="head-index">INDEX</div>
              <div className="list-index">
                <Link href='/maintenance-project/#introduction' legacyBehavior>メンテナンスする暮らし</Link>
                <Link href='/maintenance-project/#table_trouble' legacyBehavior>よくあるテーブルのお困りごと</Link>
                <Link href='/maintenance-project/#no_wiping' legacyBehavior>テーブルは「水拭き」してはいけない！</Link>
                <Link href='/maintenance-project/#how_to' legacyBehavior>実際にやってみよう！テーブルのメンテナンス方法は。</Link>
                <Link href='/maintenance-project/#recommendation' legacyBehavior>簡単にできる「おうちでメンテナンス」のススメ</Link>
              </div>
            </div>
            <div className="layout-button">
              <Link href='/maintenance-project/' legacyBehavior><a className="button target_this_site"><span className='pc_only'>おうちで</span>メンテナンスプロジェクト<span className='pc_only'>をみる</span></a></Link>
            </div>
          </section>

          <section id="ichimaiita_appraisal_and_purchase" className="box-ichimaiita_appraisal_and_purchase">
            <div className="catch-maintenance_project">
              <h1>一枚板の査定・買取</h1>
              <p>appraisal and purchase</p>
            </div>
            <div className="body">
              <p>
                長年大切に使ってきたテーブルです。「捨てるのは忍びない」という気持ちの方も多いと思います。<br />
                ヒダコレでは、ご家庭のお部屋でできる範囲の作業を「メンテナンス」と呼んでおり、工房設立当初から２０年ほど、お部屋へ出張訪問をしてテーブルをきれいにするサービスを継続しています。
              </p>
              <div className="things_you_can_buy">
                <div className="head-things_you_can_buy">
                  <div className="title">一枚板として査定・買取できます</div>
                </div>
                <div className="body-things_you_can_buy">
                  <img src="/images/ichimaiita/maintenace/002/things_you_can_buy-1.png" alt="ヒダコレ家具が査定・買取できるもの" />
                </div>
              </div>
            </div>
            
            <div className="layout-button">
              <Link href='/ichimaiita/maintenance/#appraisal-and-purchase' legacyBehavior><a className="button target_this_site">一枚板の査定・買取をみる</a></Link>
            </div>
          </section>

          <section id="initiatives_for_work_styles" className="box-initiatives_for_work_styles">
            <div className="layout--left">
              <div className="catch-initiatives_for_work_styles">
                <h1>働き方への取り組み</h1>
                <p className="caption">次世代育成支援対策推進法に基づく一般事業主行動計画</p>
              </div>
              <div className="body">
                <p>
                  日本における職場環境や女性が働きやすい環境づくり、<br />
                  また時間外労働など、取り組むべき課題が多くあります。<br />
                  ヒダコレ家具では、働く社員にとって、当社が働きやすく、<br />
                  より良い職場環境となることを考え、実行します。
                </p>
              </div>
              <div className="layout-button">
                <Link href='/initiatives-for-work-styles' legacyBehavior><a className="button target_this_site">働き方への取り組み</a></Link>
              </div>
            </div>
            <div className="images">
              <Image
                src="/images/index/initiatives-for-work-styles.jpg"
                alt="「働き方への取り組み」のイメージ写真"
                width={660}
                height={435}
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
          <section className="box-hidacolle_note">
            <div className="layout-hidacolle_note">
              <div className="heading-hidacolle_note">
                <div className="heading-title-inner">
                  <div className="logos">
                    <div className="box__logomark">
                      <div className="logomark">
                        <Image
                          src="/mark-note.svg"
                          alt="ヒダコレノートロゴマーク"
                          width={64}
                          height={34}
                        />
                      </div>
                      <div className="line">ヒダコレノート</div>
                    </div>
                    <div className="logotype">HIDACOLLE <br className="pc_only" />NOTE</div>
                  </div>
                  <div className="caption">森から、家具づくり、そして暮らしまで<br />ヒダコレにまつわるお話</div>
                </div>
                <div className="layout-button">
                  <Link href='/note' legacyBehavior><a className="button target_this_site">ヒダコレノートをよむ</a></Link>
                </div>
              </div>
              <div className="contents">
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

          </section>
        </section>
      </>
    );
};

export default Home;