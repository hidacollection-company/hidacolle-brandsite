import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GoToOnlineshop } from '../components/OnlineChallenge/GoToOnlineshop'

const Home: NextPage = () => {
    return (
      <div className="contents-body body-original_products">

        {/* パンクズ */}
        <div className="box__beadlist">パンクズナビ</div>

        {/* Component */}
        <div className="box-heading">
          <div className="inner-heading">
            <p className="catch">Online challenge</p>
            <div className="heading">
              <h1>こんな家具のある暮らし</h1>
              <div className="caption">
                <div className="layout-button">
                  <Link href='/' legacyBehavior><a className="go_to_online target_blank">オンラインショップでみる</a></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="visual-heading">
            <Image
              src="/test.jpg"
              alt="Picture of the author"
              width={1280}
              height={855}
            />
          </div>
        </div>

        <section className='box-introduction'>
          <p className='heading-introduction'>シンプルで合わせやすい、<br />暮らしに寄り添う家具を集めました。</p>
          <p className='bold-introduction'>お客様の暮らしに寄り添ってきたヒダコレ家具だからこそ生まれる使いやすく、生活に馴染む家具を作っています。</p>
          <ul className="listimages-introduction">
            <li>
              <figure>
                <Image
                  src="/test.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>桐箱のフタがトレイの形で物が置きやすく</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <Image
                  src="/test.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>使わない時は隙間に収納できるくらい小さく</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <Image
                  src="/test.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>今ある家具に合わせて使える</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <Image
                  src="/test.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>伝統的な和家具を今の暮らしに合うように</figcaption>
              </figure>
            </li>
          </ul>
        </section>

        <section className="box-products">
          <p className='heading-products'>暮らしに寄り添う家具</p>
          <div className="lists-products">
            <div className="block-product">
              <figure>
                <Link href='/' legacyBehavior>
                  <a className="add_corner">
                    <Image
                      src="/test.jpg"
                      alt="Picture of the author"
                      width={1280}
                      height={855}
                    />
                  </a>
                </Link>
                <figcaption>
                  <div className="hidacolle_number"><span className="line">HIDACOLLE No.</span><span className="number">001</span></div>
                  <h3>コンソールデスク</h3>
                  <div className="caption">飾り棚として用いられる奥行きの浅いミニテーブル。その発祥の地ヨーロッパでは、多くの人々に使われていたといいます。このコンソールをヒダコレがリデザイン。様々な用途に使えるようにしました。</div>
                  <div className="layout-button">
                    <Link href='/' legacyBehavior><a className="button target_blank">オンラインショップでみる</a></Link>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="block-product">
              <figure>
                <Link href='/' legacyBehavior>
                  <a className="add_corner">
                    <Image
                      src="/test.jpg"
                      alt="Picture of the author"
                      width={1280}
                      height={855}
                    />
                  </a>
                </Link>
                <figcaption>
                  <div className="hidacolle_number"><span className="line">HIDACOLLE No.</span><span className="number">001</span></div>
                  <h3>コンソールデスク</h3>
                  <div className="caption">飾り棚として用いられる奥行きの浅いミニテーブル。その発祥の地ヨーロッパでは、多くの人々に使われていたといいます。このコンソールをヒダコレがリデザイン。様々な用途に使えるようにしました。</div>
                  <div className="layout-button">
                    <Link href='/' legacyBehavior><a className="button target_blank">オンラインショップでみる</a></Link>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="block-product">
              <figure>
                <Link href='/' legacyBehavior>
                  <a className="add_corner">
                    <Image
                      src="/test.jpg"
                      alt="Picture of the author"
                      width={1280}
                      height={855}
                    />
                  </a>
                </Link>
                <figcaption>
                  <div className="hidacolle_number"><span className="line">HIDACOLLE No.</span><span className="number">001</span></div>
                  <h3>コンソールデスク</h3>
                  <div className="caption">飾り棚として用いられる奥行きの浅いミニテーブル。その発祥の地ヨーロッパでは、多くの人々に使われていたといいます。このコンソールをヒダコレがリデザイン。様々な用途に使えるようにしました。</div>
                  <div className="layout-button">
                    <Link href='/' legacyBehavior><a className="button target_blank">オンラインショップでみる</a></Link>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="block-product">
              <figure>
                <Link href='/' legacyBehavior>
                  <a className="add_corner">
                    <Image
                      src="/test.jpg"
                      alt="Picture of the author"
                      width={1280}
                      height={855}
                    />
                  </a>
                </Link>
                <figcaption>
                  <div className="hidacolle_number"><span className="line">HIDACOLLE No.</span><span className="number">001</span></div>
                  <h3>コンソールデスク</h3>
                  <div className="caption">飾り棚として用いられる奥行きの浅いミニテーブル。その発祥の地ヨーロッパでは、多くの人々に使われていたといいます。このコンソールをヒダコレがリデザイン。様々な用途に使えるようにしました。</div>
                  <div className="layout-button">
                    <Link href='/' legacyBehavior><a className="button target_blank">オンラインショップでみる</a></Link>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="block-product">
              <figure>
                <Link href='/' legacyBehavior>
                  <a className="add_corner">
                    <Image
                      src="/test.jpg"
                      alt="Picture of the author"
                      width={1280}
                      height={855}
                    />
                  </a>
                </Link>
                <figcaption>
                  <div className="hidacolle_number"><span className="line">HIDACOLLE No.</span><span className="number">001</span></div>
                  <h3>コンソールデスク</h3>
                  <div className="caption">飾り棚として用いられる奥行きの浅いミニテーブル。その発祥の地ヨーロッパでは、多くの人々に使われていたといいます。このコンソールをヒダコレがリデザイン。様々な用途に使えるようにしました。</div>
                  <div className="layout-button">
                    <Link href='/' legacyBehavior><a className="button target_blank">オンラインショップでみる</a></Link>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="block-product">
              <figure>
                <Link href='/' legacyBehavior>
                  <a className="add_corner">
                    <Image
                      src="/test.jpg"
                      alt="Picture of the author"
                      width={1280}
                      height={855}
                    />
                  </a>
                </Link>
                <figcaption>
                  <div className="hidacolle_number"><span className="line">HIDACOLLE No.</span><span className="number">001</span></div>
                  <h3>コンソールデスク</h3>
                  <div className="caption">飾り棚として用いられる奥行きの浅いミニテーブル。その発祥の地ヨーロッパでは、多くの人々に使われていたといいます。このコンソールをヒダコレがリデザイン。様々な用途に使えるようにしました。</div>
                  <div className="layout-button">
                    <Link href='/' legacyBehavior><a className="button target_blank">オンラインショップでみる</a></Link>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="box-custom_order_service">
          <div className="layout-custom_order_service">
            <div className="inner-custom_order_service">
              <p className="small-custom_order_service">もっと暮らしに寄り添うために</p>
              <p className="heading-custom_order_service">カスタマイズオーダーサービス</p>
              <div className="caption-custom_order_service">
                <p>ここの幅を部屋のここの幅に合わせたい」など暮らしの悩みも人それぞれ。</p>
                <p>家具工房のあるヒダコレでは、お取り扱いのある家具を全てお客様に合わせて、カスタマイズができます。</p>
                <p>「棒一本増やしたい」「1mmだけ小さくしたい」など、どんなお悩みでもお気軽にこ相談くださいね。</p>
              </div>
              <div className="layout-button">
                <Link href='/large-log' legacyBehavior><a className="button target_this_site">相談してみる</a></Link>
              </div>
            </div>
            <div className="visual-custom_order_service">
              <Image
                src="/test.jpg"
                alt="Picture of the author"
                width={490}
                height={455}
              />
            </div>
          </div>
        </section>

        {/* Component */}
        <GoToOnlineshop
          slug="original-products"
          caption="こんな家具のある暮らしの説明"
          ec_url="https://www.hida-collection.shop/"
        />
      </div>
    );
};

export default Home;