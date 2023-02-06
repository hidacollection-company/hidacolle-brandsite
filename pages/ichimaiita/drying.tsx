import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import { CtaBox } from 'components/CtaBox/CtaBox'
import { IchimaiitaList } from 'components/Ichimaiita/IchimaiitaList'
import { Links } from 'components/Ichimaiita/Links'

const Home: NextPage = () => {
    return (
      <div className="contents-body body-drying">
        {/* パンクズ */}
        <div className="box__beadlist">
          <Link href={"/"} legacyBehavior>
            <a className="">ホーム</a>
          </Link>
          <span>&gt;</span>
          <Link href={"/ichimaiita"} legacyBehavior>
            <a className="">一枚板の家具</a>
          </Link>
          <span>&gt;</span>
          <span>乾燥中の一枚板</span>
        </div>

        {/* Component */}
        <div className="box-heading">
          <div className="inner-heading">
            <p className="catch">Ichimaiita<br />funiture</p>
            <div className="heading">
              <h1>乾燥中の一枚板</h1>
            </div>
          </div>
          <div className="visual-heading">
            <Image
              src="/images/ichimaiita/drying/001.jpg"
              alt="Picture of the author"
              width={1280}
              height={855}
            />
          </div>
        </div>

        <section className='box-contents'>

          <p className="heading">地元飛騨の山で育った大きな栃の木</p>

          <div className="block-contents">
            <div className="inner-contents">
              <p>いろいろな理由から伐採されることになり、昨年ご縁があってヒダコレの元にやってきたのです。</p>
              <p>100年以上育った大きな栃の木は直径が1ｍ以上の大木となり、そのまま山に放置される可能性もありました・・・</p>
              <p>このような100年大樹は、やはり私たちも100年以上長く使いつなげることのできる家具を作らなければいけません。</p>
              <p>1ｍ以上の大きな丸太を製材して採れた、製材所の社長もビックリするくらいきれいな栃の一枚板。</p>
              <p>今天然乾燥を行っているところ。</p>
              <p>その後人工乾燥を経て、お客様の元に届くのはまだまだ先になりますが、ぜひ写真だけでもご覧ください!</p>
            </div>
            <div className="visaul-contents">
              <Image
                src="/images/ichimaiita/drying/002.jpg"
                alt="Picture of the author"
                width={1280}
                height={855}
              />
            </div>
          </div>
        </section>

        <section className="lists-solid_woods list-1">
          <p className="heading">真っ白栃</p>
          <ul>
            <li>
              <figure>
                <Image
                  src="/images/ichimaiita/drying/tochi01-1.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>一番板</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <Image
                  src="/images/ichimaiita/drying/tochi01-2.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>一番板</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <Image
                  src="/images/ichimaiita/drying/tochi01-3.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>一番板</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <Image
                  src="/images/ichimaiita/drying/tochi01-4.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>一番板</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <Image
                  src="/images/ichimaiita/drying/tochi01-5.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>一番板</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <Image
                  src="/images/ichimaiita/drying/tochi01-6.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>一番板</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <Image
                  src="/images/ichimaiita/drying/tochi01-7.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>一番板</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <Image
                  src="/images/ichimaiita/drying/tochi01-8.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>一番板</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <Image
                  src="/images/ichimaiita/drying/tochi01-9.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>一番板</figcaption>
              </figure>
            </li>
          </ul>
        </section>

        <section className="lists-solid_woods list-2">
          <div className="heading">
            <p>白栃(赤太少々)</p>
          </div>
          <ul>
            <li>
              <figure>
                <Image
                  src="/images/ichimaiita/drying/tochi02-1.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>一番板</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <Image
                  src="/images/ichimaiita/drying/tochi02-2.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>一番板</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <Image
                  src="/images/ichimaiita/drying/tochi02-3.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>一番板</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <Image
                  src="/images/ichimaiita/drying/tochi02-4.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>一番板</figcaption>
              </figure>
            </li>
          </ul>
        </section>

        <section className="lists-solid_woods list-3">
          <div className="heading">
            <p>赤美の栃</p>
          </div>
          <ul>
            <li>
              <figure>
                <Image
                  src="/images/ichimaiita/drying/tochi03-1.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>一番板</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <Image
                  src="/images/ichimaiita/drying/tochi03-2.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>一番板</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <Image
                  src="/images/ichimaiita/drying/tochi03-3.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>一番板</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <Image
                  src="/images/ichimaiita/drying/tochi03-4.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>一番板</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <Image
                  src="/images/ichimaiita/drying/tochi03-5.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>一番板</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <Image
                  src="/images/ichimaiita/drying/tochi03-6.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>一番板</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <Image
                  src="/images/ichimaiita/drying/tochi03-7.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>一番板</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <Image
                  src="/images/ichimaiita/drying/tochi03-8.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>一番板</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <Image
                  src="/images/ichimaiita/drying/tochi03-9.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>一番板</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <Image
                  src="/images/ichimaiita/drying/tochi03-10.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>一番板</figcaption>
              </figure>
            </li>
          </ul>
        </section>

        <div className="layout__CtaBox">
          <CtaBox
            heading = "お気に入りの栃一枚板がありましたら、<br />お気軽にお問合せ下さい。"
            caption = ""
            button_caption = "お問い合わせはこちら"
          />
        </div>

        <div className="layout__IchimaiitaList">
          <IchimaiitaList />
        </div>

        <div className="layout__Link">
          <Links
            this_page_ichimaiita_index= {false}
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
    );
};

export default Home;