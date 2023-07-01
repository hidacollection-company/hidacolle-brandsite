import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import PageHead from 'components/PageHead/PageHead'
import { GoToOnlineshop } from 'components/OnlineChallenge/GoToOnlineshop'
import { OriginalProductsList } from 'components/OriginalProducts/OriginalProductsList'
import { BreadList } from 'components/BreadList/BreadList'
import { CustomOrderCta } from 'components/CtaBox/CustomOrderCta'

import data from 'list-original-prodacts.json'

export const getStaticProps = async () => {
  return {
    props: data
  }
}

const Home: NextPage = () => {

    const bread_list : { [key: string]: string }[] = [
      {
        name: "こんな家具のある暮らし",
        url: ""
      }
    ];

    const postLists = data.postLists;

    return (
      <>
        <PageHead
          pageTitle = "こんな家具のある暮らし"
          pageDescription = "お客様と一緒に考え、一緒に家具づくりをしてきたヒダコレ家具だからこそ、使いやすく、生活に馴染む家具が生まれます。"
          pageRobots = ""
          pagePath = "https://www.hidacolle.com/original-products"
          pageImg = ""
          pageImgWidth = ""
          pageImgHeight = ""
        />

        <div className="contents-body body-original_products">

          <BreadList list={bread_list}></BreadList>

          {/* Component */}
          <div className="box-heading">
            <div className="inner-heading">
              <p className="catch">Online challenge</p>
              <div className="heading">
                <h1>こんな家具のある<br className="sp_only" />暮らし</h1>
                <div className="caption">
                  <div className="layout-button">
                    <Link href='/' legacyBehavior><a className="go_to_online target_blank">オンラインショップでみる</a></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="visual-heading">
              <Image
                src="/images/original-products/003.jpg"
                alt="こんな家具のある暮らし"
                width={1280}
                height={855}
              />
            </div>
          </div>

          <section className='box-introduction'>
            <p className='heading-introduction'>シンプルで合わせやすい、<br />暮らしに寄り添った<br className="sp_only" />インテリア家具を<br className="sp_only" />つくりました。</p>
            <p className='bold-introduction'>お客様と一緒に考え、一緒に家具づくりをしてきたヒダコレ家具だからこそ、使いやすく、生活に馴染む家具が生まれます。</p>
            <ul className="listimages-introduction">
              <li>
                <figure>
                  <Image
                    src="/images/original-products/001.jpg"
                    alt="『シンプルだから今ある家具に合わせて使える』のイメージ"
                    width={1280}
                    height={855}
                  />
                  <figcaption>シンプルだから今ある家具に合わせて使える</figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <Image
                    src="/images/original-products/002.jpg"
                    alt="『使わない時は隙間に収納できるくらい小さく』のイメージ"
                    width={1280}
                    height={855}
                  />
                  <figcaption>使わない時は隙間に収納できるくらい小さく</figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <Image
                    src="/images/original-products/003.jpg"
                    alt="『桐箱のフタがトレイの形で物が置きやすく』のイメージ"
                    width={1280}
                    height={855}
                  />
                  <figcaption>桐箱のフタがトレイの形で物が置きやすく</figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <Image
                    src="/images/original-products/004.jpg"
                    alt="『伝統的な和家具を今の暮らしに合うように』のイメージ"
                    width={1280}
                    height={855}
                  />
                  <figcaption>伝統的な和家具を今の暮らしに合うように</figcaption>
                </figure>
              </li>
            </ul>
          </section>

          <section className="box-products">
            <p className='heading-products'>ヒダコレのインテリア家具を<br className="sp_only" />ピックアップ</p>
            <div className="layout__lists-products">
              {postLists.map(post =>
                <OriginalProductsList
                  id = {post.id}
                  hidacolle_number = {post.hidacolle_number}
                  item_name = {post.item_name}
                  caption = {post.caption}
                  ec_url = {post.ec_url}
                  index = {false}
                />
              )}
            </div>
          </section>

          <section className="layout__CustomOrderCta">
            <CustomOrderCta />
          </section>

          <GoToOnlineshop
            slug="original-products"
            title="暮らしに寄り添った<br className='sp_only' />インテリア家具を<br />ネットでご注文"
            caption="使いやすく、生活に馴染むインテリア家具が「ヒダコレ オンラインショップ」ですぐにご購入いただけます。<br>ぜひ覗いてみてくださいね。"
            ec_url="https://www.hida-collection.shop/"
          />
        </div>
      </>
    );
};

export default Home;