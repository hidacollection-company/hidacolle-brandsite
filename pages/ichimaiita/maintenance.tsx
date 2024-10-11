import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import PageHead from 'components/PageHead/PageHead'
import { BreadList } from 'components/BreadList/BreadList'

import {Link as Scroll} from "react-scroll"

const Home: NextPage = () => {

    // const bread_list : { [key: string]: string }[] = [
    //   {
    //     name: "一枚板の家具",
    //     url: "/ichimaiita"
    //   },
    //   {
    //     name: "家具をメンテナンスや修理して使う",
    //     url: ""
    //   }
    // ];

    return (
      <>
        <PageHead
          pageTitle = "家具をメンテナンスや修理して使う"
          pageDescription = "まだ使える家具なので、できれば捨てずに、次の世代につかい、つなげたい。"
          pageRobots = ""
          pagePath = "https://www.hidacolle.com/ichimaiita/maintenance"
          pageImg = ""
          pageImgWidth = ""
          pageImgHeight = ""
        />

        <div className="contents-body body-maintenance">

          <section className="box--heading">
            <div className="heading--head">
              <div className="title">
                <h1>
                  家具を<br />
                  メンテナンスや<br />
                  修理して使う
                </h1>
                <p>maintenance and repair</p>
              </div>
              <div className="images">
                <img className='bg' src="/images/ichimaiita/maintenace/002/top.png" alt="" />
              </div>
            </div>
            <div className="heading--body">
              <div className="introduction--head">
                <span className="en">Regeneration furniture</span>
                <h2>再生家具</h2>
                <p className="caption">まだ使える家具なので、<br />できれば捨てずに、<br />次の世代につかい、つなげたい。</p>
              </div>
              <div className="introduction--body">
                <p>やっぱりもう「物」を大量に生産して、大量に消費することができなくなりそうです。だから、私たちもこれからは暮らしや地域、自然のことを、もっと一生懸命に考えて家具を作っていこうと思います。</p>
                <div className="thought--items">
                  <div className="item">
                    <div className="badge">
                      <span>HIDACOLLE<br />thought</span>
                      <span>1</span>
                    </div>
                    <p>「森」と「木」から「家具づくり」、そしてお客様の「暮らし」はつながっています。限られた「森」だから、「暮らし」から「捨てる」を少しづつ減らしていきたい。</p>
                  </div>
                  <div className="item">
                    <div className="badge">
                      <span>HIDACOLLE<br />thought</span>
                      <span>2</span>
                    </div>
                    <p>「もったいない」という優しい気持ちは、どこから生まれるのだろう？家族と過ごした時間や思い出を大切にする気持ちが、「愛着」になって生まれるような気がしています。</p>
                  </div>
                </div>
                <p>今まで使ってきた家具はメンテナンスや修理をすることで、まだまだ長く使える可能性があります。</p>
              </div>
            </div>
          </section>

          <section className="box--table-of-contents">

            <div className="contents--head">
              <h2>ヒダコレの考える再生家具</h2>
            </div>

            <ul className="items">
              <li className="item">
                <img src="/images/ichimaiita/maintenace/002/intro-1.jpg" alt="" />
                <div className="item--head">
                  <span>Furniture repair and refurbishment</span>
                  <p>家具の修理・再生</p>
                </div>
                <div className="item--caption">
                  長年大切に使ってきた家具です。「捨てるのは忍びない」という気持ちの方も多いはず。<br />
                  実は無垢の木で作られた家具は、きれいに修復して復活させることができます。またそれぞれの部材を生かして他の家具に修理再生させることもできるのです。
                </div>
                <div className="layout-button">
                  <Link href='#furniture-repair-and-refurbishment' legacyBehavior><a className="button target_this_site">家具の修理・再生をみる</a></Link>
                </div>
              </li>
              <li className="item">
                <img src="/images/ichimaiita/maintenace/002/intro-2.jpg" alt="" />
                <div className="item--head">
                  <span>OUCHI DE MAINTENCE PROJECT</span>
                  <p>家具のメンテナンス</p>
                </div> 
                <div className="item--caption">
                  実はテーブルのシミや汚れなどは、お部屋でできる簡単なメンテナンス作業できれいにすることができます。プロの特別な技術や道具が必要なわけではありません。お客様自身でもできる簡単な作業で生き生きと復活させることができます。
                </div>
                <div className="layout-button">
                  <Link href='#ouchi-de-maintanance-project' legacyBehavior><a className="button target_this_site">家具のメンテナンスをみる</a></Link>
                </div>
              </li>
              <li className="item">
                <img src="/images/ichimaiita/maintenace/002/intro-3.jpg" alt="" />
                <div className="item--head">
                  <span>Appraisal and purchase</span>
                  <p>一枚板の査定・買取り</p>
                </div>
                <div className="item--caption">
                  ヒダコレは「森と木と暮らし」をつなげることをテーマに、「森から木が切り出され」「家具に加工され」「お客様に届く」という山からの流れだけではなく、「お客様(暮らし)」から「ヒダコレ家具」へ、そしてまた「お客様」への一枚板の循環を作る取り組みをはじめました。
                </div>
                <div className="layout-button">
                  <Link href='#appraisal-and-purchase' legacyBehavior><a className="button target_this_site">一枚板の査定・買取りをみる</a></Link>
                </div>
              </li>
            </ul>
          </section>

          <section id="furniture-repair-and-refurbishment" className="box--contents__furniture-repair-and-refurbishment">

            <div className="contents--head">
              <div className="head--title">
                <span>Furniture repair and refurbishment</span>
                <h2>家具の修理・再生</h2>
              </div>
              <p className="head--caption">
                「思い出の家具」「愛着のあるテーブル」だけど、訳あって手放さなければいけないって時に・・・<br />
                実はその家具は修理・再生をすることができるかもしれません！<br />
                きれいに復活した家具や新たに生まれ変わった家具として、お客様の「愛着」があらたに継続されると嬉しいです。
              </p>
              <img className="head--bg-image pc_only" src="/images/ichimaiita/maintenace/002/furniture-repair-and-refurbishment-top.jpg" alt="" />
              <img className="head--bg-image sp_only" src="/images/ichimaiita/maintenace/002/furniture-repair-and-refurbishment-top-sp.jpg" alt="" />
            </div>

            <div className="contents--body">

              <div className="body--item-1">
                <div className="item-1--head">
                  <h3 className="title">特に限りある一枚板は救いたい</h3>
                </div>
                <div className="item-1--body">
                  <img className='bg pc_only' src="/images/ichimaiita/maintenace/002/furniture-repair-and-refurbishment-2.png" alt="" />
                  <img className='bg sp_only' src="/images/ichimaiita/maintenace/002/furniture-repair-and-refurbishment-2-sp.png" alt="" />
                  <div className="caption_pos">
                    <p className="caption">
                      もう日本の森に大きな木は、数に限りがあります。<br />
                      ダイニングテーブルにできるような大きな一枚板は、もう新しく世の中に出てこなくなってきているということです。<br />
                      今ご家庭で使わなくなった座卓や衝立など、実は希少価値が高いものかもしれません。<br />
                      そのような一枚板をきれいに復活させること、また新たな家具に生まれ変わらせること、ヒダコレでは新たな「一枚板の循環」を作りたいと思っています。
                    </p>
                  </div>
                  
                </div>
              </div>

              <div className="body--item-2">
                <div className="item-2--head">
                  <h3 className="title">一枚板など天板の修理の流れ</h3>
                  <span className="caption">
                    お客様は梱包や運搬の煩わしい作業は、<br />何もする必要はありません。
                  </span>
                </div>
                <div className="item-2--body">
                  <img className='bg pc_only' src="/images/ichimaiita/maintenace/002/furniture-repair-and-refurbishment-3.png" alt="" />
                  <img className='bg sp_only' src="/images/ichimaiita/maintenace/002/furniture-repair-and-refurbishment-3-sp.png" alt="" />

                </div>
              </div>

              <div className="body--item-3">
                <div className="item-3--head">
                  <h3 className="title">テーブルやイス、家具の修理</h3>
                  <span className="caption">
                    長い間テーブルを使っていると、天板が傷ついたり汚れたりして、表面が変色したり、少しべたついたりしていませんか。<br />
                    またイスの脚がグラグラしたり、座面が破れていたり・・・<br />
                    愛着がある家具だけど、使用上の問題があるとちょっと心配ですよね。<br />
                    テーブルをきれいに修理・復活させる、グラグラを補強して使用上の問題を解決するなど、家具の修理のご対応をさせていただきます。
                  </span>
                </div>
                <div className="item-3--body">
                  <div className="contact_flow">
                    <h4>お問い合わせからお届けまでの流れ</h4>
                    <div className="body-flow">
                      <div className="icons"><img src="/images/ichimaiita/maintenace/002/icon-flow.svg" alt="お問い合わせをするお客様のイメージ" /></div>
                      <div className="items-flow">
                        <div className="item">
                          <div className="num-layout">
                            <span className="caption">Flow</span>
                            <span className="number">1</span>
                          </div>
                          <div className="body-item">
                            <p className="item-head">まずはお気軽にお問い合わせください。</p>
                            <p className="item-caption">
                              「このテーブル捨てるのもったいないなあ」「きれいにしたいなあ」などのお困りごとはありませんか。お試し感覚で大丈夫です。下記フォームよりお問合せください。
                            </p>
                            <div className="item-button">
                              <div className="CtaBox_button_layout">
                                <a href="/contact">お問い合わせフォームはこちら</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="num-layout">
                            <span className="caption">Flow</span>
                            <span className="number">2</span>
                          </div>
                          <div className="body-item">
                            <p className="item-head">家具の状態の確認やお見積り</p>
                            <p className="item-caption">
                              お客様のテーブルや家具のお写真を送っていただきます。またご希望の修理やメンテナンスの内容をお聞きして、お見積り金額をご案内させていただきます。
                            </p>
                            {/* <div className="item-button"></div> */}
                          </div>
                        </div>
                        <div className="item">
                          <div className="num-layout">
                            <span className="caption">Flow</span>
                            <span className="number">3</span>
                          </div>
                          <div className="body-item">
                            <p className="item-head">家具の引き取りについて</p>
                            <p className="item-caption">
                              金額や内容がＯＫでしたら、お客様のご希望日に合わせて家具の引き取りに伺います。
                            　梱包や運搬などの煩わしい作業は何もする必要はありません。
                            </p>
                            {/* <div className="item-button"></div> */}
                          </div>
                        </div>
                        <div className="item">
                          <div className="num-layout">
                            <span className="caption">Flow</span>
                            <span className="number">4</span>
                          </div>
                          <div className="body-item">
                            <p className="item-head">修理・加工について</p>
                            <p className="item-caption">
                              お聞きした内容のメンテナンスや修理・加工の作業をさせていただきます。
                            　必要な日数などもご連絡させていただきます。
                            </p>
                            {/* <div className="item-button"></div> */}
                          </div>
                        </div>
                        <div className="item">
                          <div className="num-layout">
                            <span className="caption">Flow</span>
                            <span className="number">5</span>
                          </div>
                          <div className="body-item">
                            <p className="item-head">お支払方法について</p>
                            <p className="item-caption">
                              修理・加工が出来上がりましたら写真など完了のお知らせをさせていただきます。
                              この時点で金額のお振込みをお願いしております。
                            </p>
                            {/* <div className="item-button"></div> */}
                          </div>
                        </div>
                        <div className="item">
                          <div className="num-layout">
                            <span className="caption">Flow</span>
                            <span className="number">6</span>
                          </div>
                          <div className="body-item">
                            <p className="item-head">家具のお届け</p>
                            <p className="item-caption">
                              修理・加工が仕上がったテーブルなどは、お客様のお届けのご希望日をお聞きして納品・　設置までさせていただきます。
                            </p>
                            {/* <div className="item-button"></div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content--furniture-studio">
                <div className="layout-furniture-studio">
                  <div className="head-furniture-studio">
                    <h3>ヒダコレの家具づくり</h3>
                    <p className="caption">
                      私たちの自社工房は、<br />
                      日本一の家具産地と言われる飛騨高山にあります。<br />
                      飛騨の匠の流れをくむ「ものづくり」の伝統と歴史、<br />
                      そんな飛騨高山には全国から<br />
                      家具職人を目指して移住する人が毎年たくさんいます。<br />
                      ヒダコレ家具工房の製作メンバーも、<br />
                      いろいろ県から飛騨高山に集まり、<br />
                      日々切磋琢磨し、この地で家具づくりに精進しています。
                    </p>
                  </div>
                  <div className="body-furniture-studio">
                    <img src="/images/ichimaiita/maintenace/002/furniture-repair-and-refurbishment-5.png" alt="" />
                  </div>
                </div>
              </div>

              <div className="cta">
                <div className='before-cta-block'>
                  <p>
                    ヒダコレでは、<br className='sp_only' />お客様のお困りごとを<br className='sp_only' />お聞きするところからはじめます。<br />
                    「これきれいにできる？」「直せる？」<br className='sp_only' />というだけで大丈夫です。<br />
                    お気軽に、お試し感覚でどうぞ！
                  </p>
                </div>
                <div className="cta-block">
                  <div className="caption-cta">一枚板の修理・再生のお問い合わせ</div>
                  <div className="body-cta">
                    <p>まずはこちらのメールから<br />ご相談ください。</p>
                    <div className="CtaBox_button_layout">
                      <a href="/contact">お問い合わせはこちら</a>
                    </div>
                  </div>
                </div>
                <div className='after-cta-block'>
                  <a href="#appraisal-and-purchase">一枚板の査定・買取りも<br className='sp_only' />ご検討ください</a>
                </div>
              </div>
            </div>
          </section>

          <section id="ouchi-de-maintanance-project" className="box--contents__ouchi-de-maintanance-project">

            <div className="contents--head">
              <div className="head--title">
                <h2>家具の<br className='sp_only' />メンテナンス</h2>
              </div>
            </div>

            <div className="contents--body">
              <div className="maintanance-at-home">
                <span className="title-en">MAINTENACE AT HOME</span>
                <p className="title">メンテナンスする暮らし</p>
                <p className="caption">家具を大切にする。って「たくさん使うことだ」と私たちは思っています。たくさんドシドシ使っていると、当然汚れるし傷みも出てきます。でもまったく難しくない簡単にできるメンテナンス作業だけで、シミや汚れが改善されて、さらに大切な存在に変わっていってくれます。</p>
              </div>
              <div className="lead">
                <p className="title-lead">大切な家具を、<br />もっと大切にする</p>
                <p className="caption-lead">
                  愛着を持って長くテーブルを使っているとシミや傷、汚れが付きます。<br />
                  それは、お子さんが赤ちゃんの時に噛んでできた傷や、初めて書いた落書きなど、よくみると思い出がたくさん詰まったテーブルになっています。<br />
                  そういった傷や汚れを"愛着"として残すことで、思い出の積み重ねが良い風合いとなって、より素敵なテーブルにしてくれると思っています。
                </p>
              </div>
              <div className="caption-project">
                <span>
                  OUCHI DE MAINTENANCE PROJECT</span>
                <p>
                  ヒダコレでは、テーブルのメンテナンスについて「読みもの」としてまとめてみました。<br />
                  シミやキズなどの傷みについて、ヨゴレの原因について、そしてメンテナンスの方法、<br />
                  さらにメンテナンスしながら豊かに暮らすことについて書いています。<br />
                  No.1からNo.4まで。ぜひ一度読んでみてください。
                </p>
              </div>
              <ul className="items">
                <li className="item">
                  <img src="/images/ichimaiita/maintenace/002/ouchi-de-maintanance-project-1.jpg" alt="よくあるテーブルのお困りごと" />
                  <h3>よくあるテーブルのお困りごと</h3>
                  <div className="layout-button">
                    <Link href='/maintenance-project/#table_trouble' legacyBehavior><a className="button target_this_site">くわしくみる</a></Link>
                  </div>
                </li>
                <li className="item">
                  <img src="/images/ichimaiita/maintenace/002/ouchi-de-maintanance-project-2.jpg" alt="テーブルは「水拭き」してはいけない！" />
                  <h3>テーブルは「水拭き」してはいけない！</h3>
                  <div className="layout-button">
                    <Link href='/maintenance-project/#no_wiping' legacyBehavior><a className="button target_this_site">くわしくみる</a></Link>
                  </div>
                </li>
                <li className="item">
                  <img src="/images/ichimaiita/maintenace/002/ouchi-de-maintanance-project-3.jpg" alt="テーブルのメンテナンス方法は" />
                  <h3>テーブルのメンテナンス方法は</h3>
                  <div className="layout-button">
                    <Link href='/maintenance-project/#how_to' legacyBehavior><a className="button target_this_site">くわしくみる</a></Link>
                  </div>
                </li>
                <li className="item">
                  <img src="/images/ichimaiita/maintenace/002/ouchi-de-maintanance-project-4.jpg" alt="「おうちでメンテナンス」のススメ" />
                  <h3>「おうちでメンテナンス」のススメ</h3>
                  <div className="layout-button">
                    <Link href='/maintenance-project/#recommendation' legacyBehavior><a className="button target_this_site">くわしくみる</a></Link>
                  </div>
                </li>
              </ul>
              <div className="banners">
                <p className="caption">
                  実はテーブルのメンテナンスって簡単な作業です。<br />
                  特別な道具も必要ありませんし、<br />
                  時間も30分程で済みます。<br />
                  HOWto動画も用意しております。<br />
                  ぜひ「おうちでメンテナンスプロジェクト」をご覧ください。
                </p>
                <div className="banner-box">
                  <span className="title-en">OUCHI DE MAINTENCE PROJECT</span>
                  <p className="title">おうちでメンテナンスプロジェクト</p>
                  <div className="layout-button">
                    <Link href='/maintenance-project' legacyBehavior><a className="button target_this_site">くわしくみる</a></Link>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section id="appraisal-and-purchase" className="box--contents__appraisal-and-purchase">
            <div className="contents--head">
              <div className="head--title">
                <span>Appraisal and purchase</span>
                <h2>必要なくなった<br className='sp_only' />一枚板の<br />査定・買取</h2>
              </div>
              <p className="head--caption">
                長年使ってきた一枚板テーブルや座卓、倉庫に眠っている木材など、使わなくなった家具や使わなかった木材などの買取りもさせていただいております。<br />
                簡単なお写真を撮っていただいて送るだけ。<br />
                私たちがしっかり査定をして、お見積り金額のご案内をさせていただきます。
              </p>
              <img className="head--bg-image pc_only" src="/images/ichimaiita/maintenace/002/things_you_can_buy-top.jpg" alt="" />
              <img className="head--bg-image sp_only" src="/images/ichimaiita/maintenace/002/things_you_can_buy-top-sp.jpg" alt="" />
            </div>

            <div className="body">
              <div className="why-appraisal-and-purchase">
                <h3>なぜ一枚板の査定・買取をするの?</h3>
                <div className="items--why-appraisal-and-purchase">
                  <div className="item">
                    <p>
                      一枚板。<br />
                      みなさんがテーブルなどにされる大きな木の天板です。<br />
                      百年以上という長い年月をかけて育った大木も珍しくありませんでしたが、いまの日本の森には、<span>一枚板テーブルにできるような大きな木がほとんど残されていません</span>。本当に限りが見えてきた資源といえると思います。
                    </p>
                    <img src="/images/ichimaiita/maintenace/002/things_you_can_buy-2.jpg" alt="" />
                  </div>
                  <div className="item reverse">
                    <p>
                      森からなくなりつつある一枚板ですが、実は暮らしの中に寝むっている一枚板もあることに気づきました。<span>何十年も使って継承できなくなった一枚板</span>、<span>事情があって必要なくなった一枚板</span>、<span>倉庫に眠っている一枚板の原木</span>など。<br />
                      ヒダコレでは、このような町の中にある一枚板、暮らしの中にある一枚板を、<span>もう一度循環できるようにしたい</span>と考えております。
                    </p>
                    <img src="/images/ichimaiita/maintenace/002/things_you_can_buy-3.jpg" alt="" />
                  </div>

                </div>
              </div>
              <div className="contact_flow">
                <h4>お問合せから引き取り、<br />お支払いまでの流れ</h4>
                <div className="body-flow">
                  <div className="icons"><img src="/images/ichimaiita/maintenace/002/icon-flow.svg" alt="お問い合わせをするお客様のイメージ" /></div>
                  <div className="items-flow">
                    <div className="item">
                      <div className="num-layout">
                        <span className="caption">Flow</span>
                        <span className="number">1</span>
                      </div>
                      <div className="body-item">
                        <p className="item-head">まずはお気軽にお問い合わせください</p>
                        <p className="item-caption">
                          「この一枚板捨てるのもったいないなあ」「倉庫の木材どうしよう？」などのお困りごと　ありませんか。お試し感覚で大丈夫です。下記フォームよりお問合せください。
                        </p>
                        <div className="item-button">
                          <div className="CtaBox_button_layout">
                            <a href="/contact">お問い合わせフォームはこちら</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="num-layout">
                        <span className="caption">Flow</span>
                        <span className="number">2</span>
                      </div>
                      <div className="body-item">
                        <p className="item-head">一枚板の状態の確認やお見積り</p>
                        <p className="item-caption">
                          必要なくなった一枚板のお写真を送っていただきます。天板のサイズや状態を確認をして、買取り金額・配送料をご案内させていただきます。
                        </p>
                        {/* <div className="item-button"></div> */}
                      </div>
                    </div>
                    <div className="item">
                      <div className="num-layout">
                        <span className="caption">Flow</span>
                        <span className="number">3</span>
                      </div>
                      <div className="body-item">
                        <p className="item-head">一枚板の引き取りについて</p>
                        <p className="item-caption">
                          引き取り配送料を含めた金額がＯＫでしたら、お客様のご希望日に合わせて一枚板の引き　取りに伺います。
                          梱包や運搬などの煩わしい作業は何もする必要はありません。
                        </p>
                        {/* <div className="item-button"></div> */}
                      </div>
                    </div>
                    <div className="item">
                      <div className="num-layout">
                        <span className="caption">Flow</span>
                        <span className="number">4</span>
                      </div>
                      <div className="body-item">
                        <p className="item-head">お支払方法について</p>
                        <p className="item-caption">
                          一枚板がこちらに届きましたら、ご請求書をいただいてお振込みをさせていただきます。
                        </p>
                        {/* <div className="item-button"></div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="things_you_can_buy">
                <div className="head-things_you_can_buy">
                  <div className="title">一枚板として査定・買取できます</div>
                </div>
                <div className="body-things_you_can_buy">
                  <img src="/images/ichimaiita/maintenace/002/things_you_can_buy-1.png" alt="ヒダコレ家具が査定・買取できるもの" />
                </div>
              </div>
              <div className="cta">
                <div className="caption-cta">一枚板の修理・再生のお問い合わせ</div>
                <div className="body-cta">
                  <p>まずはお気軽にご相談ください。</p>
                  <div className="CtaBox_button_layout">
                    <a href="/contact">お問い合わせはこちら</a>
                  </div>
                </div>
              </div>
            </div>
          </section>



          
        </div>
      </>
    );
};

export default Home;