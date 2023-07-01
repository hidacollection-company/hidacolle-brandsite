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
        name: "ソファのお困りごと解決事例",
        url: ""
      }
    ];

    return (
      <>
        <PageHead
          pageTitle = "ソファのお困りごと解決事例"
          pageDescription = "リビングルームでの家族での過ごし方が変わってきてますね。それに伴ってソファはゆっくり座るだけの家具ではなく、「集う」「遊ぶ」「学ぶ」「過ごす」ための場になってきてます。ソファの奥行きなどのサイズ感、クッションの固さ、などなど既製品のソファでは満足できなくなっているから、ヒダコレのカスタムオーダーのソファが必要になってきています。"
          pageRobots = ""
          pagePath = "https://www.hidacolle.com/custom-furniture/sofa"
          pageImg = ""
          pageImgWidth = ""
          pageImgHeight = ""
        />

        <div className="contents-body body-custom_furniture_pages">

          <BreadList list={bread_list}></BreadList>

          <div className="box-heading">
              <h1>ソファの<br />お困りごと解決事例</h1>
          </div>

          <div className="box-visual">
            <Image
              src="/images/custom-furniture/example/sofa/001_main.jpg"
              alt="『ソファのお困りごと解決事例』のイメージ"
              width={1280}
              height={855}
            />
          </div>

          <section className='box-introduction'>
            <p>
              リビングルームでの家族での過ごし方が変わってきてますね。<br />
              それに伴ってソファはゆっくり座るだけの家具ではなく、<br />
              「集う」「遊ぶ」「学ぶ」「過ごす」ための場になってきてます。<br />
              ソファの奥行きなどのサイズ感、クッションの固さ、などなど<br />
              既製品のソファでは満足できなくなっているから、<br />
              ヒダコレのカスタムオーダーのソファが必要になってきています。
            </p>
          </section>

          <section className='box-solution'>
            <h2>ソファの<br className='sp_only' />お困りごと解決ポイント</h2>
            <ul className="list-solution">
              <li>
                <figure>
                  <Image
                    src="/images/custom-furniture/example/sofa/002_sub.jpg"
                    alt="『お部屋の一部になった造作ソファ』のイメージ"
                    width={1280}
                    height={855}
                  />
                  <figcaption>
                    <div className="heading-list_solution">お部屋の一部になった造作ソファ</div>
                    <div className="inner-list_solution">『ソファをお部屋の一部に組み込めないですか?』限られたお部屋のスペースを生かすために、お部屋の一部になっている造作家具はとても有効的です。まだまだ造作ソファは一般的ではないので、収納棚などとの組み合わせでご提案したいですね。</div>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <Image
                    src="/images/custom-furniture/example/sofa/003_sub.jpg"
                    alt="『本格的なベッドにもなるソファ』のイメージ"
                    width={1280}
                    height={855}
                  />
                  <figcaption>
                    <div className="heading-list_solution">本格的なベッドにもなるソファ</div>
                    <div className="inner-list_solution">『武道の合宿で来客も多いので、ソファをベッドに・・・』少しはソファベッドも世の中にありますが、今回はソファ２つが、なんとベッド3つになるデザインです。どうしても収納棚も必要というご希望で、実はこの収納棚を倒せばベッドになるように考えました。</div>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <Image
                    src="/images/custom-furniture/example/sofa/004_sub.jpg"
                    alt="『どんなスキ間にもピッタリのソファ』のイメージ"
                    width={1280}
                    height={855}
                  />
                  <figcaption>
                    <div className="heading-list_solution">どんなスキ間にもピッタリのソファ</div>
                    <div className="inner-list_solution">『リニューアルでも外せなかった柱が2本、その間に・・・』素敵にお部屋をリニューアル。でも構造上どうしても外せなかった柱が2本あります。その間にピッタリのソファは既製品では見つかりませんよね。もちろんピッタリのソファを作らせていただきました。</div>
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