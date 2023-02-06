import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GoToOnlineshop } from 'components/OnlineChallenge/GoToOnlineshop'
import { OriginalProductsList } from 'components/OriginalProducts/OriginalProductsList'

import data from 'list-original-prodacts.json'

export const getStaticProps = async () => {
  return {
    props: data
  }
}

const Home: NextPage = () => {

    const postLists = data.postLists;

    return (
      <div className="contents-body body-original_products">

        {/* パンクズ */}
        <div className="box__beadlist">
          <Link href={"/"} legacyBehavior>
            <a className="">ホーム</a>
          </Link>
          <span>&gt;</span>
          <span>こんな家具のある暮らし</span>
        </div>

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
              src="/images/original-products/003.jpg"
              alt="こんな家具のある暮らし"
              width={1280}
              height={855}
            />
          </div>
        </div>

        <section className='box-introduction'>
          <p className='heading-introduction'>シンプルで合わせやすい、<br />暮らしに寄り添ったインテリア家具をつくりました。</p>
          <p className='bold-introduction'>お客様と一緒に考え、一緒に家具づくりをしてきたヒダコレ家具だからこそ、使いやすく、生活に馴染む家具が生まれます。</p>
          <ul className="listimages-introduction">
            <li>
              <figure>
                <Image
                  src="/images/original-products/001.jpg"
                  alt="Picture of the author"
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
                  src="/images/original-products/003.jpg"
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
                  src="/images/original-products/004.jpg"
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
          <p className='heading-products'>ヒダコレのインテリア家具をピックアップ</p>
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

        <section className="box-custom_order_service">
          <div className="layout-custom_order_service">
            <div className="inner-custom_order_service">
              <p className="small-custom_order_service">もっと暮らしに寄り添うことも、</p>
              <p className="heading-custom_order_service">カスタムオーダーでご対応できます。</p>
              <div className="caption-custom_order_service">
                <p>「部屋に合わせて幅を広げたい」「引出しなどの収納がほしい」など、暮らしの中のご要望も人それぞれ。</p>
                <p>自社工房で製作しているヒダコレでは、すべての家具・インテリア小物は、お客様のご希望に合わせてカスタマイズができます。</p>
                <p>どんなご希望でもお気軽にこ相談くださいね。</p>
              </div>
              <div className="layout-button">
                <Link href='/large-log' legacyBehavior><a className="button target_this_site">相談してみる</a></Link>
              </div>
            </div>
            <div className="visual-custom_order_service">
              <Image
                src="/images/original-products/illust-1.jpg"
                alt="Picture of the author"
                width={490}
                height={455}
              />
            </div>
          </div>
        </section>

        <GoToOnlineshop
          slug="original-products"
          title="暮らしに寄り添ったインテリア家具を<br />ネットでご注文"
          caption="使いやすく、生活に馴染むインテリア家具が「ヒダコレ オンラインショップ」ですぐにご購入いただけます。<br>ぜひ覗いてみてくださいね。"
          ec_url="https://www.hida-collection.shop/"
        />
      </div>
    );
};

export default Home;