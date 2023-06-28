import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import PageHead from 'components/PageHead/PageHead'
import { CtaBox } from 'components/CtaBox/CtaBox'
import { IchimaiitaList } from 'components/Ichimaiita/IchimaiitaList'
import { Links } from 'components/Ichimaiita/Links'
import { BreadList } from 'components/BreadList/BreadList'

// Wordpress REST API
import { getIchimaiitaAllPosts } from "lib/wpapi";

export const getStaticProps = async () => {

  const ichimaiita_data = await getIchimaiitaAllPosts();

  return {
    props: {
      ichimaiita_data
    }
  };
};

type Props = {
  ichimaiita_data: any[];
}

const Home: NextPage<Props> = ({ichimaiita_data}) => {

    const bread_list : { [key: string]: string }[] = [
      {
        name: "一枚板の家具",
        url: ""
      }
    ];

    return (
      <>
        <PageHead
          pageTitle = "一枚板の家具"
          pageDescription = "木は再生可能資源と言われています。地球が持続可能であるために、今循環型社会を目指した取り組みも多くなされています。ヒダコレは「森と木と暮らし」をつなげることをテーマに、お客様のご要望をお聞きして、お客様の暮らしに役立つ家具づくりを行っております。"
          pageRobots = ""
          pagePath = "https://www.hidacolle.com/ichimaiita"
          pageImg = ""
          pageImgWidth = ""
          pageImgHeight = ""
        />

        <div className="contents-body body-ichimaiita">

          {/* <p>{JSON.stringify(ichimaiita_data)}</p> */}

          <BreadList list={bread_list}></BreadList>

          {/* Component */}
          <div className="box-heading">
            <div className="inner-heading">
              <p className="catch">Ichimaiita<br className='pc_only' />funiture</p>
              <div className="heading">
                <h1>一枚板の家具</h1>
              </div>
            </div>
            <div className="visual-heading">
              <Image
                src="/images/ichimaiita/index/001.jpg"
                alt="Picture of the author"
                width={1280}
                height={855}
              />
            </div>
          </div>

          <section className='box-contents'>

            <p className="heading">ヒダコレの<br className='sp_only' />一枚板テーブル</p>

            <div className="block-contents">
              <div className="inner-contents">
                <p className="title">山に木が増えすぎると</p>
                <div className="bold">
                  <p>日本は現在国土の68%が森林であり、森林大国と呼ばれるカナダの森林率を上回っています。</p>
                  <p>ほんと緑豊かな日本ですが、実は土地に対して木の密度が高すぎると、かえって自然環境に悪影響を及ぼすこともあります。</p>
                </div>
              </div>
              <div className="visaul-contents">
                <Image
                  src="/images/ichimaiita/index/002.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
              </div>
            </div>
            <div className="block-contents reverse">
              <div className="inner-contents">
                <p className="title">木の二酸化炭素排出</p>
                <div className="bold">
                  <p>木は光合成をして大気中の二酸化炭素を吸収し酸素を排出しますが、その一方で木も呼吸をして二酸化炭素を排出もします。</p>
                  <p>実は成長した大きな木は二酸化炭素の排出量の方が多くなってしまうので伐採して、若い木を植林して育てることで炭酸ガスの吸収力を高めることにもつながります。</p>
                </div>
              </div>
              <div className="visaul-contents">
                <Image
                  src="/images/ichimaiita/index/003.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
              </div>
            </div>
          </section>

          <section className="box-grace_of_the_forest">

            <p className="heading">飛騨の森からの恵み</p>


            <div className="block-grace_of_the_forest">
              <div className="bold">
                <p>木は再生可能資源と言われています。地球が持続可能であるために、今循環型社会を目指した取り組みも多くなされています。ヒダコレは「森と木と暮らし」をつなげることをテーマに、お客様のご要望をお聞きして、お客様の暮らしに役立つ家具づくりを行っております。</p>
                <p>そして更に「循環型社会」を目指すために、「森から木が切り出され」「家具に加工され」「お客様に届く」という山からの流れだけではなく、「お客様(暮らし)から」「木(ヒダコレ)へ」そして「森(自然)へ」お客様をつなげていく流れを作っていきたいと考えています。</p>
                <p>お客様に「木」を感じ、「森」を感じていただける取り組み、環境づくりも目指したいと思います！</p>
              </div>
            </div>

            <ul className='imagelist-grace_of_the_forest'>
              <li>
                <Image
                  src="/images/ichimaiita/index/004.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
              </li>
              <li>
                <Image
                  src="/images/ichimaiita/index/005.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
              </li>
              <li>
                <Image
                  src="/images/ichimaiita/index/006.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
              </li>
            </ul>

            <div className="block-grace_of_the_forest">
              <div className="bold">
                <p>地元飛騨の山で育った大きな栃の木。昨年ご縁があってヒダコレの元にやってきてくれました。100年以上育った大きな木なので、私たちも100年以上長く使いつなげることのできる家具を作らなければいけません。</p>
                <p>1ｍ以上の大きな丸太を製材して、今天然乾燥を行っているところ。その後人工乾燥を経て、お客様の元に届くのはまだまだ先になりますが・・・</p>
              </div>
            </div>

            <ul className='imagelist-grace_of_the_forest'>
              <li>
                <Image
                  src="/images/ichimaiita/index/007.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
              </li>
              <li>
                <Image
                  src="/images/ichimaiita/index/008.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
              </li>
              <li>
                <Image
                  src="/images/ichimaiita/index/009.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
              </li>
            </ul>

          </section>

          <section className="box-drying">
            <div className="layout-drying">
              <div className="inner-drying">
                <p className="small-drying">飛騨の森からの「栃一枚板」</p>
                <p className="heading-drying">乾燥中の一枚板</p>
                <p className="caption-drying">1m以上の大きな丸太を製材して採れた、製材所の社長もビックリするくらいきれいな栃の一枚板。今天然乾燥を行っているところ。その後人工乾燥を経て、お客様の元に届くのはまだまだ先になりますが、ぜひ写真だけでもご覧ください！</p>
                <div className="layout_centering">
                  <div className="layout-button">
                    <Link href='/ichimaiita/drying' legacyBehavior><a className="button target_this_site">乾燥中の一枚板をみる</a></Link>
                  </div>
                </div>
              </div>
              <div className="visual-drying">
                <Image
                  src="/images/ichimaiita/index/10-11.png"
                  alt="Picture of the author"
                  width={490}
                  height={431}
                />
              </div>
            </div>
          </section>

          <section className='box-contents'>

            <p className="heading">一枚板は乾燥が命</p>

            <div className="block-contents">
              <div className="inner-contents">
                <p className="title">天然乾燥と人工乾燥を経て</p>
                <div className="bold">
                  <p>一枚板でテーブルを作るにあたって、いかに個別に丁寧に事前の乾燥状態を管理するかが、その後の一枚板の反りや割れを防ぐためには最も大切なことになります。</p>
                  <p>実は人工乾燥材と言われている一枚板でも、まだまだ事前乾燥が甘く反る可能性があるものも多く、クレームの原因にもなっているようです。</p>
                </div>
              </div>
              <div className="visaul-contents">
                <Image
                  src="/images/ichimaiita/index/012.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
              </div>
            </div>
            <div className="block-contents reverse">
              <div className="inner-contents">
                <p className="title">含水率10％以下を目指して</p>
                <div className="bold">
                  <p>ヒダコレでは「含水率」という木に含まれている水分量で乾燥状態を管理しております。</p>
                  <p>一般的に流通している「人工乾燥材」と言われているものは含水率１８％くらいのものも多いのですが、ヒダコレの一枚板は含水率１０％以下を目指して、「安心の一枚板」をお客様にお届けしたいと思っています。</p>
                </div>
              </div>
              <div className="visaul-contents">
                <Image
                  src="/images/ichimaiita/index/013.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
              </div>
            </div>
          </section>

          <div className="layout__IchimaiitaList">
            <section className="box_items">
              <p className="heading">今すぐ買える、使える一枚板は、<br />こちらからお選びいただけます!!</p>
              <ul className="items">
                {ichimaiita_data.map((ichimaiita, index) =>
                  <li key={index}>
                    <IchimaiitaList
                      key={ichimaiita.slug}
                      title={ichimaiita.title}
                      slug={ichimaiita.slug}
                      size={ichimaiita.size}
                      control_number={ichimaiita.controlNumber}
                      thumbnail={ichimaiita.thumbnail.sourceUrl}
                      photos={ichimaiita.photos}
                    />
                  </li>
                )}
              </ul>
            </section>
          </div>

          <div className="layout__CtaBox">
            <CtaBox
              heading = "より多くの一枚板から選びたい方は<br />ぜひ一度お問合せください。"
              caption = ""
              button_caption = "お問い合わせはこちら"
            />
          </div>

          <div className="layout__Link">
            <Links
              this_page_ichimaiita_index= {true}
              this_page_ichimaiita_other= {false}
            />
          </div>

          <div className="layout__CtaBox">
            <CtaBox
              heading = "ずっと一枚板を見てきた<br />ヒダコレだからできること。"
              caption = "もっと多くの一枚板を見てみたい。<br />家の蔵に一枚板が置いてあるんだけど引き取ってもらえますか?"
              button_caption = "お問い合わせはこちら"
            />
          </div>

        </div>
      </>
    );
};

export default Home;