import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import { CustomFurnitureList } from 'components/CustomFurniture/CustomFurnitureList'
import { CtaBox } from 'components/CtaBox/CtaBox'
import { OrderFlow } from 'components/CtaBox/OrderFlow'

const Home: NextPage = () => {
    return (
      <div className="contents-body body-custom_furniture_pages">
        {/* パンクズ */}
        <div className="box__beadlist">
          <Link href={"/"} legacyBehavior>
            <a className="">ホーム</a>
          </Link>
          <span>&gt;</span>
          <Link href={"/custom-furniture"} legacyBehavior>
            <a className="">ヒダコレのカスタムオーダー家具は、</a>
          </Link>
          <span>&gt;</span>
          <span>キッチンのお困りごと解決事例</span>
        </div>

        <div className="box-heading">
            <h1>キッチンの<br />お困りごと解決事例</h1>
        </div>

        <div className="box-visual">
          <Image
            src="/images/custom-furniture/example/kitchen/001_main.jpg"
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
                  src="/images/custom-furniture/example/kitchen/002_sub.jpg"
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
                  src="/images/custom-furniture/example/kitchen/003_sub.jpg"
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
                  src="/images/custom-furniture/example/kitchen/004_sub.jpg"
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
          <p>お客様からお聞きした色々なご希望や思いを、<br />自分たちの工房で家具という「形」にしていく工程は、<br />私たちにとってはお客様の笑顔を想像しながらのワクワクする楽しい時間です。</p>
          <Image
            src="/images/custom-furniture/index/images-1.jpg"
            alt="Picture of the author"
            width={1180}
            height={400}
          />
        </div>

        <OrderFlow />
        
      </div>
    );
};

export default Home;