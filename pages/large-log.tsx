import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import PageHead from 'components/PageHead/PageHead'
import { BreadList } from 'components/BreadList/BreadList'

import {Link as Scroll} from "react-scroll"

const Home: NextPage = () => {

    const bread_list : { [key: string]: string }[] = [
      {
        name: "大きな丸太を循環させる",
        url: ""
      }
    ];

    return (

      <>
        <PageHead
          pageTitle = "【MARUTA Project】大きな丸太を循環させる"
          pageDescription = "世界的にみても大きな価値のある樹齢100年以上の大径木から作られる一枚板を再生・循環させたい"
          pagePath = "https://www.hidacolle.com/large-log"
          pageImg = ""
          pageImgWidth = ""
          pageImgHeight = ""
        />

        <div className="contents-body body-large_log">

          <BreadList list={bread_list}></BreadList>

          {/* Component */}
          <div className="box-heading">
            <div className="inner-heading">
              <p className="catch">MARUTA<br className="pc_only" />Project</p>
              <div className="heading">
              <h1>大きな丸太を循環させる</h1>
                <p className="caption">もう日本の山々には、<br className="sp_only" />テーブル用の一枚板が取れるような<br className="sp_only" />大きな木は残されていません…</p>
              </div>
            </div>
            <div className="visual-heading">
              <Image
                src="/images/large-log/001.jpg"
                alt="Picture of the author"
                width={1280}
                height={855}
              />
            </div>
          </div>

          <section className='box-introduction'>

            <p className="heading">銘木と呼ばれる美しい木</p>

            <div className="block-introduction">
              <p className="title">日本の「木の文化」は、</p>
              <div className="bold">
                <p>日本人が独自の風土の中で育んだ「木の文化」。</p>
                <p>その美意識と技術の一つとしての神社や仏閣、その建築材の中から「銘木」というものが生まれたんじゃないかと思っています。</p>
                <p>実際銘木という言葉が、現在のように一般に定着したのは明治の初め頃とされていますが、その後「唐木屋」「変木屋」「丸太屋」などの専門問屋も生まれました。</p>
                <p>「銘木」となるいくつかの条件のひとつに、長い長い時間というものがあります。例えばテーブル用の一枚板を取るためには樹齢が１００年以上は必要と言われています。老齢樹は年輪がつまっているので、きれいな木目・独特の光沢も備わっていて、そもそも大径木の大きな木ですから幅が広く、長く、テーブルに必要なサイズも取りやすいのです。</p>
              </div>
            </div>

            <div className="block-introduction">
              <p className="title">銘木の代表格である「一枚板」</p>
              <div className="bold">
                <p>戦後生活スタイルが大きく西洋化していく中で、暮らしに必要とされる「銘木」も変わってきました。住宅用の建材からテーブルなどの家具用材に移行していくことで、「一枚板」が銘木の代表格となったと考えられます。</p>
                <p>｢一枚板｣とは、高樹齢で大きく育った一本の丸太から切り出し、そのまま製材した無垢板のことで、はぎ合わせることなく仕上げた天板のことを言います。</p>
                <p>「世界にたった一つしか存在しない」唯一無二の希少価値があり、そのダイナミックで個性的な木目や木の曲がり具合、節穴までもが自然の美しい造形美と言えます。</p>
              </div>
            </div>

            <Image
              src="/images/large-log/solid-woods.jpg"
              alt="Picture of the author"
              width={1280}
              height={855}
              className="wl"
            />

            <div className="block-introduction">
              <p className="title">岐阜県銘木協同組合</p>
              <div className="bold">
                <p>全国には、秋田・つくば・東京・京都・大阪・奈良・熊本・肥後、そして岐阜と9つの銘木協同組合があります。</p>
                <p>杉などの針葉樹の取引が主流の銘木協同組合が多い中で、岐阜県銘木協同組合が栃や欅などの広葉樹の銘木が集まる銘木市であり、国産材の大径木の「一枚板」が全国から集まることでは日本一の規模を誇ります。</p>
                <p>ただ戦後の日本の林業方針が杉の植林事業に特化したこともあり、あらたな広葉樹の植林はほとんど行われていないため、もう日本の山々には樹齢１００年を超えるような大径木の木があまり残されていません・・・</p>
              </div>
            </div>
          </section>

          <section className="box-attempt">
            <div className="heading-attempt">
              <h2>ヒダコレの<br className="sp_only" />大きな丸太を循環させる取り組み</h2>
            </div>
            <div className="box-use">
              <div className="block-use">
                <p className="title">残り少ない大きな丸太（一枚板）を<br className="sp_only" />長く使ってもらう</p>
                <div className="bold">
                  <p>もう残り少ない国産の一枚板を次の世代まで使いつなげてもらうために、私たちにまずできることは「木を生かしてつくる」「丁寧にしっかりつくる」ことだと考えています。</p>
                  <p>事前の乾燥を人工乾燥を通して含水率を10％まで下げる、最後の磨き込みは#400の細かいサンドペーパーで磨き込む、メンテナンス可能なオイル塗装をおススメする、お届け後も無料メンテナンスの対応をする、など作り手としての責任を果たすことも大切なことだと感じています。</p>
                </div>
              </div>
              <ul className="list-large_log">
                <li>
                  <figure>
                    <Image
                      src="/images/large-log/009.jpg"
                      alt="長く使っていただくヒダコレの工夫「一枚板」の写真"
                      width={1280}
                      height={855}
                    />
                    <figcaption>一枚板</figcaption>
                  </figure>
                </li>
                <li>
                  <figure>
                    <Image
                      src="/images/large-log/010.jpg"
                      alt="長く使っていただくヒダコレの工夫「人工乾燥」の写真"
                      width={1280}
                      height={855}
                    />
                    <figcaption>人工乾燥</figcaption>
                  </figure>
                </li>
                <li>
                  <figure>
                    <Image
                      src="/images/large-log/011.jpg"
                      alt="長く使っていただくヒダコレの工夫「みがき」の写真"
                      width={1280}
                      height={855}
                    />
                    <figcaption>みがき</figcaption>
                  </figure>
                </li>
              </ul>
              <div className="block-use">
                <div className="bold">
                  <p>長く使っていただくために必要なもう一つのことは、「愛着の継続」だと考えています。</p>
                  <p>以前は欠点とされていた木の木目、割れ、節なども、実はその木の大切な「個性」の一つなのです。人それぞれ体格・容姿など個性があるように、「一枚板」にもそれぞれ違った体格・容姿などがあり、それが唯一無二の個性となっている特徴でもありますので、人はそこに愛着が湧くのだと思います。</p>
                </div>
              </div>
              <ul className="list-large_log">
                <li>
                  <figure>
                    <Image
                      src="/images/large-log/012.jpg"
                      alt="木の個性「節」の写真"
                      width={1280}
                      height={855}
                    />
                    <figcaption>節</figcaption>
                  </figure>
                </li>
                <li>
                  <figure>
                    <Image
                      src="/images/large-log/013.jpg"
                      alt="木の個性「入り皮」の写真"
                      width={1280}
                      height={855}
                    />
                    <figcaption>入り皮</figcaption>
                  </figure>
                </li>
                <li>
                  <figure>
                    <Image
                      src="/images/large-log/014.jpg"
                      alt="木の個性「乾燥割れ」の写真"
                      width={1280}
                      height={855}
                    />
                    <figcaption>乾燥割れ</figcaption>
                  </figure>
                </li>
              </ul>

              <div className="block-use">
                <p className="title">使い古された一枚板を<br className="sp_only" />修理する。再生する。</p>
                <div className="bold">
                  <p>大きな丸太からつくる国産の一枚板は、もうあまり日本の森には残されていません。</p>
                  <p>ヒダコレのもう一つの取り組みは、あらたな大きな丸太から一枚板を製作するのではなく、以前に作られ使われてきた一枚板を再生させる、再度循環させることを目指しています。</p>
                  <p>1980年～2000年頃に一枚板のブームがあり、唐木と呼ばれる輸入材も含めて多くの一枚板が作られました。</p>
                  <p>その時代に作られた一枚板は和室の座卓がほとんどで、その後の生活スタイルの変化、住宅の和室の減少などから使われなくなったものが廃棄されるという事も起こっています。</p>
                </div>
              </div>
            </div>

            <div className="box-aciton">
              <div className="layout__aciton">
                <p>
                  世界的にみても<br className="sp_only" />大きな価値のある<br className="sp_only" />樹齢100年以上の<br />
                  大径木から作られる一枚板を<br className="sp_only" />再生・循環させたい
                </p>
              </div>
            </div>

            <div className="listcontents-make">
              <ul className="list-make">
                <li>
                  <h2 className="heading-list_make">メンテナンス</h2>
                  <div className="inner-list_make">
                    長年大切に使ってきたテーブルです。「捨てるのは忍びない」という気持ちの方も多いと思います。<br />
                    ヒダコレでは、お部屋でできる範囲の作業を「メンテナンス」と呼んでおり、工房設立当初から20年ほど、出張訪問をしてテーブルをきれいにするサービスを継続しています。
                  </div>
                  <div className="layout_centering">
                    <div className="layout-button">
                      <Link href='/ichimaiita/maintenance#maintenance' scroll={false} legacyBehavior><a className="button target_this_site">メンテナンスを詳しくみる</a></Link>
                    </div>
                  </div>
                </li>
                <li>
                  <h2 className="heading-list_make">修理・再生</h2>
                  <div className="inner-list_make">
                    「思い出のテーブル」「愛着のあるテーブル」だけど、訳あって手放さなければいけないってこともあります。実は無垢の木で作られたテーブルは、それぞれの部材を生かして他の家具に再生させることができます。<br />
                    新たな家具としてスタートをさせることで、お客様の「愛着の継続」がされると嬉しいです。
                  </div>
                  <div className="layout_centering">
                    <div className="layout-button">
                      <Link href='/ichimaiita/maintenance#repair' scroll={false} legacyBehavior><a className="button target_this_site">修理を詳しくみる</a></Link>
                    </div>
                  </div>
                </li>
                <li>
                  <h2 className="heading-list_make">買取り</h2>
                  <div className="inner-list_make">
                    それでもどうしてもテーブルを手放さなければいけない時もあります。ヒダコレでは全国の廃棄されそうな無垢の木のテーブルを救いたくって、テーブルの買い取り事業をはじました。飛騨の家具づくりの技術・経験を生かして、次の世代に使いつなげていただけるように再生事業に取り組みます。
                  </div>
                  <div className="layout_centering">
                    <div className="layout-button">
                      <Link href='/ichimaiita/maintenance#purchase' scroll={false} legacyBehavior><a className="button target_this_site">買取りを詳しくみる</a></Link>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="link-to-maintenance">
                <Link href='/ichimaiita/maintenance' legacyBehavior><a>テーブルの<br className="sp_only" />メンテナンス・修理・買取りについて<br className="sp_only" />もっと詳しくはこちら</a></Link>
              </div>
            </div>
          </section>

          <div className="box-links">
            <div className="heading-links">
              <p className="ja-text">丸太から家具を考えるプロジェクト</p>
              <p className="en-numberling">MARUTA Project</p>
            </div>
            <div className="contents-links">
              <div className="block-link">
                <figure>
                  <Image
                    src="/images/small-log/001.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                  <figcaption>小さな丸太を生かす取り組み</figcaption>
                </figure>
                <p className="caption">飛騨の森の広葉樹はまとめて伐採され、そのほとんどがチップとして消費されています…</p>
                <div className="layout_centering">
                  <div className="layout-button">
                    <Link href='/small-log' legacyBehavior><a className="button target_this_site">小さな丸太の取り組みをみる</a></Link>
                  </div>
                </div>
                
              </div>
              <div className="block-link">
                <figure>
                  <Image
                    src="/images/large-log/001.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                  <figcaption>大きな丸太を循環させる取り組み</figcaption>
                </figure>
                <p className="caption">もう日本の山々には、テーブル用の一枚板が取れるような大きな木は残されていません…</p>
                <p className="this_page">今見ているページです</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Home;