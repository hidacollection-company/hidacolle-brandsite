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
        name: "ワークスペースのお困りごと解決事例",
        url: ""
      }
    ];

    return (
      <>
        <PageHead
          pageTitle = "ワークスペースのお困りごと解決事例"
          pageDescription = "パソコンとプリンター、OA機器をまとめて収納できるかなあ?コンセントからコードの流れを整理したい、たくさんの書類関係を収納する場所がない・・・気持ちのいいワークスペースを無垢の木でつくりたい、などなど。部屋で仕事をする時間が多くなっているから、気持ちよく、効率よく仕事を進めることができる家具を作りたい。"
          pageRobots = ""
          pagePath = "https://www.hidacolle.com/custom-furniture/workspace"
          pageImg = ""
          pageImgWidth = ""
          pageImgHeight = ""
        />

        <div className="contents-body body-custom_furniture_pages">

          <BreadList list={bread_list}></BreadList>

          <div className="box-heading">
              <h1>ワークスペースの<br />お困りごと解決事例</h1>
          </div>

          <div className="box-visual">
            <Image
              src="/images/custom-furniture/example/workspace/001_main.jpg"
              alt="Picture of the author"
              width={1280}
              height={855}
            />
          </div>

          <section className='box-introduction'>
            <p>
              パソコンとプリンター、OA機器をまとめて収納できるかなあ?<br />
              コンセントからコードの流れを整理したい、<br />
              たくさんの書類関係を収納する場所がない・・・<br />
              気持ちのいいワークスペースを無垢の木でつくりたい、などなど。<br />
              部屋で仕事をする時間が多くなっているから、<br />
              気持ちよく、効率よく仕事を進めることができる家具を作りたい。
            </p>
          </section>

          <section className='box-solution'>
            <h2>ワークスペースの<br className='sp_only' />お困りごと解決ポイント</h2>
            <ul className="list-solution">
              <li>
                <figure>
                  <Image
                    src="/images/custom-furniture/example/workspace/002_sub.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                  <figcaption>
                    <div className="heading-list_solution">仕事以外の憩いの場でもある</div>
                    <div className="inner-list_solution">『ワークスペースで、実は漫画本をゆっくり読みたい』新築に伴ってご主人のワークスペースを作らせていただきました。デスクと一緒に壁面いっぱいの本棚もほしいというご希望をお聞きしていたのですが、実は一面すべて漫画本を収納する予定とのこと。</div>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <Image
                    src="/images/custom-furniture/example/workspace/003_sub.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                  <figcaption>
                    <div className="heading-list_solution">有孔ボードも便利に利用</div>
                    <div className="inner-list_solution">『ペンやテープ、カレンダー、またメガネなど、小物を整理したい』今有孔ボードを最適に利用するためのグッズがたくさん揃っています。引っ掛けるフックやボックス、棚板の設置も可能になっています。お客様のご希望をお聞きしながら有効に使わせてもらっています。</div>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <Image
                    src="/images/custom-furniture/example/workspace/004_sub.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                  <figcaption>
                    <div className="heading-list_solution">収納棚をもっとカスタマイズ</div>
                    <div className="inner-list_solution">『カゴやボックス、無印良品やニトリの収納グッズを使いたい』小さなボックス、重ねることができるケース、通気性のいいカゴなど、いろいろと使い勝手の優れた収納グッズが揃っています。その収納グッズの選定から、お客様と一緒にやらせていただいています。</div>
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