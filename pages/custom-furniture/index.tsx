import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import { CustomFurnitureList } from '/components/CustomFurniture/CustomFurnitureList'

const Home: NextPage = () => {
    return (
      <section className="contents-body body-custom-furniture">

        {/* パンクズ */}
        {/* component */}
        <div className="box-beadlist">パンクズナビ</div>

        <div className="box-heading">
          <div className="inner-heading">
            <p>Custom Furniture</p>
            <h1>ヒダコレの<br />カスタムオーダー家具は、</h1>
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
          <h2>お部屋のお困りごとを<br />お客様と一緒に「家具づくり」で解決します</h2>
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
          <h2>家具づくりを、<br />一緒に考える。<br />ということ。</h2>
          <div className="block-catch">
            <p>お客様にとって「家づくり」は大変な工程で、でもとっても楽しい作業ですよね。</p>
            <p>同じように「家具づくり」もとっても楽しい作業で、「暮らしづくり」には欠かせないものです。実はそん「家具づくり」にもお客様はご参加いただけるのです。</p>
            <p>ただ今までは寄り添ってくれるところ、「家具づくり」を一緒に考えてくれるところがなかっただけです。</p>
            <p>ヒダコレのカスタムオーダー家具は、それぞれのお客様のお部屋の形・暮らし方に合わせてパーソナライズしてつくる家具をお届けします。</p>
            <p>でも高級はフレンチのコース料理ではなく、お客様と会話しながらお好みをお聞きして作る家庭的な料理を目指しています。</p>
          </div>
        </section>

        {/* Component */}
        <section className='listcontents-make'>
          <div className="heading-make">
            <h2>本当にほしい家具は、<br />買うのではなく「つくる」もの。</h2>
          </div>
          <ul className="list-make">
            <li>
              <div className="heading-list_make">ネットで天板を選ぶ</div>
              <div className="inner-list_make">耳付きの自然木の天板、丸や四角や楕円など形もいろいろお作りできます。また７つの樹種から木を選ぶこともできます。</div>
            </li>
            <li>
              <div className="heading-list_make">ネットで脚を選ぶ</div>
              <div className="inner-list_make">ホタテタイプやロの字タイプ、座卓になる兼用脚などデザインも豊富で、鉄でつくるアイアン脚も選ぶことができます。</div>
            </li>
            <li>
              <div className="heading-list_make">注文してあとは待つだけ</div>
              <div className="inner-list_make">ご注文はボタン一つで簡単にできます。その他サイズ対応や仕様の変更などは、お問合せフォームからお問合せください。</div>
            </li>
          </ul>
        </section>

        <section className="box-attempt">
          <h2>ヒダコレでは、お客様と一緒に<br />「３つのつくる」に取り組んでいます。</h2>
          <ul className="list-attempt">
            <li>
              <div className="heading">
                <div className="number">1</div>
                <h3 className="title">ご縁・相談の場をつくる</h3>
              </div>
              <div className="list-layout">
                <div className="visual-attempt">
                  <Image
                    src="/test.jpg"
                    alt="Picture of the author"
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
                    src="/test.jpg"
                    alt="Picture of the author"
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
                    src="/test.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                </div>
                <div className="inner-attempt">
                  <p>人の暮らしは「十人十色」。</p>
                  <p>みなさんそれぞれの暮らしの形は違っていますので、既製品の家具では、本来決してピッタリ納まることはないのです。</p>
                  <p>「もう２ｃｍ小さければ入ったのに・・・」、「ここにもう一つ棚があれば・・・」、「電気の線をまとめたいんだけど・・・」、「この隙間を有効活用したい・・・」、「使い勝手のいいワークスペースがほしい・・・」などの暮らしの中の「あったら嬉しい、あったら便利」を形することが、ヒダコレのオーダー家具の目指すところです。</p>
                  <p>お客様の声に耳を傾けながら、既製品では見つからない家具、みなさんの暮らしにフィットする家具をお作りしたいと思います。</p>
                </div>
              </div>
            </li>
          </ul>
        </section>

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
      </section>
    );
};

export default Home;