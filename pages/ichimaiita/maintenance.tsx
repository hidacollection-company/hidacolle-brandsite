import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import { BreadList } from 'components/BreadList/BreadList'

import {Link as Scroll} from "react-scroll"

const Home: NextPage = () => {

    const bread_list : { [key: string]: string }[] = [
      {
        name: "一枚板の家具",
        url: "/ichimaiita"
      },
      {
        name: "テーブル修理・再生",
        url: ""
      }
    ];

    return (
      <div className="contents-body body-maintenance">

        <BreadList list={bread_list}></BreadList>

        {/* Component */}
        <div className="box-heading">
          <div className="inner-heading">
            <p className="catch">Ichimaiita<br className='pc_only' />funiture</p>
            <div className="heading">
            <h1>テーブル修理・再生</h1>
            </div>
          </div>
          <div className="visual-heading">
            <Image
              src="/images/ichimaiita/maintenace/001.jpg"
              alt="Picture of the author"
              width={1280}
              height={855}
            />
          </div>
        </div>

        <section className='box-introduction'>
          <p className="heading-introduction">大切な家具を<br className='pc_only' />次の世代に<br className='sp_only' />使いつなげるために</p>
          <p className='bold-introduction'>飛騨の家具づくりの技術と経験を生かして、みなさんの大切な家具を再生させます。</p>
          <div className="visual-introduction">
            <Image
              src="/images/ichimaiita/maintenace/002.jpg"
              alt="Picture of the author"
              width={1280}
              height={855}
            />
          </div>
        </section>

        <section className='box-cando'>
          <h2>テーブル再生に向けて<br />ヒダコレができる3つのこと</h2>
          <ul className="lists-cando">
            <li>
              <div className="layout-body">
                <h3 className="heading-cando">メンテナンス</h3>
                <div className="inner-cando">
                  <p>長年大切に使ってきたテーブルです。「捨てるのは忍びない」という気持ちの方も多いと思います。</p>
                  <p>ヒダコレでは、ご家庭のお部屋でできる範囲の作業を「メンテナンス」と呼んでおり、工房設立当初から２０年ほど、お部屋へ出張訪問をしてテーブルをきれいにするサービスを継続しています。</p>
                </div>
              </div>
              <Scroll to="maintenance" smooth={true} duration={600} offset={0}>
                <div>詳しくみる</div>
              </Scroll>
            </li>
            <li>
              <div className="layout-body">
                <h3 className="heading-cando">修理</h3>
                <div className="inner-cando">
                  <p>「思い出のテーブル」「愛着のあるテーブル」だけど、訳あって手放さなければいけないってこともあります。実は無垢の木で作られたテーブルは、それぞれの部材を生かして他の家具に再生させることができます。</p>
                  <p>新たな家具としてスタートをさせることで、お客様の「愛着の継続」がされると嬉しいです。</p>
                </div>
              </div>
              <Scroll to="repair" smooth={true} duration={600} offset={0}>
                <div>詳しくみる</div>
              </Scroll>
            </li>
            <li>
              <div className="layout-body">
                <h3 className="heading-cando">買取り</h3>
                <div className="inner-cando">
                  <p>それでもどうしてもテーブルを手放さなければいけない時もあります。ヒダコレでは全国の廃棄されそうな無垢の木のテーブルを救いたくって、テーブルの買い取り事業をはじました。飛騨の家具づくりの技術・経験を生かして、次の世代に使いつなげていただけるように再生事業に取り組みます。</p>
                </div>
              </div>
              <Scroll to="purchase" smooth={true} duration={600} offset={0}>
                <div>詳しくみる</div>
              </Scroll>
            </li>
          </ul>
        </section>

        <section id="maintenance" className="box-maintenance block-contetns">
          <h2><span>テーブルの</span>メンテナンス</h2>
          <div className="bold">
            <p>ヒダコレでは、ご家庭のお部屋でできる範囲の作業を「メンテナンス」と呼んでおります。</p>
            <p>植物由来のオイル塗装で仕上げたテーブルは、基本的にはずっとメンテナンスが可能です。使っているとシミが付いたり、キズが付いたりすることがありますが、それが簡単なメンテナンスの工程で使い込んだ風合いにすることもでき、潤いや光沢がもどります。</p>
            <p>ヒダコレでは、他社さんのテーブルでもメンテナンスさせていただきますので、ぜひお気軽にお問合せください。</p>
          </div>

          <div className="layout-button">
            <Scroll to="order_flow" smooth={true} duration={600} offset={-150}>
              <div className="button_to_form">ご相談からメンテナンスの流れをみる</div>
            </Scroll>
          </div>

          <div className="box-before_after">
            <h3>メンテナンスの<br className='sp_only' />ビフォー・アフター</h3>
            <ul>
              <li>
                <figure className="before">
                  <Image
                    src="/images/ichimaiita/maintenace/003_before.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                  <figcaption>ビフォー</figcaption>
                </figure>
                <div className="arrow"></div>
                <figure className="after">
                  <Image
                    src="/images/ichimaiita/maintenace/004_after.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                  <figcaption>アフター</figcaption>
                </figure>
              </li>
            </ul>
          </div>
        </section>

        <section id="repair" className="box-repair block-contetns">
          <h2><span>テーブルの</span>修理・再生</h2>
          <div className="bold">
            <p>お部屋で簡単にメンテナンスができないような状態の場合は、テーブルを工房に持ち帰ってきれいにすることもできます。</p>
            <p>ヒダコレでは、メンテナンスと区別する意味で「テーブルの修理」と呼んでいます。</p>
            <p>オイル仕上げのテーブルでも汚れがひどい場合、その他そもそもメンテナンスができないウレタン塗装がはがれてしまった状態など、一度すべての塗装を削り取ってしまってから再度仕上げの塗装をする工程となります。</p>
          </div>

          <div className="layout-button">
            <Scroll to="order_flow" smooth={true} duration={600} offset={-150}>
            <div className="button_to_form">ご相談から修理の流れをみる</div>
            </Scroll>
          </div>

          <div className="box-before_after">
            <h3>修理・再生の<br className='sp_only' />ビフォー・アフター</h3>
            <ul>
              <li>
                <figure className="before">
                  <Image
                    src="/images/ichimaiita/maintenace/005_before.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                  <figcaption>ビフォー</figcaption>
                </figure>
                <div className="arrow"></div>
                <figure className="after">
                  <Image
                    src="/images/ichimaiita/maintenace/006_after.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                  <figcaption>アフター</figcaption>
                </figure>
              </li>
              <li>
                <figure className="before">
                  <Image
                    src="/images/ichimaiita/maintenace/007_before.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                  <figcaption>ビフォー</figcaption>
                </figure>
                <div className="arrow"></div>
                <figure className="after">
                  <Image
                    src="/images/ichimaiita/maintenace/008_after.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                  <figcaption>アフター</figcaption>
                </figure>
              </li>
            </ul>
          </div>
        </section>

        {/* <section className="box-reborn block-contetns">
          <h2><span>テーブルの</span>再生</h2>
          <div className="bold">
            <p>お部屋で簡単にメンテナンスができないような状態の場合は、テーブルを工房に持ち帰ってきれいにすることもできます。</p>
            <p>ヒダコレでは、メンテナンスと区別する意味で「テーブルの修理」と呼んでいます。</p>
            <p>オイル仕上げのテーブルでも汚れがひどい場合、その他そもそもメンテナンスができないウレタン塗装がはがれてしまった状態など、一度すべての塗装を削り取ってしまってから再度仕上げの塗装をする工程となります。</p>
          </div>
          <div className="layout-button">
            <Link href='/' legacyBehavior>
              <a>ご相談から再生の流れをみる</a>
            </Link>
          </div>

          <div className="box-before_after">
            <h3>再生のビフォー・アフター</h3>
            <ul>
              <li>
                <figure className="before">
                  <Image
                    src="/test.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                  <figcaption>ビフォー</figcaption>
                </figure>
                <div className="arrow"></div>
                <figure className="after">
                  <Image
                    src="/test.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                  <figcaption>アフター</figcaption>
                </figure>
              </li>
              <li>
                <figure className="before">
                  <Image
                    src="/test.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                  <figcaption>ビフォー</figcaption>
                </figure>
                <div className="arrow"></div>
                <figure className="after">
                  <Image
                    src="/test.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                  <figcaption>アフター</figcaption>
                </figure>
              </li>
            </ul>
          </div>
        </section> */}

        <section id="purchase" className="box-purchase block-contetns">
          <h2><span>テーブルの</span>買取り</h2>
          <div className="bold">
            <p>どうしても手放さざるを得なくなった無垢のテーブルについては、買取りもさせていただいております。</p>
            <p>すべてのものではありませんが、ヒダコレの方で修理・再生が可能と判断させていただいたものについては、お見積り金額を出させていただきます。</p>
          </div>

          <div className="layout-button">
            <Scroll to="order_flow" smooth={true} duration={600} offset={-150}>
            <div className="button_to_form">ご相談から買取の流れをみる</div>
            </Scroll>
          </div>

          <div className="box-attention">
            こちらからのお引取りについては、ヤマト家財引越し便を使ってご指定の日時に引き取りに伺います。特に梱包などの作業も必要ありませんので、お待ちいただくだけで大丈夫です。
          </div>
        </section>

        <section id="order_flow" className="box-order_flow">
          <h2>ご相談から<br className='sp_only' />メンテナンス・修理・買取<br className='sp_only' />までの流れ</h2>
          <ul className="contents-order_flow">
              <li>
                <div className="layout__header">
                  <div className="heading">
                      <span className="number">1</span>
                      <h3>お問い合わせ</h3>
                  </div>
                  <div className="caption">
                      <p>
                        下記の「お問合わせフォーム」にお名前・ご住所・メールアドレスなどの必要事項をご記入の上、ご送信ください。
                      </p>
                  </div>
                </div>
              </li>
              <li>
                  <div className="layout__header">
                    <div className="heading">
                        <span className="number">2</span>
                        <h3>写真</h3>
                    </div>
                    <div className="caption">
                        <p>
                          一度こちらからご返信させていただき、今のテーブルの状態のお写真などを送っていただきます。
                        </p>
                    </div>
                  </div>
                  <div className="layout__example_images">
                    <div className="box__example_images">
                      <div className="block__example_image">
                        <Image
                            src="/images/ichimaiita/maintenace/009.jpg"
                            alt="Picture of the author"
                            width={1280}
                            height={855}
                          />
                      </div>
                      <div className="block__example_image">
                        <Image
                            src="/images/ichimaiita/maintenace/010.jpg"
                            alt="Picture of the author"
                            width={1280}
                            height={855}
                          />
                      </div>
                    </div>
                    <p className="exampleline">お送りいただきたいテーブルの写真例</p>
                  </div>
              </li>
              <li>
                <div className="layout__header">
                  <div className="heading">
                      <span className="number">3</span>
                      <h3>ヒアリング</h3>
                  </div>
                  <div className="caption">
                      <p>
                        更に詳しくいろいろと聞き取りもさせていただきます。
                      </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="layout__header">
                  <div className="heading">
                      <span className="number">4</span>
                      <h3>費用のご案内</h3>
                  </div>
                  <div className="caption">
                      <p>
                        必要経費・買取利金額などのご案内もさせていただいた後に、お客様のご意向をお聞きします。
                      </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="layout__header">
                  <div className="heading">
                      <span className="number">5</span>
                      <h3>ご判断</h3>
                  </div>
                  <div className="caption">
                      <p>
                        初めのお問合せから金額のご案内まで無料対応させていただいております。お客様は最後にご判断いただければ大丈夫です。
                      </p>
                  </div>
                </div>
              </li>
          </ul>
          <div className="layout-button">
            <Link href='/contact' legacyBehavior><a className="button_to_form">まずは何でもお気軽にお問合せください</a></Link>
          </div>
        </section>
      </div>
    );
};

export default Home;