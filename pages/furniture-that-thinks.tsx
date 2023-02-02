import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

const Home: NextPage = () => {
    return (
      <section className="contents-body body-furniture_that_thinks">
        <h1 className='heading'>考える家具</h1>
        <div className="lead-furniture_that_thinks">
          <div className="block-lead_furniture_that_thinks">
            <p>ものづくりを起点に、暮らしを考えるきっかけを提供したい。小さな共感を大切に社会とつながり、自然とつながり、「考えること」の輪作る。</p>
            <p>ヒダコレの目指したい未来の姿は、自身の「暮らし」の事を考え始めることからはじまります。「暮らし」を考えると、次に「地域・社会」を考えはじめ、そして「自然・地球」を考えるようになるといいなって思っています。</p>
          </div>
          <div className="block-lead_furniture_that_thinks">
            <p>やっぱりもう「物」を大量に生産して、大量に消費することができなくなりそうです。だから、私たちもこれからは暮らしや地域、自然のことを、もっと一生懸命に考えて家具を作っていこうと思います。</p>
            <p>だから、お客様も一緒に暮らし、地域、自然の事を考え、家具を一生懸命に使っていただけると嬉しいです。つくり手とつかい手が一緒になって考えると、きっとより良い社会に向かう気がしています。</p>
            <p className='caption'>ー つくる責任 つかう責任</p>
          </div>
          <div className="block-lead_furniture_that_thinks">
            <p>ヒダコレのお仕事はお客様の家具を作ることです。そして、その家具でお客様が「暮らし」を考えはじめるきっかけになるといいなと思います。だから私たちの家具の名前を『考える家具』と呼んでいます。私たちのものづくりの理念のようなものです。</p>
            <p className='caption'>ー ヒダコレのお仕事は家具をつくること</p>
          </div>
        </div>
        <section className="box-logo_that_thinks">
          <h2>ヒダコレ家具のロゴに込められた想い</h2>
          <div className="contents-logo_that_thinks">
            <div className="block-logo_that_thinks">
              <figure>
                <Image
                  src="/test.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>家具づくりを通してお客様の暮らしに寄り添う。<br />ヒダコレ家具の立ち位置を示したロゴマークです。</figcaption>
              </figure>
            </div>
            <div className="block-logo_that_thinks">
              <figure>
                <Image
                  src="/test.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>家具づくりを通してお客様の暮らしに寄り添う。<br />ヒダコレ家具の立ち位置を示したロゴマークです。</figcaption>
              </figure>
            </div>
            <div className="block-logo_that_thinks">
              <figure>
                <Image
                  src="/test.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>家具づくりを通してお客様の暮らしに寄り添う。<br />ヒダコレ家具の立ち位置を示したロゴマークです。</figcaption>
              </figure>
            </div>
            <div className="block-logo_that_thinks">
              <figure>
                <Image
                  src="/test.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
                <figcaption>家具づくりを通してお客様の暮らしに寄り添う。<br />ヒダコレ家具の立ち位置を示したロゴマークです。</figcaption>
              </figure>
            </div>
          </div>
        </section>
      </section>
    );
};

export default Home;