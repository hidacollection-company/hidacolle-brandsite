import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import PageHead from 'components/PageHead/PageHead'
import { CustomFurnitureList } from 'components/CustomFurniture/CustomFurnitureList'
import { OrderFlow } from 'components/CtaBox/OrderFlow'
import { BreadList } from 'components/BreadList/BreadList'
import { CustomOrderCta } from 'components/CtaBox/CustomOrderCta'

const Home: NextPage = () => {

    const bread_list : { [key: string]: string }[] = [
      {
        name: "ヒダコレのカスタムオーダー家具は、",
        url: ""
      }
    ];

    return (
      <>
        <PageHead
          pageTitle = "ヒダコレのカスタムオーダー家具は、"
          pageDescription = "ヒダコレの家具は、お客様と一緒に“考える・つくる・なおす”家具です。メーカー既製品家具では見つからない、お部屋の中のさまざまな家具をお作りします。"
          pageRobots = ""
          pagePath = "https://www.hidacolle.com/custom-furniture"
          pageImg = ""
          pageImgWidth = ""
          pageImgHeight = ""
        />

        <section className="contents-body body-custom-furniture">

          <BreadList list={bread_list}></BreadList>

          <div className="box-heading">
            <div className="inner-heading">
              <p className="catch">Custom Furniture</p>
              <div className="heading">
                <h1>ヒダコレの<br />カスタムオーダー家具は、</h1>
              </div>
            </div>
            <div className="visual-heading">
              <Image
                src="/images/custom-furniture/index/001.jpg"
                alt="Picture of the author"
                width={1280}
                height={855}
              />
            </div>
          </div>

          <section className='box-introduction'>
            <h2>お部屋のお困りごとを<br />お客様と一緒に<br className='sp_only' />「家具づくり」で解決します</h2>
            <p>ヒダコレの家具は、お客様と一緒に“考える・つくる・なおす”家具です。<br />メーカー既製品家具では見つからない、お部屋の中のさまざまな家具をお作りします。</p>
            <div className="box__images">
              <div className="main_image">
                <Image
                  src="/images/custom-furniture/index/002.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
              </div>
              <div className="sub_image_1">
                <Image
                  src="/images/custom-furniture/index/003.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
              </div>
              <div className="sub_image_2">
                <Image
                  src="/images/custom-furniture/index/004.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
              </div>
            </div>

          </section>

          <section className="box-catch">
            <h2>家具づくりを、<br className='' />一緒に考える。<br />ということ。</h2>
            <div className="block-catch">
              <p>お客様にとって「家づくり」は大変な工程で、でもとっても楽しい作業ですよね。</p>
              <p>同じように「家具づくり」もとっても楽しい作業で、「暮らしづくり」には欠かせないものです。実はその「家具づくり」にもお客様はご参加いただけるのです。</p>
              <p>ただ今までは寄り添ってくれるところ、「家具づくり」を一緒に考えてくれるところがなかっただけです。</p>
              <p>ヒダコレのカスタムオーダー家具は、それぞれのお客様のお部屋の形・暮らし方に合わせてパーソナライズしてつくる家具をお届けします。</p>
              <p>でも高級はフレンチのコース料理ではなく、お客様と会話しながらお好みをお聞きして作る家庭的な料理を目指しています。</p>
            </div>
          </section>

          <section className='listcontents-make'>
            <div className="heading-make">
              <h2>本当にほしい家具は、<br />買うのではなく「つくる」もの。</h2>
            </div>
            <ul className="list-make">
              <li>
                <div className="heading-list_make">まずは何でもお気軽に<br />ご相談ください</div>
                <div className="inner-list_make">本当にほしい家具、必要としている家具、お部屋にピッタリの家具は、お客様のそれぞれのお部屋や暮らし方によって違うので、なかなか既製品では見つかりません。</div>
              </li>
              <li>
                <div className="heading-list_make">お客様に合った家具の<br />設計をします</div>
                <div className="inner-list_make">お困りごとやご希望をお聞きしながら家具の設計図を作っていきます。メールのやり取りが主流で、何度も聞き取りをして図面修正しながらの打合せも無料対応です。</div>
              </li>
              <li>
                <div className="heading-list_make">お見積り後のご判断で<br />大丈夫です</div>
                <div className="inner-list_make">デザインやサイズなど、ご希望の仕様が決まってきましたら「お見積り」のご案内をさせていただきます。その後のご注文ですので、「お試し感覚」でご相談ください。</div>
              </li>
            </ul>
          </section>

          <section className="box-attempt">
            <h2>ヒダコレでは、お客様と一緒に<br />「３つのつくる」に<br className='sp_only' />取り組んでいます。</h2>
            <ul className="list-attempt">
              <li>
                <div className="heading">
                  <div className="number">1</div>
                  <h3 className="title">ご縁・相談の場をつくる</h3>
                </div>
                <div className="list-layout">
                  <div className="visual-attempt">
                    <Image
                      src="/images/custom-furniture/index/illust-1.jpg"
                      alt="「ご縁・相談の場をつくる」のイメージイラスト"
                      width={1280}
                      height={855}
                    />
                  </div>
                  <div className="inner-attempt">
                    <p>ヒダコレでは、「暮らしづくり」は「家づくり」と「家具づくり」を一緒に考えることでより良くなると思っています。</p>
                    <p>「家」をウィンドショッピングで探して買うって人はいないと思います。「家」は探して買うものではなく「つくるもの」なんですよね。それが「家づくり」です。</p>
                    <p>同じように「家具」も探して買うのではなく、ヒダコレではお客様と一緒に「家具づくり」をすることができるんです。</p>
                    <p>お客様の「本当にほしい家具」を見つけるために、まずはお気軽にご相談いただける場を作りたいと思っています。何度でも設計からお見積もりまで無料ですので、みなさん「お試し感覚」で、お気軽にお問合せいただいています。</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="heading">
                  <div className="number">2</div>
                  <h3 className="title">一緒に家具を考える時間をつくる</h3>
                </div>
                <div className="list-layout reverse">
                  <div className="visual-attempt">
                    <Image
                      src="/images/custom-furniture/index/illust-2.jpg"
                      alt="「一緒に家具を考える時間をつくる」のイメージイラスト"
                      width={1280}
                      height={855}
                    />
                  </div>
                  <div className="inner-attempt">
                    <p>お客様のお部屋のお困り事やこんな家具がほしいというご希望は、かなり漠然としていて具体的ではない場合がほとんどです。</p>
                    <p>ヒダコレでは、そのようなお客様の「思い」に耳を傾けることから始めます。一つ一つお客様の声をお聞きしていると、どのようなサイズが使い勝手がいいか、どのような仕様が暮らし方に合っているか、どのような木がお好みかなど、いろいろとお客様のご希望の形が見えてきます。</p>
                    <p>オーダー家具は、そんなにハードルが高いことでも、高額で特別な家具でもありません。お客様と一緒に考えながら何度も修正しながら形にしていく、とっても楽しい工程・作業なんです。</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="heading">
                  <div className="number">3</div>
                  <h3 className="title">既製品では見つからない家具をつくる</h3>
                </div>
                <div className="list-layout">
                  <div className="visual-attempt">
                    <Image
                      src="/images/custom-furniture/index/illust-3.jpg"
                      alt="「既製品では見つからない家具をつくる」のイメージイラスト"
                      width={1280}
                      height={855}
                    />
                  </div>
                  <div className="inner-attempt">
                    <p>人の暮らしは「十人十色」。</p>
                    <p>みなさんそれぞれの暮らしの形は違っていますので、既製品の家具では、本来決してピッタリ納まることはないのです。</p>
                    <p>「もう2cm小さければ入ったのに・・・」、「ここにもう一つ棚があれば・・・」、「電気の線をまとめたいんだけど・・・」、「この隙間を有効活用したい・・・」、「使い勝手のいいワークスペースがほしい・・・」などの暮らしの中の「あったら嬉しい、あったら便利」を形することが、ヒダコレのオーダー家具の目指すところです。</p>
                    <p>お客様の声に耳を傾けながら、既製品では見つからない家具、みなさんの暮らしにフィットする家具をお作りしたいと思います。</p>
                  </div>
                </div>
              </li>
            </ul>
          </section>

          <section className="layout__CustomOrderCta">
            <CustomOrderCta />
          </section>

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

        </section>
      </>
    );
};

export default Home;