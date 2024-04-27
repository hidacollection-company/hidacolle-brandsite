import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import PageHead from 'components/PageHead/PageHead'
import { CtaBox } from 'components/CtaBox/CtaBox'
import { IchimaiitaList } from 'components/Ichimaiita/IchimaiitaList'
import { Links } from 'components/Ichimaiita/Links'
import { BreadList } from 'components/BreadList/BreadList'

import {Link as Scroll} from "react-scroll"

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
        name: "おうちでメンテナンスプロジェクト",
        url: ""
      }
    ];

    return (
      <>
        <PageHead
          pageTitle = "おうちでメンテナンスプロジェクト"
          pageDescription = ""
          pageRobots = ""
          pagePath = "https://www.hidacolle.com/maintenance-project"
          pageImg = ""
          pageImgWidth = ""
          pageImgHeight = ""
        />

        <div className="contents-body body-maintenance_project">

          {/* Component */}
          <div className="body-heading">
            <div className="inner-heading">
              <p className="catch">OUCHI DE MAINTENACE PROJECT</p>
              <div className="heading">
                <h1>おうちでメンテナンス<br />プロジェクト</h1>
              </div>
            </div>
          </div>

          <section id="introduction" className='box-introduction'>


            <div className="section-heading">
              <h2 className="heading">メンテナンスする暮らし</h2>
              <p className="catch">MAINTENACE AT HOME</p>
            </div>

            <div className="block-maitanance-at-home">
              <div className="inner-contents">
                <p className="title">大切な家具を、<br />もっと大切にする</p>
                <div className="bold">
                  <p>愛着を持って長くテーブルを使っているとシミや傷、汚れが付きます。</p>
                  <p>それは、お子さんが赤ちゃんの時に噛んでできた傷や、初めて書いた落書きなど、よくみると思い出がたくさん詰まったテーブルになっています。</p>
                  <p>そういった傷や汚れを"愛着"として残すことで、思い出の積み重ねが良い風合いとなって、より素敵なテーブルにしてくれると思っています。</p>
                </div>
                <div className="layout-button">
                  <Link href='/note/ouchi-de-maintenance-introduction' legacyBehavior><a className="button target_note target_this_site">ヒダコレノートで読む</a></Link>
                </div>
              </div>

              <div className="bg-visauls">
                <Image
                  className="visaul-1 visaul"
                  src="/images/maintenance-project/intro-1.jpg"
                  alt=""
                  width={1280}
                  height={855}
                />
                <Image
                  className="visaul-2 visaul"
                  src="/images/maintenance-project/intro-2.jpg"
                  alt=""
                  width={1280}
                  height={855}
                />
                <Image
                  className="visaul-3 visaul"
                  src="/images/maintenance-project/intro-3.jpg"
                  alt=""
                  width={855}
                  height={1280}
                />
              </div>
            </div>

            <div className="block-recommended">

              <div className="block-heading">
                <p className="catch">ヒダコレ家具が提案する</p>
                <div className="heading"><h3>おうちでメンテナンスの4つのこと</h3></div>
              </div>

              <div className="inner-contents">
                <Scroll to="table_trouble" smooth={true} duration={600} offset={-105}>
                  <div className="numbering">
                    <span className="type">No.</span>
                    <span className="number">1</span>
                  </div>
                  <span className="title">よくあるテーブルの<br className='sp_only' />お困りごと</span>
                </Scroll>
                <Scroll to="no_wiping" smooth={true} duration={600} offset={-105}>
                  <div className="numbering">
                    <span className="type">No.</span>
                    <span className="number">2</span>
                  </div>
                  <span className="title">テーブルは<br className='sp_only' />「水拭き」してはいけない！</span>
                </Scroll>
                <Scroll to="how_to" smooth={true} duration={600} offset={-105}>
                  <div className="badge-howto">ハウツー</div>
                  <div className="numbering">
                    <span className="type">No.</span>
                    <span className="number">3</span>
                  </div>
                  <span className="title">実際にやってみよう！<br className='sp_only' />テーブルのメンテナンス方法は。</span>
                </Scroll>
                <Scroll to="recommendation" smooth={true} duration={600} offset={-105}>
                  <div className="numbering">
                    <span className="type">No.</span>
                    <span className="number">4</span>
                  </div>
                  <span className="title">簡単にできる<br className='sp_only' />「おうちでメンテナンス」<br className='sp_only' />のススメ</span>
                </Scroll>
              </div>
            </div>
          </section>


          <section id="table_trouble" className="box-table_trouble">

            <div className="section-heading">
              <div className="inner-heading">
                <div className="numbering">
                  <span className="type">No.</span>
                  <span className="number">1</span>
                </div>
                <div className="heading">
                  <h2>よくあるテーブルの<br />お困りごと</h2>
                </div>
                <p className="catch">Tables Stains, Scratches, and Debris</p>
              </div>
            </div>


            <div className="block-stains_scratches_debris">


              <div className="heading">
                <h3 className="yellow_line">テーブルのお困りごとは、この３つ</h3>
              </div>

              <div className="inner-contents">
                <div className="contents-trouble-layout">
                  <div className="item-trouble item-stains">
                    <Image
                      src="/images/maintenance-project/1-1.jpg"
                      alt="テーブルにできたシミのイメージ"
                      width={1280}
                      height={855}
                    />
                    <div className="item-heading">
                      <p className="catch">stains</p>
                      <div className="heading"><h4>シミ</h4></div>
                      <span>（化学反応）</span>
                    </div>
                    <div className="read">
                      「シミ」とは、木の表面や道管導管の中で生じた「化学反応」です。よくある輪っか状のシミ（いわゆる輪ジミ）の原因は、テーブル天板の表面の木の油とコップの底の水の反応で出来てしまいます。油と水が反応してできた表面的な輪ジミなどは、白っぽい色のシミになります。
                    </div>
                  </div>
                  <div className="item-trouble item-scratches">
                    <Image
                      src="/images/maintenance-project/1-2.jpg"
                      alt="テーブルにできた傷(へこみ)のイメージ"
                      width={320}
                      height={215}
                    />
                    <div className="item-heading">
                      <p className="catch">scratches</p>
                      <div className="heading"><h4>傷</h4></div>
                      <span>（へこみ）</span>
                    </div>
                    <div className="read">
                      「キズ」とは、改めて書けばテーブルの表面に加えられた力でできた「へこみ」「くぼみ」「削れ」などとなります。大きな当たり傷(へこみ)ができてしまったり、や湯呑の裏がザラザラだったとか、カバンの裏の金具ですってしまったとか、でできる擦り傷や目に見えないヘアラインのキズなどが挙げられます。
                    </div>
                  </div>
                  <div className="item-trouble item-debris">
                    <Image
                      src="/images/maintenance-project/1-3.jpg"
                      alt="テーブルにできた汚れのイメージ"
                      width={1280}
                      height={855}
                    />
                    <div className="item-heading">
                      <p className="catch">debris</p>
                      <div className="heading"><h4>汚れ</h4></div>
                      <span>（付着）</span>
                    </div>
                    <div className="read">
                      「ヨゴレ」は、普段づかいでもっとも目にするものではないでしょうか。とは言っても、実はもっとも見えない・気づかないテーブルの傷みでもあります。食べこぼしや飲みこぼしは大体見ればすぐに分かるヨゴレですね。マジックやボールペンなどの筆記具や新聞のインクうつりなども挙げられます。
                    </div>
                  </div>

                </div>

                <div className="layout-button">
                  <Link href='/note/ouchi-de-maintenance-1/' legacyBehavior><a className="button target_note target_this_site">ヒダコレノートで読む</a></Link>
                </div>

              </div>

            </div>

            <div className="block-characteristics_of_paint">

              <div className="heading">
                <h3 className="yellow_line">３つの塗料の特徴とメンテナンスについて</h3>
              </div>

              <div className="sub_heading">塗料には<span className="add_underline">2種類のタイプ</span>があります</div>

              <div className="inner-contents">
                <div className="contents-permeability_and_paintability">
                  <div className="item item-permeability">
                    <div className="item-title">
                      <span>テーブルに染み込む</span>
                      <h4>浸透性</h4>
                    </div>
                    <div className="item-body">
                      <p>浸透性塗料で代表的なのが<br className='sp_only' /><span className="add_underline add_bold">オイル塗料</span>です。</p>
                      <p>オイル塗料は、<br className='sp_only' /><span className="add_underline add_bold">体に優しい植物由来</span></p>
                      <p>
                        浸透性の塗料は<span className="add_underline add_bold">シミが付きやすい</span><br />
                        （）
                      </p>
                      <p>
                        浸透性・塗膜性に限らず<br />
                        <span className="add_underline add_bold">傷は付いてしまいます。</span>
                      </p>
                      <p>
                        <span className="add_underline">シミや傷がついても…</span><br />
                        <br />
                        おうちで<br className='sp_only' /><span className="add_underline add_bold">簡単にメンテナンスができる</span><br />
                        自宅でメンテナンスできるのが<br className='sp_only' />浸透性の良いところです。
                      </p>
                    </div>
                  </div>

                  <div className="item item-paintability">
                    <div className="item-title">
                      <span>テーブルの表面に膜を作る</span>
                      <h4>塗膜性</h4>
                    </div>
                    <div className="item-body">
                      <p>塗膜性塗料で代表的なのが<br className='sp_only' /><span className="add_underline add_bold">ウレタン塗装</span>です。</p>
                      <p>科学的な<br className='sp_only' /><span className="add_underline add_bold">ホルムアルデヒドが気になる</span></p>
                      <p>
                        塗膜性の塗料は<span className="add_underline add_bold">シミが付きにくい</span><br />
                        （塗料の劣化と共にシミも付くようになります）
                      </p>
                      <p>
                        浸透性・塗膜性に限らず<br />
                        <span className="add_underline add_bold">傷は付いてしまいます。</span>
                      </p>
                      <p>
                        <span className="add_underline">シミや傷がついたら…</span><br />
                        <br />
                        おうちで<span className="add_underline add_bold">メンテナンスができません</span><br />
                        塗膜を一度全て剥がす必要があるのです。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="box-permeability_reccomended">
                  <p className="title">やっぱり<span className="add_underline add_bold">浸透性</span>が嬉しい!!</p>
                  <div className="caption">
                    <span className="yellow_line">浸透性も塗膜性もシミや傷が付くもの。</span><br />
                    <span className="yellow_line">浸透性は汚れが付くけど、<br className='sp_only' />おうちで簡単にメンテナンスできるなら、</span><br />
                    <span className="yellow_line">浸透性の塗料が嬉しいと思いませんか?</span>
                  </div>
                </div>

                <div className="box-permeability_caption">
                  <p>
                    浸透性でもオイル塗料は、<br />
                    <span className="add_underline add_bold">シミができるので困る…</span><br className='sp_only' />という方にオススメなのが<br />
                    同じ浸透性の<span className="add_underline add_bold">ガラス塗料</span>です。<br />
                    浸透性でもガラス塗料は<br className='sp_only' /><span className="add_underline add_bold">シミが付きにくい</span>のです。
                  </p>
                </div>

                <div className="box-oil_or_glass_permeability">
                  <div className="item item-oil">
                    <p className="caption"><span className="add_underline add_bold">やっぱり自然由来が良い</span><br />という方にオススメ</p>
                    <p className="kinds">浸透性</p>
                    <h4 className="title">オイル塗料</h4>
                  </div>
                  <div className="item item-glass">
                      <p className="caption"><span className="add_underline add_bold">シミができるのは困る</span><br />という方にオススメ</p>
                      <p className="kinds">浸透性</p>
                      <h4 className="title">ガラス塗料</h4>
                  </div>
                </div>


                <div className="box-oil_or_glass_caption">
                  ヒダコレではおうちで<br className='sp_only' />簡単にメンテナンスができる<br />
                  浸透性の塗料をオススメしています<br />
                  浸透性の中であればどちらがお好みでしょうか<br />
                  ぜひ好みの塗料をお聞かせください
                </div>

                <div className="box-oil_or_glass_notice">
                  ヒダコレではお使いのテーブルを<br className='sp_only' />無料でメンテナンスできます
                </div>

                <div className="box-note_caption">
                  3つの塗料について、より詳しくはヒダコレノートで説明しています
                </div>

                <div className="layout-button">
                  <Link href='/note/ouchi-de-maintenance-1-2' legacyBehavior><a className="button target_note target_this_site">ヒダコレノートで読む</a></Link>
                </div>

              </div>

            </div>
          </section>

          <section id="no_wiping" className="box-no_wiping">

            <div className="section-heading">
              <div className="inner-heading">
                <div className="numbering">
                  <span className="type">No.</span>
                  <span className="number">2</span>
                </div>
                <div className="heading">
                  <h2>テーブルは<br className="pc_only" />「水拭き」<br className="sp_only" />してはいけない！</h2>
                </div>
                <p className="catch">Be careful in daily use</p>
              </div>
            </div>

            <div className="layout-no_wiping">
              <div className="layout-left">
                <p className="title-no_wiping">テーブルのヨゴレの原因は、<br className="sp_only" />油ヨゴレとふきんの水?</p>
                <p className="read-no_wiping">
                  綺麗にお手入れと思ってしていた水拭きが、逆にテーブルを汚していることだって知っていましたか?<br />
                  ヒダコレがおすすめしているのは、テーブルの「から拭き」なんです。<br />
                  毎日使っているテーブルなら油汚れも多く残ります。水拭きはそんな油ヨゴレを「拭き取る」のではなく、「伸ばしている」ってことになってしまいます。
                </p>
                <div className="layout-button">
                  <Link href='/note/ouchi-de-maintenance-2' legacyBehavior><a className="button target_note target_this_site">ヒダコレノートで読む</a></Link>
                </div>
              </div>
              <div className="layout-left">
                <Image
                  src="/images/maintenance-project/2-1.jpg"
                  alt="テーブルは水拭き厳禁?!"
                  width={1280}
                  height={855}
                />
              </div>
            </div>
            <div className="nhk-block">
              <p>
                水拭きしてはいけない!は「NHK あしたが変わるトリセショー」でも紹介された方法です<br />
                <a href="https://www.nhk.jp/p/torisetsu-show/ts/J6MX7VP885/blog/bl/pnR8azdZNB/bp/ppdMBl9kaR/" target="_blank">くわしくはこちらから</a>
              </p>
              <div className="circle">
                <p>CHECK IT!!</p>
                <p>NHK</p>
                <p>でも紹介された方法です</p>
              </div>
            </div>
          </section>

          <section id="how_to" className="box-how_to">

            <div className="section-heading">
              <div className="inner-heading">
                <div className="numbering">
                  <span className="type">No.</span>
                  <span className="number">3</span>
                </div>
                <div className="heading">
                  <h2>実際にやってみよう！<br />テーブルの<br className="sp_only" />メンテナンス方法は。</h2>
                </div>
                <p className="catch">How to make your furniture last longer</p>
              </div>
            </div>

            <div className="contents-howto">
              <div className="howto-title-block">
                <div className="howto-title">
                  <span className="yellow_line">多少テーブルがヨゴレても、<br className="sp_only" />これで安心です。</span><br />
                  <span className="yellow_line">自分でできる<br className="sp_only" />テーブルのメンテナンス方法。</span>
                </div>
                <p className="howto-caption">日頃から”おうちでできる<br className="sp_only" />”簡単なお手入れをご紹介します。</p>
              </div>
              <div className="howto-prepare-block">
                <div className="prepare-heading">
                  <p className="title-prepare">What to prepare</p>
                  <p className="caption-prepare">用意するもの</p>
                </div>
                <div className="prepare-items">
                  <div className="item">
                    <div className="item-images">
                      <Image
                        src="/images/maintenance-project/3-prepare_1.jpg"
                        alt="テーブルは水拭き厳禁?!"
                        width={1280}
                        height={855}
                      />
                    </div>
                    <div className="item-title-en">BOWL</div>
                    <div className="item-title-ja">ボウル</div>
                  </div>
                  <div className="item">
                    <div className="item-images">
                      <Image
                        src="/images/maintenance-project/3-prepare_2.jpg"
                        alt="テーブルは水拭き厳禁?!"
                        width={1280}
                        height={855}
                      />
                    </div>
                    <div className="item-title-en">SOAP</div>
                    <div className="item-title-ja">石鹸<br className="sp_only" />(食器用洗剤でもOK)</div>
                  </div>
                  <div className="item">
                    <div className="item-images">
                      <Image
                        src="/images/maintenance-project/3-prepare_3.jpg"
                        alt="テーブルは水拭き厳禁?!"
                        width={1280}
                        height={855}
                      />
                    </div>
                    <div className="item-title-en">SPONGE</div>
                    <div className="item-title-ja">スポンジ</div>
                  </div>
                  <div className="item">
                    <div className="item-images">
                      <Image
                        src="/images/maintenance-project/3-prepare_4.jpg"
                        alt="テーブルは水拭き厳禁?!"
                        width={1280}
                        height={855}
                      />
                    </div>
                    <div className="item-title-en">HOUSE CLOTH</div>
                    <div className="item-title-ja">ふきん 2枚</div>
                  </div>
                  <div className="item">
                    <div className="item-images">
                      <Image
                        src="/images/maintenance-project/3-prepare_5.jpg"
                        alt="テーブルは水拭き厳禁?!"
                        width={1280}
                        height={855}
                      />
                    </div>
                    <div className="item-title-en">OIL</div>
                    <div className="item-title-ja">オイル</div>
                  </div>
                  <div className="item">
                    <div className="item-images">
                      <Image
                        src="/images/maintenance-project/3-prepare_6.jpg"
                        alt="テーブルは水拭き厳禁?!"
                        width={1280}
                        height={855}
                      />
                    </div>
                    <div className="item-title-en">SAND PAPER</div>
                    <div className="item-title-ja">サンドペーパー</div>
                  </div>
                </div>
              </div>
              <div className="howto-flow-block">
                <div className="flow-items">
                  <div className="item item-flow">
                    <div className="item-caption">
                      <div className="item-title">1</div>
                      <div className="item-read">
                        テーブルの上は目に見えない汚れも溜まっています。<br />
                        実はテーブルも石けんでゴシゴシ洗うことができます。
                      </div>
                    </div>
                    <div className="item-image">
                      <Image
                        src="/images/maintenance-project/3-1.jpg"
                        alt="テーブルメンテナンスの流れ 泡で洗う"
                        width={490}
                        height={330}
                      />
                    </div>
                  </div>
                  <div className="item item-flow">
                    <div className="item-caption">
                      <div className="item-title">2</div>
                      <div className="item-read">
                        無垢の木は目が立ってきて少しザラザラしてきます。<br />
                        メンテナンスオイルの前に、サンドペーパーで素地調整をします。
                      </div>
                    </div>
                    <div className="item-image">
                      <Image
                        src="/images/maintenance-project/3-2.jpg"
                        alt="テーブルメンテナンスの流れ ヤスリがけ"
                        width={490}
                        height={330}
                      />
                    </div>
                  </div>
                  <div className="item item-flow">
                    <div className="item-caption">
                      <div className="item-title">3</div>
                      <div className="item-read">
                        植物由来のナチュラルオイルを塗っていきましょう。<br />
                        天板に刷り込みように、少したっぷり目に塗るのがコツです。
                      </div>
                    </div>
                    <div className="item-image">
                      <Image
                        src="/images/maintenance-project/3-3.jpg"
                        alt="テーブルメンテナンスの流れ オイルを塗る"
                        width={490}
                        height={330}
                      />
                    </div>
                  </div>
                  <div className="item item-flow">
                    <div className="item-caption">
                      <div className="item-title">4</div>
                      <div className="item-read">
                        乾いたウエスでオイルを拭き取っていきます。<br />
                        オイルを伸ばすのではなく、しっかりと拭き取ってください。
                      </div>
                    </div>
                    <div className="item-image">
                      <div className="badge-notice">ナゼ!?<br className="pc_only" />水拭き厳禁</div>
                      <Image
                        src="/images/maintenance-project/3-4.jpg"
                        alt="テーブルメンテナンスの流れ 余分なオイルを拭き取る"
                        width={490}
                        height={330}
                      />
                    </div>
                  </div>
                </div>

                <div className="layout-button">
                  <Link href='/note/ouchi-de-maintenance-3' legacyBehavior><a className="button target_note target_this_site">ヒダコレノートで読む</a></Link>
                </div>
              </div>

              <div className="howto-youtube-block">
                <h3 className="title-youtube">
                  <span className="yellow_line">動画でわかる！<br className="sp_only" />「おうちでテーブルメンテナンス」</span>
                </h3>
                <div className="read-youtube">
                  ヒダコレがおすすめする<br className="sp_only" />テーブルメンテナンスの方法を<br />
                  分かりやすくお伝えする為に<br className="sp_only" />Youtubeにメンテナンス動画を<br className="sp_only" />公開しております<br />
                  準備するものも簡単で、<br className="sp_only" />おうちでも楽しく<br className="sp_only" />テーブルのメンテナンスができます<br />
                  大切な家具をずっと長く使うために、<br className="sp_only" />ぜひチャレンジしてみてくださいね
                </div>
                <div className="image-youtube">
                  <Image
                    src="/images/maintenance-project/youtube.jpg"
                    alt="youtubeでみるテーブルのメンテナンス方法"
                    width={659}
                    height={344}
                  />
                </div>
                <div className="layout-button">
                  <Link href='https://www.youtube.com/watch?v=1PcnlwNL4NM' legacyBehavior><a target="_blank" className="button target_blank">Youtubeでみる</a></Link>
                </div>
              </div>
            </div>
          </section>
          
          <section id="recommendation" className="box-recommendation">

            <div className="section-heading">
              <div className="inner-heading">
                <div className="numbering">
                  <span className="type">No.</span>
                  <span className="number">4</span>
                </div>
                <div className="heading">
                  <h2>簡単にできる<br />「おうちでメンテナンス」のススメ</h2>
                </div>
                <p className="catch">Recommendation for easy<br className="sp_only" />"OUCHI DE maintenance".</p>
              </div>
            </div>

            <div className="contents-recommendation">

              <div className="caption-recommendation">
                <span className="yellow_line">ヒダコレのメンテナンスは<br className="sp_only" />”使い繋げる”メンテナンス</span>
              </div>

              <div className="items-recommendation">
                <div className="item">
                  <div className="item-heading">
                    <span className="item-number">1</span>
                    <span className="item-title">大きな循環へ</span>
                    <span className="item-read">
                      やっぱりもう「物」を大量に生産して、大量に消費することができなくなりそうです。だから、私たちもこれからは暮らしや地域、自然のことを、もっと一生懸命に考えて家具を作っていこうと思います。
                    </span>
                  </div>
                  <div className="item-images">
                    <Image
                      src="/images/maintenance-project/4-1_1.jpg"
                      alt="大きな循環へ イメージ1"
                      width={320}
                      height={209}
                    />
                    <Image
                      src="/images/maintenance-project/4-1_2.jpg"
                      alt="大きな循環へ イメージ2"
                      width={320}
                      height={209}
                    />
                  </div>
                </div>
                <div className="item reverse">
                  <div className="item-heading">
                    <span className="item-number">2</span>
                    <span className="item-title">輪をつなぐ</span>
                    <span className="item-read">
                      ヒダコレの家具は、無垢の木で作られています。その無垢の木は元は丸太であり、森で育っていたのです。みなさんに家具づくりを通して、丸太を感じていただき、森を知っていただきたいと思っています。
                    </span>
                  </div>
                  <div className="item-images">
                    <Image
                      src="/images/maintenance-project/4-2_2.jpg"
                      alt="輪をつなぐ イメージ2"
                      width={320}
                      height={209}
                    />
                    <Image
                      src="/images/maintenance-project/4-2_1.jpg"
                      alt="輪をつなぐ イメージ1"
                      width={320}
                      height={209}
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="item-heading">
                    <span className="item-number">3</span>
                    <span className="item-title">もっと近くに</span>
                    <span className="item-read">
                      お客様も一緒に、暮らし・地域・自然の事を考えながら、家具を一生懸命に使っていただけると嬉しいです。つくり手とつかい手が一緒になって考えると、きっとより良い社会に向かう気がしています。
                    </span>
                  </div>
                  <div className="item-images">
                    <Image
                      src="/images/maintenance-project/4-3_1.jpg"
                      alt="もっと近くに イメージ1"
                      width={320}
                      height={209}
                    />
                    <Image
                      src="/images/maintenance-project/4-3_2.jpg"
                      alt="もっと近くに イメージ2"
                      width={320}
                      height={209}
                    />
                  </div>
                </div>
              </div>

              <div className="layout-button">
                <Link href='/note/ouchi-de-maintenance-4' legacyBehavior><a className="button target_note target_this_site">ヒダコレノートで読む</a></Link>
              </div>

              {/* <div className="block-table_partner_shop">
                <div className="block-heading">
                  <div className="caption">TABLE PARTNER SHIP</div>
                  <div className="title">テーブルパートナーシップにむけて</div>
                </div>
                <div className="read">
                  倉庫に眠ったままある。そうしたテーブルを無料査定のうえ、買取を実施しております。<br />
                  買って使う／作って売るだけでない、別の流れを作り出し「大きな循環」をつくりだす。<br />
                  みなさんからの声をお待ちしております。どうぞお気軽にご相談ください。
                </div>
              </div> */}

            </div>

          </section>
        </div>
      </>
    );
};

export default Home;