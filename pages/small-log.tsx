import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import {Link as Scroll} from "react-scroll"

const Home: NextPage = () => {
    return (
      <div className="contents-body body-small_log">
        {/* パンクズ */}
        <div className="box__beadlist">
          <Link href={"/"} legacyBehavior>
            <a className="">ホーム</a>
          </Link>
          <span>&gt;</span>
          <span>小さな丸太を生かす</span>
        </div>

        {/* Component */}
        <div className="box-heading">
          <div className="inner-heading">
            <p className="catch">MARUTA<br />Project</p>
            <div className="heading">
              <h1>小さな丸太を生かす</h1>
              <p className="caption">飛騨の森の広葉樹はまとめて伐採され、そのほとんどがチップとして消費されています…</p>
            </div>
          </div>
          <div className="visual-heading">
            <Image
              src="/images/small-log/001.jpg"
              alt="Picture of the author"
              width={1280}
              height={855}
            />
          </div>
        </div>

        <section className='box-introduction'>

          <p className="heading">飛騨地域の森林・木材への取り組み</p>

          <Image
            src="/images/small-log/002.jpg"
            alt="Picture of the author"
            width={1280}
            height={855}
            className="ws"
          />

          <div className="block-introduction">
            <p className="title">飛騨地域を代表する高山市の森林の状況は</p>
            <div className="bold">
              <p>高山市の森林面積は約２００，０００ha 程であり、高山市全体の９２．１％を占め、日本一広い森林面積を有する市です。その内民有林の面積は１１９，０００ha程で、残る８０，０００ha程 は国有林であり、市の森林全体の４０．３％を占めています。</p>
              <p>民有林の内スギやヒノキなどの人工林面積は４５，０００ha程 で、民有林の３７．８％を占めていますが、実は県内の他地域に比べ人工林の割合が低い状況となっています。</p>
              <p>またコナラ・ミズナラ・ブナ・クルミ・クリ・サクラ・カバなどの広葉樹からなる天然林面積は、６８，０００ha 程で民有林の５７．６％を占めています。(マツ類も含む)</p>
              <p>その中『特に広葉樹天然林については、利用率が低く、大半の活用方法がチップや薪などに限定されているため、新たな用途の研究・開拓、利用拡大が課題となっています。』</p>
            </div>
          </div>

          <div className="block-introduction">
            <p className="title">高山市の100年を見据えた森林づくり</p>
            <div className="bold">
              <p>森林整備の課題を踏まえ、大まかなエリアごとの森林づくりの目標に基づく「将来目標区分」と、森林において重視すべき機能に基づく「森林機能区分」について、区分間の調整を図りつつ、それぞれの区分を設定しています。</p>
              <p>将来目標区分については、木材生産を目的とした「木材生産区域」、公益的機能を重視した「環境保全区域」、景観を重視した「観光景観区域」、身近な生活環境の保全を目的とした「生活保全区域」の４つの森林区分を設定して、それぞれの区域ごとに１００年後の望ましい姿に向けた森林づくりに取り組んでいます。</p>
            </div>
          </div>

          <Image
            src="/images/small-log/illust-1.jpg"
            alt="Picture of the author"
            width={1280}
            height={855}
            className="ws"
          />

          <div className="block-introduction">
            <p className="title">高山市産材の利用に向けて</p>
            <div className="bold">
              <p>市産材のブランド化・高付加価値化の推進や建築・木工業者と連携した市産材の利用促進などによる「市産材の利用拡大」、未利用資源・林地残材等の有効活用やパルプ・チップ用材の家具材等への転用促進などによる「森林資源の有効活用」、木の良さの普及啓発の推進などによる「木材利用の普及啓発」に取り組んでいます。</p>
              <p>また新規就業者確保に向けて「林業の担い手の確保・育成」、林業事業者等に対する支援や安定的な事業地の確保などによる「多様な林業事業者への支援」、都市自治体との森林を軸とした交流の推進や多世代に向けた木育の推進などによる「森林・林業に係る普及啓発」の必要性を感じています。</p>
            </div>
          </div>
        </section>

        <section className="box-attempt">
          <div className="heading-attempt">
            <h2>ヒダコレの小さな丸太を生かす取り組み</h2>
          </div>
          <div className="box-why">
            <p className="title">飛騨の広葉樹はなぜチップに消費されるのか</p>
            <div className="bold">
              <p>飛騨地域の豊かな森は、広葉樹の天然林面積の比率も大きいのですが、コナラ・ミズナラ・ブナ・クルミ・クリ・サクラ・カバ、その他多種多様の広葉樹の植生があり、家具メーカーの大量生産に見合う均一化された樹種、均一化されたサイズ、均一化された数量のものが揃わないのです。</p>
              <p>多種多様な樹種が混在している伐採された広葉樹は、どのような樹種でもまとめて全部買ってくれるチップ業者へ流れてしまうのです。</p>
            </div>
          </div>

          <div className="box-aciton">
            <div className="layout__aciton">
              {/* だからヒダコレは… */}
              <p>チップになる飛騨の広葉樹（小さな丸太）を<br />少しでも救いだし、家具作りに活かしたい</p>
              {/* と考えています。 */}
            </div>
          </div>
        </section>

        {/* Component */}
        <section className="box-banners">
          <div className="block-banner">
            <figure>
              <Image
                src="/images/small-log/004.jpg"
                alt="Picture of the author"
                width={1280}
                height={855}
              />
              <figcaption>丸太に触れる 森を感じる</figcaption>
            </figure>
            <Scroll to="contenets-1" smooth={true} duration={600} offset={-150}>
              <div>詳しくみる</div>
            </Scroll>
          </div>
          <div className="block-banner">
            <figure>
              <Image
                src="/images/small-log/005.jpg"
                alt="Picture of the author"
                width={1280}
                height={855}
              />
              <figcaption>丸太から直接家具をつくる</figcaption>
            </figure>
            <Scroll to="contenets-2" smooth={true} duration={600} offset={-150}>
              <div>詳しくみる</div>
            </Scroll>
          </div>
        </section>

        <section className="contents-small_log">
          <section id="contenets-1" className="block-contents_small_log">
            <div className="heading-contents_small_log">
              <h2>丸太に触れる<br />森を感じる</h2>
              <div className="caption">
                <p>ヒダコレの家具は、無垢の木で作られています。</p>
                <p>その無垢の木は、単なる資材としての「木材」ではなく、何十年もかけて育ってきた「丸太」であって、その丸太は「森」で生きていたのです。</p>
                <p>当然皆さんは、その「丸太」に触れる機会はまったくないので、無垢の家具と言えども「木材」で作られた家具くらいの認識しか持てないだろうと思います。</p>
                <p>そこでお客様に直接「丸太」に触れていただき、生きていたことを知っていただきたいと考えるようになりました。</p>
                <p>無垢の家具は、「丸太」から作られているんだと知っていただくこと、「森」を感じていただくことで、そして地元・地域のことを少しでも考えるキッカケになるといいなって思います。</p>
              </div>
            </div>
            <Image
              src="/images/small-log/images-1.jpg"
              alt="丸太に触れる森を感じるのイメージ写真"
              width={1180}
              height={400}
            />
          </section>
          <section id="contenets-2" className="block-contents_small_log">
            <div className="heading-contents_small_log">
              <h2>丸太から<br />直接家具をつくる</h2>
              <div className="caption">
                <p>みなさんの暮らしは色とりどり、十人十色の暮らし方があります。</p>
                <p>その十人十色の暮らしの形、それぞれのお部屋の形に合わせて、実は家具もそれぞれ一つ一つカスタムオーダーができるんです。</p>
                <p>ヒダコレのオーダー家具は、お客様それぞれの暮らしに合わせて一つ一つお作りしていますので、樹種もそれぞれまちまち、サイズも仕様もまったくそれぞれ、使う丸太(木材)もそれぞれ少量で済ませることができます。</p>
                <p>飛騨の広葉樹のほとんどがチップとして消費されてしまう大きな理由が、「均一化された樹種」、「均一化されたサイズ」、「均一化された数量」が揃わないということ。</p>
                <p>そのチップに消費される多種多様な樹種、少量づつしか出てこない丸太を、一本づつでも救っていくために、それぞれの樹種を、それぞれ少しづつ使っていくヒダコレのカスタムオーダー家具の取り組みをもっと広げていくことも、飛騨の小径木の丸太を救う一つの方法と考えています。</p>
              </div>
            </div>
            <Image
              src="/images/small-log/images-2.jpg"
              alt="丸太から直接家具をつくるのイメージ写真"
              width={1180}
              height={400}
            />
          </section>
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
              <p className="this_page">今見ているページです</p>
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
              <div className="layout_centering">
                <div className="layout-button">
                  <Link href='/large-log' legacyBehavior><a className="button target_this_site">大きな丸太を循環させる取り組みを詳しくみる</a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;