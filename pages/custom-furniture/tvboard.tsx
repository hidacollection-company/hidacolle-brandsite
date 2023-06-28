import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import PageHead from 'components/PageHead/PageHead'
import { CustomFurnitureList } from 'components/CustomFurniture/CustomFurnitureList'
import { CtaBox } from 'components/CtaBox/CtaBox'
import { OrderFlow } from 'components/CtaBox/OrderFlow'
import { BreadList } from 'components/BreadList/BreadList'
import { CustomOrderCta } from 'components/CtaBox/CustomOrderCta'

const Home: NextPage = () => {

    const bread_list : { [key: string]: string }[] = [
      {
        name: "ヒダコレのカスタムオーダー家具は、",
        url: "/custom-furniture"
      },
      {
        name: "テレビボードのお困りごと解決事例",
        url: ""
      }
    ];

    return (
      <>
        <PageHead
          pageTitle = "テレビボードのお困りごと解決事例"
          pageDescription = "テレビが壁掛け式なので、どのようなＴＶボードが合いますか?ブルーレイと合わせて、ゲーム機器を収納したい、コンセントの位置とＴＶボードが重なってしまって・・・収納棚やベンチヌックなど、他の家具と一体化したい、などなど。テレビとインターネットがつながっていく時代だから、単にテレビを置く台ではなく、その壁全体とテレビの関係性を設計する必要があります。"
          pageRobots = ""
          pagePath = "https://www.hidacolle.com/custom-furniture/tvboard"
          pageImg = ""
          pageImgWidth = ""
          pageImgHeight = ""
        />

        <div className="contents-body body-custom_furniture_pages">

          <BreadList list={bread_list}></BreadList>

          <div className="box-heading">
              <h1>テレビボードの<br />お困りごと解決事例</h1>
          </div>

          <div className="box-visual">
            <Image
              src="/images/custom-furniture/example/tvboard/001_main.jpg"
              alt="Picture of the author"
              width={1280}
              height={855}
            />
          </div>

          <section className='box-introduction'>
            <p>
              テレビが壁掛け式なので、どのようなＴＶボードが合いますか?<br />
              ブルーレイと合わせて、ゲーム機器を収納したい、<br />
              コンセントの位置とＴＶボードが重なってしまって・・・<br />
              収納棚やベンチヌックなど、他の家具と一体化したい、などなど。<br />
              テレビとインターネットがつながっていく時代だから、<br />
              単にテレビを置く台ではなく、その壁全体とテレビの関係性を設計する必要があります。
            </p>
          </section>

          <section className='box-solution'>
            <h2>テレビボードの<br className='sp_only' />お困りごと解決ポイント</h2>
            <ul className="list-solution">
              <li>
                <figure>
                  <Image
                    src="/images/custom-furniture/example/tvboard/002_sub.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                  <figcaption>
                    <div className="heading-list_solution">ルンバの基地も作れます</div>
                    <div className="inner-list_solution">『今ルンバの基地が納まるところがなくって困っているんです』TVボードの買い替えの相談をいただいて、何気なくお話していた時に出た言葉です。それじゃTVボードの中に作りましょう!ってことで、ルンバの基地とTvボードの一石二鳥の家具が出来上がりました。</div>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <Image
                    src="/images/custom-furniture/example/tvboard/003_sub.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                  <figcaption>
                    <div className="heading-list_solution">棚が横向きなら、きれいな木目が見える</div>
                    <div className="inner-list_solution">『テレビの回りにオープン棚がほしいけど、中身が見えるのは・・・』収納棚とセットになったTVボードは少しは見かけますが、引き戸や扉の付いた大掛かりなものが多いですね。オープン棚で中身が見えないようにするには、棚を横に向けよう!ってことになりました。</div>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <Image
                    src="/images/custom-furniture/example/tvboard/004_sub.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                  <figcaption>
                    <div className="heading-list_solution">テレビやビデオのコードは太い</div>
                    <div className="inner-list_solution">『リフォームで壁掛け式にしたけど、コードを何とかしたい』壁掛け式のテレビの下に、普通のTVボードを置くとやっぱり違和感が出てしまいます。またテレビと天板との距離もあるのでコードが目立ちますので、コード隠しの飾り棚を作って隠すことにしました。</div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </section>

          <section className="layout__CustomOrderCta">
            <CustomOrderCta />
          </section>

          {/* <div className="layout__CtaBox">
            <CtaBox
              heading = "お部屋のお困りごと、<br />ありませんか?"
              caption = "暮らしていると、「ココ何とかしたいなあ」ってとこが出てきます。<br />ぜひ、まずはお試し感覚でお問合せください。"
              button_caption = "お問い合わせはこちら"
            />
          </div> */}

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