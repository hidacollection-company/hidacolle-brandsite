import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import { GoToOnlineshop } from 'components/OnlineChallenge/GoToOnlineshop'

import {Link as Scroll} from "react-scroll"

const Home: NextPage = () => {
    return (
      <div className="contents-body body-order_tables">
        {/* パンクズ */}
        <div className="box__beadlist">
          <Link href={"/"} legacyBehavior>
            <a className="">ホーム</a>
          </Link>
          <span>&gt;</span>
          <span>オーダーテーブルをネットで</span>
        </div>

        <div className="box-heading_order_tables">
          <div className="layout__heading_order_tables">
            <div className="heading">
              <h1>オーダーテーブルを<br />ネットで</h1>
              <p>Order made table</p>
            </div>
            <p className='catch'>
              ネットでも簡単に<br />
              ご注文できるように、<br />
              セミオーダーテーブルを<br />
              考えました。
            </p>
            <div className='caption'>
              <p>ヒダコレのカスタムオーダー家具の中から、まずネットでも簡単にご注文いただけるようにセミオーダーテーブルを考えました。</p>
              <p>お客様のお部屋に合ったご希望サイズ、暮らし方に合った理想のデザインなど、無垢の木のバリエーションから天板を選んでいただき、そして木や鉄の脚をお選びいただくだけの簡単な工程です</p>
              <p>基本形のタイプの天板も、ホタテタイプやロの字タイプ、座卓になる兼用脚など定番の脚も、多彩なラインナップが揃っています。</p>
            </div>
            <div className="attention-heading">
              <p>通常の基本形以外のサイズやデザイン、またまったく違った家具のご相談などもお気軽に言ってくださいね。</p>
              <p>別途「お問合せフォーム」からお問合せいただきましたら、カスタムオーダー家具のご対応をさせていただきます。</p>
            </div>

            {/* absolute?? */}
            <div className="box-heading_images">
              <Image
                src="/images/order-tables/001.jpg"
                alt="Picture of the author"
                width={1280}
                height={855}
              />
              <Image
                src="/images/order-tables/002.jpg"
                alt="Picture of the author"
                width={1280}
                height={855}
              />
              <Image
                src="/images/order-tables/003.jpg"
                alt="Picture of the author"
                width={1280}
                height={855}
              />
            </div>
          </div>
        </div>

        <section className='box-introduction'>

          <div className="heading-introduction">
            <p className="title">オンラインショップを見る前に</p>
            <p className="caption">次の流れでご確認いただくと、<br />テーブル作りがもっと楽しくなります。</p>
          </div>

          <ul>
            <li>
              <span className="number">1</span>
              <figure>
                <Image
                  src="/images/order-tables/006.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>
                  <p className='title'>長さ・奥行き・高さを考える</p>
                  <p className='caption'>お部屋の広さからテーブル天板のサイズを考えることができます。4人掛けで、長さ１５００～１６００くらいが目安のサイズかと思います。</p>
                </figcaption>
              </figure>
              <Scroll to="contents-1" smooth={true} duration={600} offset={-150}>
                <div>詳しくみる</div>
              </Scroll>
            </li>
            <li>
              <span className="number">2</span>
              <figure>
                <Image
                  src="/images/order-tables/007a.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>
                  <p className='title'>7つの樹種から選ぶ</p>
                  <p className='caption'>ナチュラルな色目、濃い色目などお好みの木をお選びいただけます。床の色などは考えずに、お好みの木をお選びいただくのが最適な選択です。</p>
                </figcaption>
              </figure>
              <Scroll to="contents-2" smooth={true} duration={600} offset={-150}>
                <div>詳しくみる</div>
              </Scroll>
            </li>
            <li>
              <span className="number">3</span>
              <figure>
                <Image
                  src="/images/order-tables/008.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>
                  <p className='title'>基本形の脚を見る</p>
                  <p className='caption'>まずはヒダコレの定番の脚をご覧ください。木の脚・鉄の脚などいろいろなデザインの脚をご用意しています。もちろん高さもオーダー対応ができます。</p>
                </figcaption>
              </figure>
              <Scroll to="contents-3" smooth={true} duration={600} offset={-150}>
                <div>詳しくみる</div>
              </Scroll>
            </li>
          </ul>
        </section>

        <section id="contents-1" className="box-sizing">
          <div className="title">
            <div className="inner">
              <div className="heading">
                <span className="number">1</span>
                <h2>はじめにテーブルのご希望サイズ<br />長さ・奥行き・高さを考えてみてください</h2>
                <div className='caption'>
                  <p>お部屋の広さやご家族の人数、暮らし方などでサイズも変わってきますね。</p>
                  <p>テーブルの高さについては、 一般的な椅子の座面の高さ(４００～４２０ｍｍ)に合わせると、通常７００ｍｍ設定が多いですね。</p>
                </div>
              </div>
            </div>
            <div className="visual">
              <Image
                src="/images/order-tables/006.jpg"
                alt="Picture of the author"
                width={1280}
                height={855}
              />
            </div>
          </div>
          <ul className="lists-sizing">
            <li>
              <figure>
                <Image
                  src="/images/order-tables/illust-1.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>四角いテーブルの場合</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <Image
                  src="/images/order-tables/illust-2.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>丸いテーブルの場合</figcaption>
              </figure>
            </li>
          </ul>
        </section>

        <section id="contents-2" className="box-wood">
          <div className="title reverse">
            <div className="inner">
              <div className="heading">
                <span className="number">2</span>
                <h2>集成材や合板は使わずに<br />無垢の木でテーブルを製作しています</h2>
                <div className='caption'>
                  <p>ニレ・タモ・クルミ・カバ・ナラなどの国産材と、</p>
                  <p>ウォールナット・チェリーの世界銘木を加えた７樹種から、</p>
                  <p>ご希望の木をお選びいただけます。</p>
                </div>
              </div>
            </div>
            <div className="visual">
              <Image
                src="/images/order-tables/007a.jpg"
                alt="Picture of the author"
                width={1280}
                height={855}
              />
            </div>
          </div>

          <ul className="lists-wood">
            <li>
              <figure>
                <Image
                  src="/images/order-tables/009_nire.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>ニレ</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <Image
                  src="/images/order-tables/010_tamo.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>タモ</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <Image
                  src="/images/order-tables/011_kurumi.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>クルミ</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <Image
                  src="/images/order-tables/012_kaba.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>カバ</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <Image
                  src="/images/order-tables/013_nara.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>ナラ</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <Image
                  src="/images/order-tables/014_cherry.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>チェリー</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <Image
                  src="/images/order-tables/014_w.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>ウォルナット</figcaption>
              </figure>
            </li>
          </ul>
        </section>

        <section id="contents-3" className="box-legs">

          <div className="title">
            <div className="inner">
              <div className="heading">
                <span className="number">3</span>
                <h2>テーブルの脚も自由設計できますが、<br />ヒダコレの基本形の脚をご覧ください。</h2>
                <div className='caption'>
                  <p>天板と同じ樹種でつくる４本脚・ホタテ脚・兼用脚など、無垢の木の脚。そして人気の鉄脚もヒダコレ家具オリジナルデザインでご用意。ヒダコレ家具だけの特別なラインナップです。</p>
                </div>
              </div>
            </div>
            <div className="visual">
              <Image
                src="/images/order-tables/008.jpg"
                alt="Picture of the author"
                width={1280}
                height={855}
              />
            </div>
          </div>

          <ul className="lists-legs">
            <li>
              <Image
                src="/images/order-tables/015_kihotate.jpg"
                alt="Picture of the author"
                width={1280}
                height={855}
              />
            </li>
            <li>
              <Image
                src="/images/order-tables/016_kiro.jpg"
                alt="Picture of the author"
                width={1280}
                height={855}
              />
            </li>
            <li>
              <Image
                src="/images/order-tables/017_tetsuhotate.jpg"
                alt="Picture of the author"
                width={1280}
                height={855}
              />
            </li>
            <li>
              <Image
                src="/images/order-tables/018_tetsuro.jpg"
                alt="Picture of the author"
                width={1280}
                height={855}
              />
            </li>
            <li>
              <Image
                src="/images/order-tables/019_kikennyou.jpg"
                alt="Picture of the author"
                width={1280}
                height={855}
              />
            </li>
            <li>
              <Image
                src="/images/order-tables/020_ki4.jpg"
                alt="Picture of the author"
                width={1280}
                height={855}
              />
            </li>
          </ul>
        </section>

        <GoToOnlineshop
          slug="order-tables"
          title="無垢のテーブルも、<br />簡単にネットで注文"
          caption="ヒダコレのカスタムオーダー家具の中から、まずネットでも簡単にご注文いただけるようにセミオーダーテーブルを考えました。"
          ec_url="https://www.hida-collection.shop/view/category/hida-crafts"
        />
      </div>
    );
};

export default Home;