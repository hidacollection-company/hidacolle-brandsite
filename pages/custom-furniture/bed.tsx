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
        name: "ベッドのお困りごと解決事例",
        url: ""
      }
    ];

    return (

      <>
        <PageHead
          pageTitle = "ベッドのお困りごと解決事例"
          pageDescription = "シングルとセミダブルのベッドを並べて置きたい、2台のベッドを並べるけど、ヘッドボードは一体化したい、ケイタイの充電やメガネ、本などの棚がほしい、畳の間というか、ベッド以外のスペースにもしたい、などなど。ベッドは睡眠を取るだけのスペースではないから、「くつろぎ」「癒し」「健康」でいるための過ごし方も考えたいですね。"
          pageRobots = ""
          pagePath = "https://www.hidacolle.com/custom-furniture/bed"
          pageImg = ""
          pageImgWidth = ""
          pageImgHeight = ""
        />

        <div className="contents-body body-custom_furniture_pages">

          <BreadList list={bread_list}></BreadList>

          <div className="box-heading">
              <h1>ベッドの<br />お困りごと解決事例</h1>
          </div>

          <div className="box-visual">
            <Image
              src="/images/custom-furniture/example/bed/001_main.jpg"
              alt="Picture of the author"
              width={1280}
              height={855}
            />
          </div>

          <section className='box-introduction'>
            <p>
              シングルとセミダブルのベッドを並べて置きたい、<br />
              2台のベッドを並べるけど、ヘッドボードは一体化したい、<br />
              ケイタイの充電やメガネ、本などの棚がほしい、<br />
              畳の間というか、ベッド以外のスペースにもしたい、などなど。<br />
              ベッドは睡眠を取るだけのスペースではないから、<br />
              「くつろぎ」「癒し」「健康」でいるための過ごし方も考えたいですね。
            </p>
          </section>

          <section className='box-solution'>
            <h2>ベッドの<br className='sp_only' />お困りごと解決ポイント</h2>
            <ul className="list-solution">
              <li>
                <figure>
                  <Image
                    src="/images/custom-furniture/example/bed/002_sub.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                  <figcaption>
                    <div className="heading-list_solution">2つのベッドを一体視させる方法は</div>
                    <div className="inner-list_solution">『無垢の木で作るなら、ヘッドボードの木目をつなげたい』一般的なヘッドボードには収納もなく、実は壁を傷つけないようにする役割くらいかも。でもデザイン的な要素は大きく、無垢の木で作るヘッドボードでは自然木のきれいな木目を楽しめます。</div>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <Image
                    src="/images/custom-furniture/example/bed/003_sub.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                  <figcaption>
                    <div className="heading-list_solution">畳のスペースが見直されている</div>
                    <div className="inner-list_solution">『マットレスを外すと、畳スペースになるようにできますか?』フワフワのマットレスでは寝れないって方も多いですよね。そこで畳ベッドの需要は根強くあり、更にせんべい布団を上げると、和室というか、畳スペースにもなるようにというご希望も多いです。</div>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <Image
                    src="/images/custom-furniture/example/bed/004_sub.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                  <figcaption>
                    <div className="heading-list_solution">ソファとベッドの違いは何?</div>
                    <div className="inner-list_solution">『来客が多いので、リビングにベッドが3つほしい・・・』ソファのご相談をいただくと、結構ソファで寝てしまうんですって方がいます。ベッドにもなるソファ、あるいはソファにもなるベッド、その両方を兼ね備えた新しスタイルの家具（ソファベッド）を作りたい。</div>
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