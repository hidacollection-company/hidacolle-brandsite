import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import PageHead from 'components/PageHead/PageHead'
import { BreadList } from 'components/BreadList/BreadList'

const Home: NextPage = () => {

    const bread_list : { [key: string]: string }[] = [
      {
        name: "考える家具",
        url: ""
      }
    ];

    return (

      <>
        <PageHead
          pageTitle = "考える家具"
          pageDescription = "ヒダコレのお仕事はお客様の家具を作ることです。そして、その家具でお客様が「暮らし」を考えはじめるきっかけになるといいなと思います。だから私たちの家具の名前を『考える家具』と呼んでいます。私たちのものづくりの理念のようなものです。"
          pagePath = "https://www.hidacolle.com/furniture-that-thinks"
          pageImg = ""
          pageImgWidth = ""
          pageImgHeight = ""
        />

        <section className="contents-body body-furniture_that_thinks">

          <BreadList list={bread_list}></BreadList>

          <h1 className='heading'>考える家具</h1>
          <div className="lead-furniture_that_thinks">
            <div className="block-lead_furniture_that_thinks">
              <p>ものづくりを起点に、暮らしを考えるきっかけを提供したい。小さな共感を大切に社会とつながり、自然とつながり、「考えること」の輪を作る。</p>
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
            <h2>ヒダコレ家具の、<br className='sp_only' />このマークの意味は、</h2>
            <div className="contents-logo_that_thinks">
              <div className="block-logo_that_thinks">
                <figure>
                  <Image
                    src="/images/furniture-that-thinks/logo-1.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                  <figcaption>「家具づくり」を通して、お客様の暮らしに寄り添うために、<br className='pc_only' />ヒダコレ家具とお客様との立ち位置を示しています。</figcaption>
                </figure>
              </div>
              <div className="block-logo_that_thinks">
                <figure>
                  <Image
                    src="/images/furniture-that-thinks/logo-2.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                  <figcaption>お客様のお部屋の、そして暮らし方の「形」と、<br className='pc_only' />家具を作るための木である「丸太」を組み合わせると、</figcaption>
                </figure>
              </div>
              <div className="block-logo_that_thinks">
                <figure>
                  <Image
                    src="/images/furniture-that-thinks/logo-3.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                  <figcaption>お客様の暮らしと、森の丸太の間に、<br />ヒダコレ家具が浮かび上がってきます。</figcaption>
                </figure>
              </div>
              <div className="block-logo_that_thinks">
                <figure>
                  <Image
                    src="/images/furniture-that-thinks/logo-4.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                  <figcaption>またこのマークの組み合わせで、<br className='pc_only' />ヒダコレ家具のものづくりのバリエーションも表しています。</figcaption>
                </figure>
              </div>
              <div className="block-logo_that_thinks">
                <figure>
                  <Image
                    src="/images/furniture-that-thinks/logo-5.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                  {/* <figcaption>またこのマークの組み合わせで、<br />ヒダコレ家具のものづくりのバリエーションも表しています。</figcaption> */}
                </figure>
              </div>
            </div>
          </section>
        </section>
        </>
    );
};

export default Home;