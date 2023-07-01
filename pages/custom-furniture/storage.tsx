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
        name: "収納のお困りごと解決事例",
        url: ""
      }
    ];

    return (
      <>
        <PageHead
          pageTitle = "収納のお困りごと解決事例"
          pageDescription = "大量の本や雑誌を、格好よくディスプレイ収納できる棚がほしい、洗濯機の横の狭いスペースにタオルの棚がほしい、リビングのカウンターや子供の机で使えるワゴンって作れる?壁に棚を付けたいけど、一枚だけでも作ってくれるかなあ、などなど。所有物の数を減らさなければいけないご時世だから、うまく「見える収納」を使いながら暮らしのお役に立ちたいですね。"
          pageRobots = ""
          pagePath = "https://www.hidacolle.com/custom-furniture/storage"
          pageImg = ""
          pageImgWidth = ""
          pageImgHeight = ""
        />

        <div className="contents-body body-custom_furniture_pages">

          <BreadList list={bread_list}></BreadList>

          <div className="box-heading">
              <h1>収納の<br />お困りごと解決事例</h1>
          </div>

          <div className="box-visual">
            <Image
              src="/images/custom-furniture/example/storage/001_main.jpg"
              alt="『収納のお困りごと解決事例』のイメージ"
              width={1280}
              height={855}
            />
          </div>

          <section className='box-introduction'>
            <p>
              大量の本や雑誌を、格好よくディスプレイ収納できる棚がほしい、<br />
              洗濯機の横の狭いスペースにタオルの棚がほしい、<br />
              リビングのカウンターや子供の机で使えるワゴンって作れる?<br />
              壁に棚を付けたいけど、一枚だけでも作ってくれるかなあ、などなど。<br />
              所有物の数を減らさなければいけないご時世だから、<br />
              うまく「見える収納」を使いながら暮らしのお役に立ちたいですね。
            </p>
          </section>

          <section className='box-solution'>
            <h2>収納の<br className='sp_only' />お困りごと解決ポイント</h2>
            <ul className="list-solution">
              <li>
                <figure>
                  <Image
                    src="/images/custom-furniture/example/storage/002_sub.jpg"
                    alt="『仕切り棒だって、自由に動かせます』のイメージ"
                    width={1280}
                    height={855}
                  />
                  <figcaption>
                    <div className="heading-list_solution">仕切り棒だって、自由に動かせます</div>
                    <div className="inner-list_solution">本棚って幅が広くなると、重みで棚板が垂れ下がってきます。それを防ぐために縦の仕切り板がたくさん必要になります。もしその縦の仕切り板が自由に動かせれば、分類分けも簡単にできますね。</div>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <Image
                    src="/images/custom-furniture/example/storage/003_sub.jpg"
                    alt="『お部屋を自由に動くキャスター付きワゴン』のイメージ"
                    width={1280}
                    height={855}
                  />
                  <figcaption>
                    <div className="heading-list_solution">お部屋を自由に動くキャスター付きワゴン</div>
                    <div className="inner-list_solution">『今はカウンター下で使うけど、将来は別の部屋で使いたい』リビングルームにカウンターが設置されることが多くなっています。カウンター天板のみですから回りに収納が無い場合が多いですね。そこでキャスター付きのワゴン収納はとっても需要が高いです。</div>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <Image
                    src="/images/custom-furniture/example/storage/004_sub.jpg"
                    alt="『前開き扉って、デスク天板にもなる』のイメージ"
                    width={1280}
                    height={855}
                  />
                  <figcaption>
                    <div className="heading-list_solution">前開き扉って、デスク天板にもなる</div>
                    <div className="inner-list_solution">『狭いスペースなので、開いた扉も棚板になるようにできる?』本格的なライティングビューローのようなデスクにもなる収納家具って作る機会は減っていますが、シンプルなオープン棚の扉が前開きになると、それはきっと新しい暮らし方のご提案になっていきます。</div>
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
              alt="お客様と家具で暮らしを形づくる楽しい時間"
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