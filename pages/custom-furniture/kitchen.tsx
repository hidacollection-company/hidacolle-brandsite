import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import PageHead from 'components/PageHead/PageHead'
import { CustomFurnitureList } from 'components/CustomFurniture/CustomFurnitureList'
import { CtaBox } from 'components/CtaBox/CtaBox'
import { OrderFlow } from 'components/CtaBox/OrderFlow'
import { BreadList } from 'components/BreadList/BreadList'

const Home: NextPage = () => {

    const bread_list : { [key: string]: string }[] = [
      {
        name: "ヒダコレのカスタムオーダー家具は、",
        url: "/custom-furniture"
      },
      {
        name: "キッチンのお困りごと解決事例",
        url: ""
      }
    ];

    return (

      <>
        <PageHead
          pageTitle = "キッチンのお困りごと解決事例"
          pageDescription = "たくさんの食器やカトラリー、布巾などを収納したい、電子レンジやトースター、炊飯器、コーヒーメーカーなどのコードを隠したい、ゴミ箱をどこに置いたらいいの？ダイニング・リビングからの導線をよりよくしたい、などなど。毎日ずっと使う場所だから、もっと楽しくなるような、もっと使いやすい場所であってほしい。"
          pagePath = "https://www.hidacolle.com/custom-furniture/kitchen"
          pageImg = ""
          pageImgWidth = ""
          pageImgHeight = ""
        />

        <div className="contents-body body-custom_furniture_pages">

          <BreadList list={bread_list}></BreadList>

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
              たくさんの食器やカトラリー、布巾などを収納したい、電子レンジやトースター、炊飯器、コーヒーメーカーなどのコードを隠したい、ゴミ箱をどこに置いたらいいの？ダイニング・リビングからの導線をよりよくしたい、などなど。<br />
              毎日ずっと使う場所だから、もっと楽しくなるような、もっと使いやすい場所であってほしい。
            </p>
          </section>

          <section className='box-solution'>
            <h2>キッチンの<br className='sp_only' />お困りごと解決ポイント</h2>
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
                    <div className="heading-list_solution">組み合わせ自由なキッチンへ</div>
                    <div className="inner-list_solution">『組み合わせが自由に変更できるキッチンにしたい。』パントリーがあるので収納量は必要ない、でもパン生地をこねる作業台がほしい、またできるだけ物を置きたくないというお客様のご希望から、食器棚と炊飯器、そして作業台を分割できるように作りました。</div>
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
                    <div className="heading-list_solution">ガラスも選べる食器棚</div>
                    <div className="inner-list_solution">『昔なつかしいガラスを使った食器棚って作れますか？』今はお客様もネットで「モノ」を探す時代ですね。ガラスもいろいろなものを探すことができます。そこでお客様のお好みにあったガラスや取っ手などを一緒に探して、家具づくりで使うこともできます。</div>
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
                    <div className="heading-list_solution">炊飯器の収まりも考えます</div>
                    <div className="inner-list_solution">『炊飯器を天板の上に置きたくない、でも棚の中では湯気が心配・・・』トースターの熱、炊飯器の湯気、コードの束の山、そしてコンセントの位置が悪いなど、家電が多いキッチンではお困り事もたくさんあります。一つ一つ解決できる仕様・方法をご提案させていただきます。</div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </section>

          <div className="layout__CtaBox">
            <CtaBox
              heading = "お部屋のお困りごと、<br />ありませんか?"
              caption = "暮らしていると、「ココ何とかしたいなあ」ってとこが出てきます。<br />ぜひ、まずはお試し感覚でお問合せください。"
              button_caption = "お問い合わせはこちら"
            />
          </div>

          <div className="layout__CustomFurnitureList">
            <CustomFurnitureList
              title = "その他、お困りごと解決ポイント"
            />
          </div>

          <div className="images">
            <p>
              お客様からお聞きした色々なご希望や思いを、<br className='pc_only' />
              自分たちの工房で、家具という「形」にしていく工程は、<br className='pc_only' />
              みなさんの笑顔を想像しながらのワクワクする楽しい時間なんです。
            </p>
            <Image
              src="/images/custom-furniture/index/images-1.jpg"
              alt="Picture of the author"
              width={1180}
              height={400}
            />
          </div>

          <OrderFlow />
          
        </div>
      </>
    );
};

export default Home;