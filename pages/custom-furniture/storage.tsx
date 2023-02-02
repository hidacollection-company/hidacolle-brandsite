import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import { CustomFurnitureList } from '/components/CustomFurniture/CustomFurnitureList'
import { CtaBox } from '/components/CtaBox/CtaBox'

const Home: NextPage = () => {
    return (
      <div className="contents-body body-custom_furniture_pages">
        {/* パンクズ */}
        <div className="box-beadlist">パンクズナビ</div>

        <div className="box-heading">
            <h1>収納の<br />お困りごと解決事例</h1>
        </div>

        <div className="box-visual">
          <Image
            src="/images/custom-furniture/example/storage/001_main.jpg"
            alt="Picture of the author"
            width={1280}
            height={855}
          />
        </div>

        <section className='box-introduction'>
          <p>
            キッチンの幕板1枚から<br />
            よりたっぷりの収納まで。<br />
            毎日つかう場所だから、<br />
            もっと楽しく、つかいやすい場所であって欲しい。
          </p>
        </section>

        <section className='box-solution'>
          <h2>キッチンでのお困りごと解決ポイント</h2>
          <ul className="list-solution">
            <li>
              <figure>
                <Image
                  src="/images/custom-furniture/example/storage/002_sub.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>
                  <div className="heading-list_solution">ジャースライド</div>
                  <div className="inner-list_solution">あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。</div>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <Image
                  src="/images/custom-furniture/example/storage/003_sub.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>
                  <div className="heading-list_solution">ジャースライド</div>
                  <div className="inner-list_solution">あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。</div>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <Image
                  src="/images/custom-furniture/example/storage/004_sub.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>
                  <div className="heading-list_solution">ジャースライド</div>
                  <div className="inner-list_solution">あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。</div>
                </figcaption>
              </figure>
            </li>
          </ul>
        </section>

        <div className="layout__CtaBox">
          <CtaBox
            heading = "部屋のお困りごとを相談してみる。"
            caption = "キッチン収納をオーダーしたいんだけど、相談にのって!<br />この隙間に収納ってつくれる?"
            button_caption = "お問い合わせはこちら"
          />
        </div>

        <div className="layout__CustomFurnitureList">
          <CustomFurnitureList />
        </div>

        <div className="images">
          <p>オーダー家具を”なんでも”作っています</p>
          <Image
            src="/images/custom-furniture/banner.jpg"
            alt="Picture of the author"
            width={1180}
            height={393}
          />
        </div>

        <section className="box-order_flow">
          <h2>ご相談から「家具づくり」までの流れ</h2>
          <ul className="contents-order_flow">
              <li>
                  <div className="heading">
                      <span className="number">1</span>
                      <h3>お問い合わせ</h3>
                  </div>
                  <div className="caption">
                      <p>
                          まずは、お客さまとの“相談の場”をつくります。<br />ページ下部の「問い合わせフォーム」から。<br />
                          またははお電話でお問い合わせください。
                      </p>
                  </div>
              </li>
              <li>
                  <div className="heading">
                      <span className="number">2</span>
                      <h3>聞き取り</h3>
                  </div>
                  <div className="caption">
                      <p>
                          担当者からお客さまへご連絡の上、聞き取りをさせていただきます。<br />
                          ご希望やお困り事、暮らし方のイメージなどをお聞かせください。
                      </p>
                  </div>
              </li>
              <li>
                  <div className="heading">
                      <span className="number">3</span>
                      <h3>ご提案</h3>
                  </div>
                  <div className="caption">
                      <p>
                          お客様と一緒に考える土台として、<br />
                          サイズや仕様を図面などでご提案いたします。<br />
                          これをもとにまたご意見をお聞きし、<br />
                          図面修正を行っていきます。
                      </p>
                  </div>
              </li>
              <li>
                  <div className="heading">
                      <span className="number">4</span>
                      <h3>修正</h3>
                  </div>
                  <div className="caption">
                      <p>
                          お客様のご意見をもとに修正案を作成、<br />
                          ご提案いたします。<br />
                          修正案は何度でも、無料で作成いたします。
                      </p>
                  </div>
              </li>
              <li>
                  <div className="heading">
                      <span className="number">5</span>
                      <h3>お見積り</h3>
                  </div>
                  <div className="caption">
                      <p>
                          修正案が出来上がった後に、<br />
                          お見積もりをいたします。<br />
                          仕様・サイズ・金額などすべてOKでしたら、<br />
                          ご成約となります。
                      </p>
                  </div>
              </li>
          </ul>
          <div className="layout-button">
            <Link href='/contact' legacyBehavior><a className="button_to_form">お問合わせフォームはこちら</a></Link>
          </div>
        </section>
      </div>
    );
};

export default Home;